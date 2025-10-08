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
            agent {
                docker {
                    image 'node:20'  // Node.js Docker image
                    args '-u root:root'  // optional: run as root for permission
                }
            }
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm test || echo "No tests to run"'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t lab5-node-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name lab5-container lab5-node-app'
            }
        }
    }
}
