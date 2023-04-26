


var dbconnect =require('./connectsql.js');

module.exports ={
    add_playlist: (req,res)=>{
        var user_id=req.body.user_id;
        var m_id=req.body.m_id;
        //var p_id=req.query.p_id;
       
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
            if(err) throw err;
            console.log('connected!');
            var sql1 = `select pt.p_id from playlist_items pt ,playlist p where p.user_id=${user_id} and p.p_id = pt.p_id and m_id=${m_id}`;
            con.query(sql1, (err, r)=> {
              if (err) throw err;  
             
              if(r.length==0){
                  
    var sqll=`Select p_id,user_id from playlist where user_id=${user_id}`
    con.query(sqll,(e,result)=>{
        console.log(result)
        if(e) throw e;
            console.log(result)
        var sql=`CALL add_playlist(${result[0].p_id},${m_id},${result[0].user_id})`;
        con.query(sql,(err,rest)=>{
            if(err) throw err;
           
            res.status(200).json(rest);
        })
    })    
   
            }
              else{
                  res.send(JSON.stringify(2))
              }
           

        })
    })
}
}