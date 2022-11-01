pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        bat 'npx cypress run --record --key ca73ccb1-b9fa-4f7f-aae9-114b056d3bfe --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key ca73ccb1-b9fa-4f7f-aae9-114b056d3bfe --parallel'
                    }
                }
            }
        }
    }
}