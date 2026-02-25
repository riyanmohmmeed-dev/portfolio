#!/usr/bin/env python3
"""Start a local server on a free port. Avoids 'Address already in use'."""
import http.server
import socketserver
import sys

PORT = 0  # 0 = let OS pick a free port

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        port = httpd.server_address[1]
        print(f"\n  Portfolio running at:  http://localhost:{port}\n")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.\n")
