var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    count_songs_added:(req,res)=>{
        var adder_id = req.query.adder_id;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
          var sqql=`Select name,count(*) as count from users, songs where adder_id=${adder_id} and user_id=adder_id group by adder_id`;  
          con.query(sqql,(e,r)=>{
               if(err) throw(err);
                 console.log(r)
                  res.json(r);
                   })
                })

      
                
                
    
}
}