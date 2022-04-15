const user = {
    user: "",
    username: "@",
    bio: "",
    joinedDate: "June-2010",
    following: 60,
    followers: 9800,
    verified: true,
    getUser: function(){
        return `User: ${this.user}\nUsername: ${this.username}`
    },
    getGeneralInfo: function(){
        return `Followers: ${this.followers}\nFollowing: ${this.following}`
    }
}

const tweets = {
    totalTweets: 3778,
    picturesAndVideos: 1875
}