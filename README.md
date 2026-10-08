# Go Furniture - Full Stack DevOps Project

Go Furniture is a full-stack furniture shopping application built as a DevOps portfolio project.

## Application stack

- Frontend: HTML, CSS, JavaScript
- Web server / reverse proxy: Nginx
- Backend: Node.js + Express
- Database: PostgreSQL
- Containers: Docker
- Orchestration: Kubernetes
- CI/CD: Jenkins
- Monitoring: Prometheus + Grafana

## Architecture

Browser -> Nginx -> Node.js API -> PostgreSQL

DevOps flow:

GitHub -> Jenkins -> Docker -> Kubernetes -> Prometheus -> Grafana

## Run locally with Docker Compose

```bash
docker compose up --build
```

Open:

http://localhost:8080

Backend health:

http://localhost:8080/api/health

## Project structure

```text
go-furniture/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── database/
│   └── init.sql
├── nginx/
│   └── nginx.conf
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Kubernetes

The next deployment phase should use separate Kubernetes Deployments/Services for:
- frontend
- backend
- PostgreSQL

For production, PostgreSQL should use persistent storage and secrets rather than plain-text passwords.
