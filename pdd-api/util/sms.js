
function randomCode(length) {
    var chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = "";
    for (let i = 0; i < length; i++) {
        var char = Math.ceil(Math.random() * 9);
        res += chars[char];
    }
    return res;
}

exports.randomCode = randomCode;