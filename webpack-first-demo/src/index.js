/**
 * Created by Administrator on 2018/1/5.
 */

import _ from "lodash"
// import "./style.css"
// import icon from "./icon.png"
import {printMe} from './print.js';

function component() {
    let element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack', "ttttt"], ' ');
    element.classList.add("hello");

    let br = document.createElement("br");
    element.appendChild(br);


    // var image = new Image();
    // image.src = icon;
    // element.appendChild(image);


    let btn = document.createElement("button");
    btn.innerHTML = "click me";
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         debugger;
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//
//         document.body.removeChild(element);
//         element = component(); // 重新渲染页面后，component 更新 click 事件处理
//         document.body.appendChild(element)
//
//     })
// }
