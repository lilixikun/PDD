var redis = require("redis");
var redisClient = redis.createClient('6379', '47.98.161.153', {
    detect_buffers: true
});
let redisConfig = {};

redisClient.auth('admincrz', function (err, result) {
    console.log(err, result);
})

redisClient.on("error", function (err) {
    console.log(err);
});

redisClient.on("connect", function () {
    console.log("链接成功!");
})

/**
 * expire(过期时间,单位秒,为空表示不过期)
 */
redisConfig.set = function (key, value, expire, callback) {
    redisClient.set(String(key), String(value), function (err, result) {
        if (err) {
            callback(err, null);
            return;
        }

        if (expire && expire > 0) {
            redisClient.expire(key, parseInt(expire));
        }

        callback(null, result)
    })
}

redisConfig.get = function (key, callback) {
    console.log(key);
    redisClient.get(key, function (err, result) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    })
}

redisConfig.del = function (key, callback) {
    redisClient.del(key, function (err, result) {
        if (err) {
            callback(err);
            return;
        }
        callback(null,result);
    })
}
module.exports = redisConfig;