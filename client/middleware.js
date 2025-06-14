export function middleware(req) {
  const auth = req.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic") {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");

      if (user === "omnilearn" && pass === "secret123") {
        return new Response(null, { status: 200 });
      }
    }
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="OmniLearn Private"',
    },
  });
}

