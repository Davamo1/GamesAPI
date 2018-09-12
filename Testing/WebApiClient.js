class ClientWebApi{

    constructor (realServer = true){
        this.realServer = realServer
    }

    fireGet() {
        if (this.realServer){
            let promise =  $.ajax({
  
                url: 'http://localhost:51758/api/game/'
            })
            return promise
        }

        // this code is for the testing, Getting two response of game from code with resolve and error from reject

        //let promise = new Promise((resolve, reject)=> {
            

            //  this code is to get Game not from DB, but from code


            /*
            var _games = [new Game(26, "Fake", "Player", "Fake Game", "NoOne"),
                    new Game(27, "Fake2", "Player2", "Fake Game2", "NoOne2")]
            resolve(_games)
            */  
           
            
            // this one is to get  an error message error

          // reject("My Error")



        //})
        // return promise

        // this code is for getting answer from the NodeJs APi

        let promise = $.ajax({
            url:'http://localhost:3000/api/game/'
        })
        return promise
        
        
    }

}