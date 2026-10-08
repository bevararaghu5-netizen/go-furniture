pipeline {
    agent any

    stages {

        stage('Test Docker') {
            steps {
                echo 'Checking Docker from Jenkins...'
                bat 'docker --version'
                bat 'docker info'
            }
        }
    }
}