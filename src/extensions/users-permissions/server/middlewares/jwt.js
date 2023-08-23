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
      const token = ctx.response.body.jwt;
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
      }
      return
    }
  };
}