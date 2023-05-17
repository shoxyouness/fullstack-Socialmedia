import mysql from "mysql"


const  db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"shoxyouness123", 
    database:"socialmediaapp"
    
});
export default db; 
