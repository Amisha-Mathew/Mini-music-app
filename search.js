var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    search:(req,res)=>{
        var m_name = req.query.m_name;
        console.log(m_name);
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
         var sqql=`Select * from songs where m_name="${m_name}"`;  
          con.query(sqql,(e,r)=>{
               if(err) throw(err);
                 console.log(r)
                //  if(r.length==1){
                //     res.json({
                //         m_name,
                //         m_url:r.body.m_url,
                //         artist:r.body.artist
                //     });
                //  }
                //  else{
                //      res.send(JSON.stringify(2))
                //  }
                 res.json(r);
                   })
                })
            }
        }