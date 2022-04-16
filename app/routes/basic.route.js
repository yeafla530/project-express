const { getBmi } = require('../controllers/basic.controller'); //controller
// x는 app.js의 ({url:`/api/${leaf}`,app})를 받음 
// module은 basic이라고 생각하고
module.exports = x => x.app.post(`${x.url}/bmi`, getBmi) ;