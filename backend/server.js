const express = require('express');
const app = express();

const server =  app.listen(3007, () => {
    console.log('Server is running on port 3007');
});

// 다음의 3줄은 ejs를 사용하기 위한 코드이다.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Client가 get 요청을 보내면,(app에 get요청이 오면) 서버는 Hello World를 보내준다.
// 보내준다.(response를 send한다.) = res.send
app.get('/', function(req, res){
    res.render('index.html')
});
app.get('/about', function(req, res){ 
    res.render('about.html');
    // res.send('about.html')
});

// Mariadb connection 
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});

app.get('db', function (req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
            // Use the connection
            connection.query('SELECT * from Test', function (error, results, fields) {
                res.send(JSON.stringify(results));
                console.log('results');
            // When done with the connection, release it.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
  });
});
})