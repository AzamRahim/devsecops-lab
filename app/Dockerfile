FROM node:22-alpine AS frontend
WORKDIR /frontend
COPY frontend/package.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

FROM maven:3.9-eclipse-temurin-17 AS backend
WORKDIR /backend
COPY backend/pom.xml .
RUN mvn -q dependency:go-offline
COPY backend/src ./src
COPY --from=frontend /frontend/dist/legal-things/browser ./src/main/resources/static
RUN mvn -q package

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=backend /backend/target/legal-things-api-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
