/*
    页面控制器拖动脚本
 */

const controlDashBoard = document.querySelector('.ui-control');
const controlTitle = document.querySelector('.ui-control-title');

let isDragging = false;

let viewW = document.documentElement.clientWidth; // 视口宽度
let viewH = document.documentElement.clientHeight; // 视口高度

let mouseOffsetX = 0; // 鼠标点击时相对触发元素的 X 坐标
let mouseOffsetY = 0; // 鼠标点击时相对触发元素的 Y 坐标

controlTitle.addEventListener('mousedown', function () {
    isDragging = true;
});

document.addEventListener('mouseup', function () {
    isDragging = false;
});

document.addEventListener('mousemove', function () {

});


// 让控制元素自动居中
function autoCenter(controlDashBoard) {
    controlDashBoard.top = viewW - controlDashBoard.offsetWidth
}