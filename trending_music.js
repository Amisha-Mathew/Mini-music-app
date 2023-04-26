var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    trending_music:(req,res)=>{
       
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
          var sqql=`SELECT s.m_name,s.m_url,s.artist from songs s, trending_music t where s.m_id=t.m_id order by t.count desc`;  
          con.query(sqql,(e,r)=>{
               if(err) throw(err);
                 console.log(r)
                  res.json(r);
                   })
                })

      
                
                
    
}
}