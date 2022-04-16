// require('dotenv').config();
// const cors = require('cors')
// const express = require('express');
// const app = express();
// const { port, MONGO_URI } = process.env;
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors()); 
// const APP = './app/routes'
// // const nodes = ['admin','basic','board','game','todo','user']
// const nodes = ['basic','board','user']
// for(const leaf of nodes){
//   require(`${APP}/${leaf}.route`)({url:`/api/${leaf}`,app})
// }
// require(`${APP}/user.route`)({url:`/api/user`,app})
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 
// }
// const db = require('./app/models/index')
// db.mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log(' ### 몽고DB 연결 성공 ### ')
//   })
//   .catch(err => { console.log(' 몽고DB와 연결 실패', err)
//         process.exit();
// });
// app.listen(port, () => {
//   console.log('***************** ***************** *****************')
//   console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
//   console.log('***************** ***************** *****************')
// })
// app.get('/', (req, res) => {
//   res.json({"현재 시간 : ":new Date().toLocaleString()})
// })
// app.get('/api/now', cors(corsOptions),(req, res) => {
//   res.json({"now":new Date().toLocaleString()})
// })


require('dotenv').config();
const cors = require('cors')
const express = require('express');
const { PORT, MONGO_URI } = process.env;
// 1. app을 전달
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 

//추가
const APP = './app/routes'
// loop를 돌면서 찾음
const nodes = ['basic']
for(const leaf of nodes){
  // import되고 router폴더가 접미사로 들어가서 찾게 되어있음
  // 2. app의 자식을 만듦 > 메모리 절약위해
  // request가 전달
  require(`${APP}/${leaf}.route`)({url:`/api/${leaf}`, app}) // 즉시 실행(url을 체크)
  // basic.route.js를 바라보게됨
}
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
app.listen(PORT, () => {
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
})

// 시간 찍어서 살아잇는지 확인
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
// 로컬에서 넘어오는걸 승인을 한다 
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})
