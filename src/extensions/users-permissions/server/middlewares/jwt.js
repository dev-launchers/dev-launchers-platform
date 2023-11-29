module.exports = (options, { strapi }) => {
  return async (ctx, next) => {
    /*
      authenticate users via httponly cookie. If there is no auth header provided, get the cookie with JWT
      then set the jwt in the auth header
    */
    const token = ctx.cookies.get('token');
    if (token) {
      ctx.request.header.authorization = 'Bearer ' + token;
    }
    // Execute the action.
    await next();
    // Check if the route is local login or login with a provider
    // Set token in cookie
    if (ctx.url.startsWith('/api/auth/')) {
      const body = ctx.response.body;
      if (!body) {
        return
      }
      const token = body.jwt;
      if (token) {
        /*
          if in dev env, disable secure option because secure option
          makes it so the cookie can only be sent through https, but in
          development envrionment we use http
        */
        // TODO: Replace this with a reusable function
        const isDev = process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test'
        if (isDev) {
          ctx.cookies.set('token', token);
        } else {
          ctx.cookies.set('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 Days
            sameSite: 'None'
          });
        }

        // Local auth is used for integration test. Don't redirect
        if (ctx.url == '/api/auth/local') {
          return
        }

        const redirectURL = ctx.session.grant?.dynamic?.redirectURL;
        if (redirectURL) {
          return ctx.redirect(redirectURL);
        }

        const user = body.user;
        if (!user.username) {
          ctx.redirect(`${process.env.FRONTEND_URL}/signup`);
        } else {
          ctx.redirect(`${process.env.FRONTEND_URL}/users/me`);
        }
      }
      return
    }
  };
}