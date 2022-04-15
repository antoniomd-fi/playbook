const user = {
    user: "Antonio Martin",
    age: 23,
    birthday: "30-June",
    email: "antonio@example.com",
    lastPostDate: new Date(),
    joinedDate: "jule-2010",
    getUser: function(){
        return this.user
    }
}
const post = {
    date: new Date(),
    size: 200,
    likes: 120,
    loves: 22,
    haha: 1,
    wow: 3,
    angry: 0,
    getDate: function (){
        return this.date
    },
    getGeneralInfo: function(){
        return `likes: ${this.likes}\nloves: ${this.loves}\nhaha: ${this.haha}\n
        wow: ${this,this.wow}\nangry: ${this.angry} `
    }
}