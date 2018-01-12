/**
 * Created by Administrator on 2018/1/2.
 * Greet.js
 */

var config = require("./config.json");

module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};

// import config from './config.json';
// export default {
//     methods: {
//         greet: function () {
//
//             let greet = document.createElement('div');
//             greet.textContent = config.greetText;
//             return greet;
//
//         }
//     }
// }
