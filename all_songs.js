var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    all_songs:(req,res)=>{
        var user_id = req.query.user_id;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
          // var sqql=`Select p_id,user_id,p_name from playlist p inner join playlist_items pt on p.p_id=pt.p_id inner join favourite f on f.m_id=pt.m_id`;
          var sqql=`Select * from songs`;  
          con.query(sqql,(e,r)=>{
               if(err) throw(err);
                 console.log(r)
                  res.json(r);
                   })
                })

      
                
                
    
}
}