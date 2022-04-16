// service로 또 연결
const { bmi } = require('../services/basic.service');

// module의 basic을 바라본다고 생각하면 됨
exports.getBmi = (req, res) =>{
    // body의 실제값을 payload이라고함
    // body를 받아줘야한다 => body에는 json값이 들어있다 중요
    const {name, height, weight} = req.body
    // 실제값을 확인
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 : ${name}`)
    console.log(`키 : ${height}`)
    console.log(`몸무게 : ${weight}`)
    // 여기까지만 해도 상관없음 > 공부하기위해 service까지 구현하심
    // 실무에서는 req.body를 바로 프론트로 던져버리는 형식
    const json = bmi({name, height, weight})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.status(200).json(json)
  }

  