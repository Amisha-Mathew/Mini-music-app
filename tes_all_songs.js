var validator = require("email-validator");
var dbconnect =require('./connectsql.js');

module.exports ={
    all_songs:(req,res)=>{
        var user_id = req.query.user_id;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');

        var sql='Select * from songs ';
        con.query(sql,(err,result)=>{
            if(err) throw err;
            
            else{
                console.log(result)
                var promise = new Promise((resolve,reject)=> {
                    var sql1=`Select * from playlist where user_id = ${user_id}`;
                    con.query(sql1,(e,r)=>{
                        var playlist_id = r[0].p_id;
                        for(var i=0;i<result.length;i++){
                            var sql2 = `select * from playlist_items where p_id = ${playlist_id} and m_id = ${result[i].m_id}`;
                            con.query(sql2,(e1,r1)=> {
                                if(e1) throw e1
                                if(result[i]){
                                    if(r1.length > 0){
                                        result[i].favourite = true;
                                    }else {
                                        result[i].favourite = false;
                                    }
                                var sql2 = `select * from favourite where user_id = ${user_id} and m_id = ${result[i].m_id}`;
                                con.query(sql2,(e2,r2)=> {
                                    if(e2) throw e2
                                    if(r1.length > 0){
                                        result[i].playlist = true;
                                    }else {
                                        result[i].playlist = false;
                                    }
                                    if(i >= result.length -1 ){
                                        resolve(result)
                                    }
                                })
                            }
                            })
                        }
                       
                        
                    })
                })

                promise.then(
                    (data)=> {
                        res.send((data));
                    }
                )
            }
        })
    });
}
}