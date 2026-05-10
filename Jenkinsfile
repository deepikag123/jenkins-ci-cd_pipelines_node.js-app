pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Code checked out successfully'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t jenkins-nodejs-app .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker stop jenkins-nodejs-app || exit 0'
                bat 'docker rm jenkins-nodejs-app || exit 0'
                bat 'docker run -d --name jenkins-nodejs-app -p 3000:3000 jenkins-nodejs-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed! App is live at port 3000'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}