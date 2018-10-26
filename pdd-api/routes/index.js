var express = require('express');
var router = express.Router();
const connect = require('../db/db.js');

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
module.exports = router;