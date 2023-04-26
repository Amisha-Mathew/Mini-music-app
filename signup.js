var dbconnect =require('./connectsql.js');
var validator = require("email-validator");



module.exports ={
    signup:(req,res)=>{
        var email = req.body.email;
        var password = req.body.password;
        var phone = req.body.phone;
        var name = req.body.name;
        var valid = 1;
    
        if(isNaN(phone)){
            console.log('not valid phno');
            valid = 0 ;
        }
        if(password.length < 4){
            console.log('password is not valid');
            valid = 0 ;
        }
        if(name.length < 3){
            console.log('name is not valid');
            valid = 0 ;
        }     
       if(!validator.validate(email)){
           console.log('not valid email');
           valid = 0;
          }
        
        if(valid == 0){
            res.send(JSON.stringify(false))
        }else {
            
            var con = dbconnect.dbconnect();
            con.connect((err) =>{
                if (err){
                    con.end();
                    console.log(err);
                    return res.status(500).json({
                        message:"Server error"
                    });
                }
                                console.log("Connected!");
                var sql = `select * from users where email = "${email}"`;
                con.query(sql, (err, result)=> {
                  if (err) throw err;  
                  if(result.length == 0){
                      var insert = `insert into users (email,password,phone,name) values ("${email}","${password}","${phone}","${name}")`;
                      con.query(insert, (err,ans) => {
                          if(err) throw err;
                          var data = {
                              id: ans.insertId,
                              email,
                              password
                          }
                          return res.status(200).json(
                        
                            data
                          );
                      })
                  }else {   
                    res.send(JSON.stringify(2))
                  }
                });
            });   
        }
    }
}