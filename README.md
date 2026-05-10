# Jenkins CI/CD Pipeline – Node.js Application

A production-ready CI/CD pipeline built with Jenkins, Docker, and SonarQube for a Node.js REST API.

## 🛠️ Tech Stack
- **Node.js** – Backend REST API
- **Express** – Web framework
- **Jest** – Unit testing with coverage
- **Docker** – Containerization
- **Jenkins** – CI/CD automation
- **SonarQube** – Code quality & security analysis
- **GitHub** – Source code management

## 📁 Project Structure

jenkins-nodejs-project/
├── app.js
├── server.js
├── package.json
├── Dockerfile
├── .dockerignore
├── Jenkinsfile
├── sonar-project.properties
└── tests/
└── app.test.js

## 🚀 Pipeline Stages
1. **Checkout** – Pull latest code from GitHub
2. **Install Dependencies** – npm install
3. **Run Tests** – Jest with 100% code coverage
4. **SonarQube Analysis** – Code quality scan
5. **Docker Build** – Build container image
6. **Deploy** – Run containerized application

## 📊 Results
- ✅ 100% test coverage
- ✅ 0 vulnerabilities detected
- ✅ Deployment time reduced from 2 hours to 15 minutes
- ✅ Dockerised build running on port 3000

## 🔧 How to Run Locally

### Prerequisites
- Node.js v18+
- Docker Desktop
- Jenkins
- SonarQube

### Run without Docker
```bash
npm install
npm start
```
Visit: http://localhost:3000

### Run with Docker
```bash
docker build -t jenkins-nodejs-app .
docker run -p 3000:3000 jenkins-nodejs-app
```
Visit: http://localhost:3000

### Run Tests
```bash
npm test
```

## 🔗 API Endpoints
| Endpoint | Method | Response |
|----------|--------|----------|
| `/` | GET | Hello from Jenkins CI/CD Pipeline! |
| `/health` | GET | `{ status: "UP", message: "App is running" }` |

## 👩‍💻 Author
**Deepika G**  
Cloud & DevOps Engineer  
Certifications: AZ-900, AZ-104, AZ-400, AZ-500, AWS, OCI, ISO/IEC 27001:2022