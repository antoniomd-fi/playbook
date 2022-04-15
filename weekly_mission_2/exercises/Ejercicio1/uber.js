const profile = {
    user: "",
    stars: 4.88,
    phone: "",
    email: "",
    uberOne: false,
    getGeneralInfo: function(){
        return `Name: ${this.user}\nPhone: ${this.phone}`
    }
}

const travel = {
    totalTravels: 150,
    lastTravel: new Date(),
    canceledTravels: 3
}