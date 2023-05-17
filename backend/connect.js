import mysql from "mysql"


const  db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123", 
    database:"socialmediaapp"
    
});
export default db; 
