
# NGINX Tutorial  
https://gitlab.com/twn-youtube/nginx-crash-course

This project demonstrates how to use **NGINX** as a:

- Static file server (e.g., `index.html`, `styles.css`)
- Reverse proxy to a Node.js backend
- Load balancer for multiple backend instances
- SSL-ready (optional OpenSSL support)

## 📁 Project Structure

```
nginx-tutorial/
├── frontend/               # Optional frontend static content
│   ├── index.html
│   └── styles.css
├── server/                 # Backend Node.js server
│   └── index.js
├── nginx/
│   └── nginx.conf          # NGINX configuration
├── docker-compose.yml      # Multi-service Docker setup
└── README.md
```

## ⚙️ Requirements

- Docker
- Docker Compose

## 🚀 Getting Started

### Clone the Repo

```bash
git clone https://github.com/VasileCuzmin/nginx-tutorial.git
cd nginx-tutorial
```

### Run the Setup

```bash
docker-compose up --build
```

- NGINX: http://localhost:8080
- Backend Servers (optional): Only accessible internally via NGINX

### Scale Servers for Load Balancing

```bash
docker-compose up --scale server=3
```

_Note: Make sure your NGINX config routes to correct internal ports like `server1:3000`, `server2:3000`, etc._

## 🔒 SSL (Optional)

You can generate self-signed certs using OpenSSL:

```bash
mkdir certs
openssl req -x509 -newkey rsa:4096 -nodes -out nginx-selfsigned.crt -keyout nginx-selfsigned.key -days 365
```

Update `nginx.conf` to use `ssl_certificate` and `ssl_certificate_key`.

## 📦 Environment Variables

Some backend services use:

```env
PORT=3000
SERVER_NAME=Server1
```

## 📁 .gitignore

Make sure to exclude:

```gitignore
node_modules/
.env
*.key
*.crt
certs/
```

## 📚 Learning Concepts

- Docker networking
- NGINX upstream and load balancing
- Proxy headers
- Static file routing
- Rewrite and redirect rules

---

Feel free to clone, modify, and experiment!
