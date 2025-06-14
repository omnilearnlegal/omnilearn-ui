export function middleware(req) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = atob(auth).split(':');

    if (user === "omnilearn" && pwd === "secret123") {
      return new Response(null, { status: 200 });
    }
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="OmniLearn Private"',
    },
  });
}

