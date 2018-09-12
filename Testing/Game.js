function Game(ID, Player1, Player2, Game_Name, Who_Whon ){
    this.ID = ID
    this.Player1 = Player1
    this.Player2 = Player2
    this.Game_Name = Game_Name
    this.Who_Whon = Who_Whon
    this.myToString = function(){
        return "ID: " + this.ID +
                " Player1: " + this.Player1 +
                " Player2: " + this.Player2 +
                " Game_Name: " + this.Game_Name +
                " Who_Whon: " + this.Who_Whon
    }
}

