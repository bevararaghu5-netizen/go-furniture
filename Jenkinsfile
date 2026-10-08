pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Go Furniture source code...'
                checkout scm
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                echo 'Building Go Furniture backend Docker image...'

                bat 'docker build -t go-furniture-backend:1.0 ./backend'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                echo 'Building Go Furniture frontend Docker image...'

                bat 'docker build -t go-furniture-frontend:1.0 ./frontend'
            }
        }

        stage('Verify Docker Images') {
            steps {
                echo 'Checking Go Furniture Docker images...'

                bat 'docker images go-furniture-backend'
                bat 'docker images go-furniture-frontend'
            }
        }

        stage('Pipeline Success') {
            steps {
                echo 'Backend and frontend Docker images built successfully!'
            }
        }
    }
}