var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    updateSong: (req,res)=>{
        var m_name=req.body.m_name;
        var m_url=req.body.m_url;
        var artist=req.body.artist;
        var adder_id=req.body.adder_id;
        console.log(adder_id)
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        var update = `update songs set m_name="${m_name}", m_url="${m_url}", artist="${artist}" where adder_id=${adder_id} and m_id=${req.body.m_id}`;         
        console.log(update)
        con.query(update, (err, result)=> {
          if (err) throw err;  
          res.status(200).json({msg: "done"});
          })
    })
}
}
