const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }

   const issue = {
    title: "Wrong Description",
    repositoryNameAssociated: "LaunchX",
    status: "Finished",
    numberOfComments: 135,
    labels: 10,
    author: "Antonio Martin",
    dateCreated: new Date(),
    lastUpdated: new Date(),
    getTitleAndAuthot: function (){
        return `This issue: ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function (){
        return this.status 
    }
}

const pullRequest = {
  title: "Añadiendo página",
  branchName: "Master",
  dateCreated: new Date(),
  status: "Accepted",
  getStatus: function(){
    return this.status
  },
  getTitleAndAuthot: function(){
    return `This pull request: ${this.title} was created by ${this.author}`
  }
}
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   