         pipeline {
  agent any

  tools {
    nodejs 'NodeJS 18' // Match your configured Jenkins NodeJS version
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://your-repo-url.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }
stage('Run Cypress Tests') {
      steps {
        ansiColor('xterm') {
          sh 'npx cypress run'
        }
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}
