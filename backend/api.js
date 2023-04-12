const express = require('express');
const app = express();

const server = app.listen(3005, () => {
    console.log('Server is running on port 3005');
});

// 내부 시스템의 사용자가 요청한다. 
// :type 은 어떤 값이든 들어올 수 있다는 걸 의미한다. 
app.get('/api/users/:type', async (req, res) => {
    // res.send('Connected.');
    let { type } = req.params;
    
    // res.send('Connected. ' + type);
    // console.log(type);
    if(type === 'seoul'){
        // 서울사는 유저 정보를 가져온다.
        let data = [
            {name: "홍길동", city: "seoul"},
        ];
        res.send(data);
    } else if(type === 'jeju'){
        let data = [
            {name: "김철수", city: "jeju"},
        ];
        res.send(data);
    } else { 
        res.status(400).send('Type is not correct.');
        }
});