var express = require('express');
var router = express.Router();
const sms_util = require("../util/sms");
const redisConfig = require("../util/redis");
const sendSmsClient = require("../util/SMSClient");
var svgCaptcha = require('svg-captcha');
const connect = require('../db/db.js');

let users = {}; //用户信息
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/**
 * 获取首页轮播图
 */
router.get('/api/homecasual', (req, res, next) => {
  let sql = "SELECT *FROM pdd_hot_casual";
  connect.query(sql, (err, result) => {
    if (err) {
      res.json({
        code: 0,
        message: '网络错误'
      })
    } else {
      res.json({
        code: 200,
        message: result
      })
    }
  });
});

/**
 * 获取首页导航
 */
router.get('/api/homenav', (req, res, next) => {
  //导入数据到mysql
  // const data = require('../data/homenav').data;
  // let hot_nav_list = [];
  // for (let i = 0; i < data.length; i++) {
  //   const element = data[i];
  //   let item = [];
  //   item.push(element.icontitle);
  //   item.push(element.iconurl);
  //   hot_nav_list.push(item);
  // }

  // let sqlStr = "INSERT INTO pdd_hot_nav(`icontitle`,`iconurl`) VALUES ?";
  // connect.query(sqlStr, [hot_nav_list], (err, results, fields) => {
  //   if (err) {
  //     console.log(err);
  //     console.log("插入失败!");
  //   }
  // });

  let sqlStr = "SELECT *FROM pdd_hot_nav";
  connect.query(sqlStr, (err, result) => {
    if (err) {
      res.json({
        code: 0,
        message: '网络错误'
      })
    } else {
      res.json({
        code: 200,
        message: result
      })
    }
  });
});

/**
 * 获取首页导航
 */
router.get('/api/homeShopList', (req, res, next) => {
  const data = require('../data/shopList');
  if (!!data) {
    res.json({
      code: 200,
      message: data
    })
  } else {
    res.json({
      code: 0,
      message: '网络错误'
    })
  }
});

/**
 * 一次性图形验证码
 */
router.get('/api/captcha', (req, res) => {
  // 1. 生成随机验证码
  let captcha = svgCaptcha.create({
    color: true,
    noise: 3,
    ignoreChars: '0o1i',
    size: 4
  });
  console.log(captcha.text.toLocaleLowerCase());
  // 2. 保存
  req.session["captcha"] = captcha.text.toLocaleLowerCase();
  // 3. 返回客户端
  res.type('svg');
  res.send(captcha.data);
});

/**
 * 获取手机验证码
 */
router.get('/api/getPhoneCode', (req, res) => {
  const phone = req.query.phone;
  const code = sms_util.randomCode(6);
  console.log(phone, code);

  //真实发送短信环境
  //const result = sendSmsClient.sendSmsClient(code);
  //result[Code] === 'OK'
  redisConfig.set(phone, code, 60, function (err, result) {
    if (result === 'OK') {
      res.json({
        code: 200,
        message: "发送成功!"
      })
    } else {
      res.json({
        code: 0,
        message: "发送失败!"
      })
    }
  })
})

/**
 * 手机验证码登陆
 */
router.post('/api/codeLogin', (req, res) => {
  const phone = req.body.phone;
  const code = req.body.code;
  redisConfig.get(phone, function (err, result) {
    if (result != code) {
      res.json({
        code: 0,
        message: "验证码错误"
      })
    } else {
      //登录成功后判断是原用户还是注册用户
      const sqlStr = `SELECT *FROM pdd_user WHERE phone= ${phone}`;
      connect.query(sqlStr, function (err, results) {
        if (err) {
          console.log(err);
        } else {
          const result = JSON.parse(JSON.stringify(results))[0];
          if (result) {
            console.log(result.id + "我缓存");
            req.session["userId"] = result.id;
            console.log(req.session["userId"]);
          } else {
            const addSql = "INSERT INTO pdd_user(phone,name) VALUES(?, ?)";
            connect.query(addSql, [phone, phone], function (err, result) {
              if (!err) {
                req.session["userId"] = result.id;
              }
            })
          }
        }
      })
      res.json({
        code: 200,
        message: "登录成功!"
      })
    }
  })

  redisConfig.del(phone, function (err, result) {
    if (!err) {
      console.log("删除验证码成功!");
    }
  })
})

//账户密码登陆
router.post('/api/loginPwd', (req, res) => {
  const name = req.body.userName;
  const password = req.body.password;
  const captcha = req.body.captcha;
  let code = "";
  let message = "";
  if (req.session["captcha"] != captcha) {
    code = 0;
    message = "验证码错误!";
  } else {
    code = 0;
    message = "登录成功!";
    req.session["userId"] = result.id;
  }

  res.json({
    code: code,
    message: message
  })
})


router.get('/api/getUserInfo', (req, res) => {
  const userId = req.session["userId"];
  console.log("userId" + userId);
  if (userId) {
    const querSql = `SELECT *FROM pdd_user WHERE id=${userId}`;
    connect.query(querSql, function (err, results) {
      if (!err) {
        const result = results[0];
        res.json({
          code: 200,
          message: result
        })
      } else {
        console.log(err);
      }
    })
  } else {
    res.json({
      code: 200,
      message: "未找到用户信息"
    })
  }
})

module.exports = router;