var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    delfav:(req,res)=>{
        var user_id = req.query.user_id;
        var m_id=req.query.m_id;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
         var sqql=`DELETE from favourite where user_id=${user_id} and m_id=${m_id}`;  
         
         con.query(sqql,(e,r)=>{
               if(e) throw(e);
                 console.log(r)
                  res.json(r);
                   })
                })
            }
        }