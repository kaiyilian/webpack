/**
 * Created by Administrator on 2018/1/2.
 * main.js
 */

// import './main.css';//使用require导入css文件

// require("./main.css")

// const greeter = require('./Greeter.js');
// document.querySelector("#app").appendChild(greeter());


// import Greeter from "./Greeter";
// document.querySelector("#app").appendChild(greeter.greet());

import("./Greeter").then(module => {
    document.querySelector("#app").appendChild(module.greet());
    return module.default;
}).catch(err => {
    console.log("Chunk loading failed");
});


// import React from 'react';
// import {render} from 'react-dom';

// import Greeter from './Greeter';

// render(<Greeter />, document.getElementById('app'));

// const greeter = require('./Greeter.js');
//
//
// export default {
//     render: function () {
//
//         // document.querySelector("#app").appendChild(Greeter.greet());
//         console.log(document.querySelector("#app"));
//         document.querySelector("#app").text(123);
//
//         return "aa"
//     }
// }
