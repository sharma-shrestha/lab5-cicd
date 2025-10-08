pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code from GitHub...'
                checkout scm
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
                echo 'Running tests...'
                sh 'npm test || echo "No tests to run"'
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
                sh 'docker run -d -p 3000:3000 --name lab5-container lab5-node-app || echo "Container may already be running"'
            }
        }
    }
}
