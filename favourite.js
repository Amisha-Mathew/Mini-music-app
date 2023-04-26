var dbconnect =require('./connectsql.js');

module.exports={
    favourite:(req,res)=>{
         var user_id=req.query.user_id;
        
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        
       var sql=`Select f.m_id,s.m_name,s.m_url,s.artist from favourite f inner join songs s on f.user_id=${user_id} and s.m_id=f.m_id `;
       con.query(sql,(error,result)=>{
           if(error) throw error;
           res.status(200).json(result);

       })
     })
    }
}
