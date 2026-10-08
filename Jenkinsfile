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

        stage('Verify Docker Image') {
            steps {
                echo 'Checking backend Docker image...'

                bat 'docker images go-furniture-backend'
            }
        }

        stage('Pipeline Success') {
            steps {
                echo 'Backend Docker image built successfully!'
            }
        }
    }
}