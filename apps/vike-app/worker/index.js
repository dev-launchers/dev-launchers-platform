import { handleSsr } from './ssr';
import { handleStaticAssets } from './static-assets';

addEventListener('fetch', (event) => {
  try {
    event.respondWith(
      handleFetchEvent(event).catch((err) => {
        console.error(err.stack);
      })
    );
  } catch (err) {
    console.error(err.stack);
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});

async function handleFetchEvent(event) {
  const { url } = event.request;
  if (
    ['ideaspace', 'join', 'projects', 'users'].includes(
      new URL(url).pathname.split('/')[1]
    )
  ) {
    console.log('rewriting pathname');
    const OLD_URL = '/_next/static/';
    const NEW_URL = 'https://devlaunchers.org/_next/static/';

    class AttributeRewriter {
      constructor(attributeName) {
        this.attributeName = attributeName;
      }
      element(element) {
        const attribute = element.getAttribute(this.attributeName);
        if (attribute) {
          element.setAttribute(
            this.attributeName,
            attribute.replace(OLD_URL, NEW_URL)
          );
        }
      }
    }

    const rewriter = new HTMLRewriter()
      .on('a', new AttributeRewriter('href'))
      .on('img', new AttributeRewriter('src'))
      .on('link', new AttributeRewriter('href'))
      .on('script', new AttributeRewriter('src'));

    const res = await fetch(`https://devlaunchers.org${new URL(url).pathname}`);
    const contentType = res.headers.get('Content-Type');

    // If the response is HTML, it can be transformed with
    // HTMLRewriter -- otherwise, it should pass through
    if (contentType.startsWith('text/html')) {
      return rewriter.transform(res);
    } else {
      return res;
    }
  }
  if (isNextAssetsUrl(url)) {
    const response = await fetch(
      `https://devlaunchers.org${new URL(url).pathname}`
    );
    return response;
  }
  if (!isAssetUrl(url)) {
    const { headers } = event.request;
    const response = await handleSsr(url, headers);
    if (response !== null) return response;
  }
  const response = await handleStaticAssets(event);
  return response;
}

function isNextAssetsUrl(url) {
  const { pathname } = new URL(url);
  return pathname.startsWith('/_next/');
}

function isAssetUrl(url) {
  const { pathname } = new URL(url);
  return pathname.startsWith('/assets/');
}
