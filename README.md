# devsecops-lab — Legal Things

A full web landing page for **Legal Things** — a practice across fashion, design, art and creative culture.

## Stack

- **Frontend:** Angular 18 (standalone components) — fetches works from the Java API
- **Backend:** Java 17 + Spring Boot 3 — REST API (`/api/works`) + serves the built frontend
- **Packaging:** Multi-stage Dockerfile (Node builds Angular → Maven builds the jar → slim JRE image)
- **CI/CD:** GitHub Actions builds the image and scans it with Trivy (fails on HIGH/CRITICAL)

## Run locally (dev)

Terminal 1 (backend):

```bash
cd app/backend
mvn spring-boot:run
# API at http://localhost:8080/api/works
```

Terminal 2 (frontend):

```bash
cd app/frontend
npm install
npm start
# App at http://localhost:4200 (proxies /api to :8080)
```

## Run with Docker

```bash
docker build -t legal-things app/
docker run -d -p 8080:8080 legal-things
# open http://localhost:8080
```
