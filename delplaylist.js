var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    delplaylist:(req,res)=>{
        var user_id = req.query.user_id;
        var m_id=req.query.m_id;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        var sqll=`Select p_id from playlist where user_id=${user_id}`
            con.query(sqll,(errr,result)=>{
                if(errr) throw errr;
                else{
                    console.log(result[0].p_id);
                    var sqql=`DELETE from playlist_items where m_id=${m_id} and p_id=${result[0].p_id}`;  
                    console.log(sqql);
                     con.query(sqql,(e,r)=>{
                    if(e) throw(e);
                      console.log(r)
                       res.json(r);
                        })
                }
            
            })
         
                })
            }
        }