var dbconnect =require('./connectsql.js');

module.exports={
    playlist_items:(req,res)=>{
        var user_id=req.query.user_id;
        // var p_id=req.query.p_id;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        
       var sql=`Select pt.m_id,s.m_name,s.m_url,s.artist from songs s inner join playlist_items pt on s.m_id=pt.m_id inner join playlist p on p.user_id=${user_id} and p.p_id=pt.p_id `;
   // var sql=`Select s.m_name,s.m_url,s.artist from songs s,playlist_items pt where p_id=${p_id} and s.m_id=pt.m_id`; 
    con.query(sql,(error,result)=>{
           if(error) throw error;
           res.status(200).json(result);

       })
     })         
    }
}
