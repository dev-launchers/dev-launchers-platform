// This file isn't processed by Vite, see https://github.com/vikejs/vike/issues/562
// Consequently:
//  - When changing this file, you needed to manually restart your server for your changes to take effect.
//  - To use your environment variables defined in your .env files, you need to install dotenv, see https://vike.dev/env
//  - To use your path aliases defined in your vite.config.js, you need to tell Node.js about them, see https://vike.dev/path-aliases

// If you want Vite to process your server code then use one of these:
//  - vavite (https://github.com/cyco130/vavite)
//     - See vavite + Vike examples at https://github.com/cyco130/vavite/tree/main/examples
//  - vite-node (https://github.com/antfu/vite-node)
//  - HatTip (https://github.com/hattipjs/hattip)
//    - You can use Bati (https://batijs.github.io/) to scaffold a Vike + HatTip app. Note that Bati generates apps that use the V1 design (https://vike.dev/migration/v1-design) and Vike packages (https://vike.dev/vike-packages)

// server/index.js

const m_koa = require('koa');
const m_koa_router = require('koa-router');
const m_koa_static = require('koa-static');
const m_koa_connect = require('koa-connect');
const m_koa_compress = require('koa-compress');
const { renderPage } = require('vike/server');

const m_vite = require('vite');

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

startServer();

async function startServer() {
	
	const app = new m_koa();
	app.use(m_koa_compress());
	
	const router = new m_koa_router();
	
	if (isProduction) {
		// In production, we need to serve our static assets ourselves.
		// (In dev, Vite's middleware serves our static assets.)
		app.use(m_koa_static(`${root}/dist/client`));
	} else {
		// We instantiate Vite's development server and integrate its middleware to our server.
		// ⚠️ We instantiate it only in development. (It isn't needed in production and it
		// would unnecessarily bloat our server in production.)
		const viteDevMiddleware = (
			await m_vite.createServer({
				root,
				server: { middlewareMode: true }
			})
		).middlewares;
		app.use(m_koa_connect(viteDevMiddleware));
	};
	
	// ...
	// Other middlewares (e.g. some RPC middleware such as Telefunc)
	// ...
	
	// vike middleware. It should always be our last middleware (because it's a
	// catch-all middleware superseding any middleware placed after it).
	router.get('(.*)', async (ctx, next) => {
		
		const pageContextInit = { urlOriginal: ctx.originalUrl, };
		const pageContext = await renderPage(pageContextInit);
		const { httpResponse } = pageContext;
		if(!httpResponse){ return next() };
		
		ctx.status = httpResponse.statusCode;
		ctx.type = httpResponse.contentType;
		ctx.body = httpResponse.body;
		
	});
	app.use(router.routes());
	
	const port = process.env.PORT || 3000;
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}`);
	});
};