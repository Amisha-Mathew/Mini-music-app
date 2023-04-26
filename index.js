var login = require('./login.js');
var signup= require ('./signup.js');
var server = require('./server/server.js')
var song_upload=require('./song_upload.js');
var song_upload=require('./song_upload.js');
var one_song=require('./add_1song.js')
var all_songs = require('./all_songs.js');
var favourite=require('./favourite.js');
var makefav=require('./makefav.js');
var add_playlist=require('./add_playlist.js');
var playlist_items=require('./playlist_items.js');
var trending_music =require('./trending_music.js');
var search=require('./search.js');
var delfav=require('./delfav.js');
var delplaylist=require('./delplaylist.js');
const getsong = require('./get_song');
const updateSong = require('./update_song')
const count_songs_added=require('./count_songs_added.js');
const discussion = require('./discussion.js')
//const search_by_user=require('./search_by_user.js');


//ALTER TABLE `playlist_items` ADD CONSTRAINT `fk_playlist_id` FOREIGN KEY (`p_id`) REFERENCES `playlist`(`p_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
var app = server.app();
console.log("index started")
app.post('/signup', (req,res)=> {
      signup.signup(req,res);
});

app.get('/login', (req,res)=>{
    login.login(req,res);
});

app.post('/song_upload',(req,res)=>{
    song_upload.song_upload(req,res);
});

// app.get('/songs_select',(req,res)=>{
//     song_upload.song_upload(req,res);
// });

app.post('/add_1song',(req,res)=>{
    one_song.one_song(req,res);
});

app.get('/all_songs', (req,res)=> {
    all_songs.all_songs(req,res);
});
app.get('/search', (req,res)=> {
    search.search(req,res);
});
// app.get('/search_by_user', (req,res)=> {
//     search_by_user.search_by_user(req,res);
// });
app.get('/favourite',(req,res)=>{
    favourite.favourite(req,res);
});

app.post('/makefav',(req,res)=>{
    makefav.makefav(req,res);
})

app.post('/add_playlist',(req,res)=>{
    add_playlist.add_playlist(req,res);
})

app.post('/update_song',(req,res)=>{
    updateSong.updateSong(req,res);
})

app.post('/add_message', (req,res) => {
    discussion.addMesage(req,res);
})




app.get('/playlist_items',(req,res)=>{
    playlist_items.playlist_items(req,res);
});

app.get('/trending_music',(req,res)=>{
    trending_music.trending_music(req,res);
});

app.get('/delfav',(req,res)=>{
    delfav.delfav(req,res);
})

app.get('/delplaylist',(req,res)=>{
    delplaylist.delplaylist(req,res);
})

app.get('/get_song',(req,res)=>{
    getsong.getsong(req,res);
})

app.get('/count_songs_added', (req,res)=> {
    count_songs_added.count_songs_added(req,res);
});

app.get('/discussion', (req,res)=> {
    discussion.discussion(req,res);
});

