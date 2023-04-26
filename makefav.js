var dbconnect =require('./connectsql.js');

module.exports ={
    makefav: (req,res)=>{
        var m_id=req.body.m_id;
        var user_id=req.body.user_id;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
            if(err) throw err;
            console.log('connected!');
        var sql1 =`Select user_id,m_id from favourite where m_id=${m_id} and user_id=${user_id}`;
            con.query(sql1,(err,r)=>{
                if(err) throw err;
                if(r.length==0){
                    var sql=`CALL makefav(${m_id},${user_id})`;
                    con.query(sql,(err,result)=>{
                        if(err) throw err;
                       
                        res.status(200).json(result);
                    })
                }
                else{
                   res.send(JSON.stringify(2))
            }
            })
      

        })
    }
}