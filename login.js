var validator = require("email-validator");
var dbconnect = require('./connectsql.js');

module.exports =  {
    login : (req,res) => {
    var email = req.query.email;
    var password = req.query.password;

    if(!validator.validate(email)){
        console.log('not valid email');
        res.send(JSON.stringify(0) )
    }else {
        var con = dbconnect.dbconnect();
        con.connect((err)=> {
            if (err) throw err;
            console.log("connected")
            var sql = `select * from users where email = "${email}" AND password = "${password}"`;
            con.query(sql , (err,result) => {
                if (err) throw err;
                console.log(result);
                if(result.length == 0){
                    res.status(200).json({
                        msg: "Not a valid email and password",
                        data: {
                            user_id: -1
                        }
                    })

                }else {
                    
                    var data = {
                        name: result[0].name,
                        email: result[0].email,
                        phone: result[0].phone,
                        user_id:result[0].user_id,

                        
                    }
                    var sql1=`Select p_id from playlist where user_id=${data.user_id}`;
                    con.query(sql1,(e,r)=>{
                        if(e) throw e;
                        if(r.length==0){
                            var sql2=`insert into playlist (p_id,user_id) values(${data.user_id},${data.user_id}) `
                            con.query(sql2,(er,re)=>{
                                if(er)throw er;
                                //res.json(re);
                            })
                        } 
                    })
                    return res.status(200).json({
                        message: "login successful",
                        data
                      });
                }
               
            })
        })
    }
    }
}
