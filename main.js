from flask import Flask, request, redirect
from datetime import datetime
import json

app = Flask(__name__)

@app.route('/rastrear')
def rastrear():
    info = {
        "data": datetime.now().isoformat(),
        "ip": request.headers.get('X-Forwarded-For', request.remote_addr),
        "user_agent": request.headers.get('User-Agent'),
        "idioma": request.headers.get('Accept-Language'),
        "referer": request.headers.get('Referer'),
        "headers": dict(request.headers)
    }
    
    # Salva no arquivo
    with open("acessos.json", "a") as f:
        f.write(json.dumps(info) + "\n")
    
    # Redireciona para o link real
    return redirect("https://seu-link-real.com")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)