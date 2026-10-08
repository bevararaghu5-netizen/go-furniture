pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Go Furniture source code...'
                checkout scm
            }
        }

        stage('Verify Project') {
            steps {
                echo 'Verifying Go Furniture project structure...'

                bat 'dir'
                bat 'dir frontend'
                bat 'dir backend'
                bat 'dir database'
                bat 'dir nginx'
            }
        }

        stage('Backend Dependencies') {
            steps {
                echo 'Installing backend dependencies...'

                bat '''
                    cd backend
                    npm install
                '''
            }
        }

        stage('Pipeline Success') {
            steps {
                echo 'Go Furniture CI pipeline completed successfully!'
            }
        }
    }
}