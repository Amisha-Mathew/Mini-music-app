var dbconnect =require('./connectsql.js');

module.exports={
    discussion:(req,res)=>{
        
        
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        
       var sql=`Select * from discussion join users on discussion.user_id = users.user_id`;
       con.query(sql,(error,result)=>{
           if(error) throw error;
           con.end()
           res.status(200).json(result);

       })
     })
    },
    addMesage:(req,res)=>{
        var con=dbconnect.dbconnect();
        var {user_id, message} = req.body;
        var time = new Date().getTime();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        
       var sql=`Insert into discussion(user_id,message) values("${user_id}","${message}")`;
       con.query(sql,(error,result)=>{
           if(error) throw error;
           res.status(200).json({});

       })
     })
    },
}
