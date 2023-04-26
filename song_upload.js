var dbconnect =require('./connectsql.js');

module.exports ={
    song_upload: (req,res)=>{
        var name=req.body.name;
        var songurl=req.body.songurl;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
            if(err) throw err;
            console.log('connected!');

            var sql=`insert into songs (name,songurl) values ("${name}","${songurl}")`;
            con.query(sql,(err,result)=>{
                if(err) throw err;
                var data={
                    id:result.insertId
                }
                res.send(JSON.stringify(data));
            })

        })
    }
}