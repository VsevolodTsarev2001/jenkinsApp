pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                // Клонирование репозитория
                git 'https://github.com/VsevolodTsarev2001/jenkinsApp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Установка зависимостей Node.js
                sh 'npm install'
            }
        }
        stage('Run Application') {
            steps {
                // Запуск приложения
                sh 'npm start &'
            }
        }
    }
}
