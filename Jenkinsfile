pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Go Furniture source code...'
                checkout scm
            }
        }

        stage('Test Kubernetes Access') {
            steps {
                echo 'Testing Kubernetes access from Jenkins...'

                bat 'kubectl config current-context'
                bat 'kubectl get nodes'
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

        stage('Login to Docker Hub') {
            steps {
                echo 'Logging in to Docker Hub...'

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    bat 'docker login -u "%DOCKER_USERNAME%" -p "%DOCKER_PASSWORD%"'
                }
            }
        }

        stage('Tag Docker Images') {
            steps {
                echo 'Tagging images for Docker Hub...'

                bat 'docker tag go-furniture-backend:1.0 raghu434/go-furniture-backend:1.0'
                bat 'docker tag go-furniture-frontend:1.0 raghu434/go-furniture-frontend:1.0'
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                echo 'Pushing Go Furniture images to Docker Hub...'

                bat 'docker push raghu434/go-furniture-backend:1.0'
                bat 'docker push raghu434/go-furniture-frontend:1.0'
            }
        }

        stage('Pipeline Success') {
            steps {
                echo 'Go Furniture images pushed successfully to Docker Hub!'
            }
        }
    }
}
```
