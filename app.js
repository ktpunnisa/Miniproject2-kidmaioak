const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 4000

const con = mysql.createConnection({
	host: "localhost",
	user: "username",
	password: "password"
})

con.connect(function(err){
	if(err) throw err
	console.log("connect to mysql!")
})

app.get('/allrooms', async (req,res)=>{
	try{
		const result = await con.query('something')
	}catch(err){
		throw "can not get all rooms."
	}
	res.send(result)
})

app.post('/allrooms', async (req,res)=>{
	try{
		const result = await con.query('something')
		res.status(201)
	}catch(err){
		throw "can not create new room!"
	}	
	res.send(result)
})



app.listen(port,()=>{
	console.log("server is running at",port)
})