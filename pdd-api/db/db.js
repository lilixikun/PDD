const mysql = require('mysql');

const connect = mysql.createConnection({
    host: '47.98.161.153', // 数据库的地址
    user: 'root', // 账号
    password: 'Admin@123', // 密码
    database: 'lk_pdd', // 数据库名称
});
connect.connect(err => {
    if (err) {
        console.log(err);
    }
    //创建 首页导航表
    let sqlSrt = "CREATE TABLE IF NOT EXISTS pdd_hot_nav(id INT(11) NOT NULL AUTO_INCREMENT ,icontitle VARCHAR(50) DEFAULT NULL ,iconurl VARCHAR(200) DEFAULT NULL , PRIMARY KEY(id))";
    connect.query(sqlSrt, (err, result) => {
        if (err) {
            console.log(err);
        }
    });

    //创建轮播图
    let sqlCasual = "CREATE TABLE IF NOT EXISTS pdd_hot_casual(id INT(11) NOT NULL AUTO_INCREMENT ,detail VARCHAR(200) DEFAULT NULL ,imgurl VARCHAR(200) DEFAULT NULL , PRIMARY KEY(id))";
    connect.query(sqlCasual, (err, result) => {
        if (err) {
            console.log(err);
        }
    });

});

module.exports = connect;