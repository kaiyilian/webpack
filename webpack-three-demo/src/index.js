/**
 * Created by Administrator on 2018/1/8.
 */


import _ from "lodash"
import printMe from './print.js';
// import {cube} from "./main"

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
    console.log("this is production！");
}
else {
    console.log("this is dev！");
}

function component() {
    let element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack', "啊ttttt"], ' ');
    element.classList.add("hello");

    let br = document.createElement("br");
    element.appendChild(br);

    let btn = document.createElement("button");
    btn.innerHTML = "click me";
    btn.onclick = printMe;
    element.appendChild(btn);


    // let element = document.createElement("pre");
    // element.innerHTML = [
    //     "hello webpack!",
    //     "5 cubed is equal to " + cube(2)
    // ];


    return element;
}

document.body.appendChild(component());


// if (module.hot) {
//     debugger
//     module.hot.accept('./print.js', function () {
//         debugger
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }