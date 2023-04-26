var dateTime = require('node-datetime');
var dbconnect=require('./connectsql.js');


module.exports={

    voting:(req,res)=>{
       var u_id=req.body.uid;
       var m_id=req.body.mid;
   
       var dt = dateTime.create();
       var formatted = dt.format('Y-m-d H:M:S');
        

       var con=dbconnect.dbconnect();
       con.connect((err)=>{
            if(err) throw err;
              console.log('Connected');
            var sql=`delete * from voting`;
            con.query(sql,(error,result)=>{
                if(error) throw error;
                if(result.length==0){
                   var sql1=`insert into voting(u_id,m_id,date) values("${u_id}","${m_id}","${formatted}")`;
                   con.query(sql1,(er,ans)=>{
                       if(er) throw er;
                       res.json(ans);

                   })

                }
                else
                   res.json(2);
            })
                        
       })

    }
}