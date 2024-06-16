// https://vike.dev/onRenderClient
export { onRenderClient }

import ReactDOM from 'react-dom/client'
import { getHeadSetting } from './getHeadSetting.js'
import type { OnRenderClientSync } from 'vike/types'
import { getPageElement } from './getPageElement.js'

let root: ReactDOM.Root
const onRenderClient: OnRenderClientSync = (pageContext): ReturnType<OnRenderClientSync> => {
  const page = getPageElement(pageContext)

  const container = document.getElementById('page-view')!
  if (container.innerHTML !== '' && pageContext.isHydration) {
    // First render (hydration)
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      // First render (not hydration)
      root = ReactDOM.createRoot(container)
    } else {
      // Client-side navigation

      const title = getHeadSetting('title', pageContext) || ''
      const lang = getHeadSetting('lang', pageContext) || 'en'
      const favicon = getHeadSetting('favicon', pageContext)

      // We skip if the value is undefined because we shouldn't remove values set in HTML (by the Head setting).
      //  - This also means that previous values will leak: upon client-side navigation, the title set by the previous page won't be removed if the next page doesn't override it. But that's okay because usually pages always have a favicon and title, which means that previous values are always overriden. Also, as a workaround, the user can set the value to `null` to ensure that previous values are overriden.
      if (title !== undefined) document.title = title
      if (lang !== undefined) document.documentElement.lang = lang
      if (favicon !== undefined) setFavicon(favicon)
    }

    root.render(page)
  }
}

// https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically/260876#260876
function setFavicon(faviconUrl: string | null) {
  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']")
  if (!faviconUrl) {
    if (link) document.head.removeChild(link)
    return
  }
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = faviconUrl
}
