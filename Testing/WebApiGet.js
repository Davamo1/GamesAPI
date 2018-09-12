function WebApiGet (){
    this.games = {}
    this.webapiclient= new ClientWebApi(false);

    this.getGamesJQuery = function (){
        let result = this.webapiclient.fireGet()
        //var myWebApiClient = new webApiClient(false)
        result.then(
            (data)=>{
                this.games = data
                console.log(data)
            },
            (err) =>{
                console.error(err)
            }
        )
    } 

    this.printGames = function(){
        console.log(this.games)
        

        for (var i = 0; i< this.games.length; i++){
            var game = new Game (this.games[i].ID, this.games[i].Player1, this.games[i].Player2, this.games[i].Game_Name, this.games[i].Who_Whon)
            $('#results').append(game.myToString())
            $('#results').append("<br>")
        }
    }
}