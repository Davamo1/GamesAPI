Create Database GamesDB
Go
Use GamesDB
Go
Create table Games
(
	ID int primary key identity,
	Game_Name nvarchar (50),
	Player1 nvarchar (50),
	Player2 nvarchar (50),
	Who_Whon nvarchar (50),
)
Go

Insert into Games values ('Chess', 'Tim', 'Tom', 'Tim')
Insert into Games values ('Damka', 'Bob', 'Tom', 'Bob')
Insert into Games values ('Chess', 'Tom', 'Dav', 'Tom')
Insert into Games values ('Cards', 'Bil', 'Tim', 'Bil')
Insert into Games values ('Damka', 'Dav', 'Bob', 'Bob')
Insert into Games values ('Cards', 'Bob', 'Bil', 'Tim')
Insert into Games values ('Todelete', 'ToDelete', 'Todelete', 'ToDelete')
