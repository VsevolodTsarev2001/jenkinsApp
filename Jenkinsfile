pipeline {
    agent any
    stages {
        stage('Create Text File') {
            steps {
                // Create a text file with a single line
                sh 'echo "This is a sample text line." > sample.txt'
            }
        }
        stage('Display File Contents') {
            steps {
                // Display the contents of the file
                sh 'cat sample.txt'
            }
        }
        stage('Show Name') {
            steps {
                // Display your name
                sh 'echo "Your Name: Vsevolod Tsarev"'
            }
        }
    }
}
