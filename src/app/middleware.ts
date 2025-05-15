// This is a placeholder middleware that does nothing.
// We're using client-side authentication with localStorage instead.
export function middleware() {
  return;
}

// Ensure the middleware doesn't run on api routes or static files
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}