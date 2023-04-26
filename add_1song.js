var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    one_song: (req,res)=>{
        var m_name=req.body.m_name;
        var m_url=req.body.m_url;
        var artist=req.body.artist;
        var adder_id=req.body.adder_id;
        console.log(adder_id)
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        var sql = `select * from songs where m_name = "${m_name}"`;
        con.query(sql, (err, result)=> {
          if (err) throw err;  
          if(result.length == 0){
            var insert = `insert into songs (m_name,m_url,artist,adder_id) values ("${m_name}","${m_url}","${artist}",${adder_id})`;
             console.log(insert)         
            con.query(insert,(e,r)=>{
                if(e) throw e;
    
                else{ 
               return res.status(200).json(r);
                }
            })
          }
          else{
              res.send(JSON.stringify(2));
          }
     
    })
    })
}
}
