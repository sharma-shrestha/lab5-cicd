pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code from GitHub...'
                git branch: 'main', url: 'https://github.com/sharma-shrestha/lab5-cicd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running automated tests...'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t lab5-node-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                sh 'docker stop lab5-container || true'
                sh 'docker rm lab5-container || true'
                sh 'docker run -d -p 3000:3000 --name lab5-container lab5-node-app'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
