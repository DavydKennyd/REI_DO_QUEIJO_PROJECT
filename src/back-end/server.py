import json
from http.server import BaseHTTPRequestHandler, HTTPServer
import os

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/public/index.html'
        elif self.path == '/carrinho':
            self.path = '/public/carrinho.html'
        
        try:
            send_reply = False
            if self.path.endswith(".html"):
                mimetype = 'text/html'
                send_reply = True
            elif self.path.endswith(".jpg"):
                mimetype = 'image/jpg'
                send_reply = True
            elif self.path.endswith(".png"):
                mimetype = 'image/png'
                send_reply = True
            elif self.path.endswith(".js"):
                mimetype = 'application/javascript'
                send_reply = True
            elif self.path.endswith(".css"):
                mimetype = 'text/css'
                send_reply = True
            
            if send_reply:
                file_path = os.path.join(os.getcwd(), 'frontend', self.path.lstrip('/'))
                with open(file_path, 'rb') as file:
                    self.send_response(200)
                    self.send_header('Content-type', mimetype)
                    self.end_headers()
                    self.wfile.write(file.read())
            return
        except IOError:
            self.send_error(404, 'File Not Found: %s' % self.path)
    
    def do_POST(self):
        if self.path == '/add_to_cart':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            item = json.loads(post_data)

            with open('backend/cart.json', 'r+') as file:
                cart = json.load(file)
                cart.append(item)
                file.seek(0)
                json.dump(cart, file)
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"message": "Item adicionado ao carrinho!"}).encode())
            return

def run():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, MyHandler)
    print('Servidor rodando na porta 8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
