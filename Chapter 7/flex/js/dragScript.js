/*
    页面控制器拖动脚本
 */
(function () {
    const controlDashBoard = document.querySelector('.ui-control');
    const controlTitle = document.querySelector('.ui-control-title');

    let isDragging = false;
    let isClick = true;

    let viewW = document.documentElement.clientWidth; // 视口宽度
    let viewH = document.documentElement.clientHeight; // 视口高度

    let mouseOffsetX = 0; // 鼠标点击时相对触发元素的 X 坐标
    let mouseOffsetY = 0; // 鼠标点击时相对触发元素的 Y 坐标

    controlTitle.addEventListener('mousedown', function (e) {
        isDragging = true;
        mouseOffsetX = e.offsetX;
        mouseOffsetY = e.offsetY;
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });

    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return false;
        let moveX = e.clientX - mouseOffsetX;
        let moveY = e.clientY - mouseOffsetY;

        // 范围检测
        moveX = Math.min(Math.max(0, moveX), window.innerWidth - controlDashBoard.clientWidth);
        moveY = Math.min(Math.max(0, moveY), window.innerHeight - controlDashBoard.clientHeight);

        controlDashBoard.style.left = moveX + 'px';
        controlDashBoard.style.top = moveY + 'px';

        // 如果移动鼠标，那就不触发 click 事件
        isClick = false;
    });

    controlTitle.addEventListener('click', function () {
        if (!isClick) {
            isClick = true;
            return false;
        }

        let fieldsets = controlDashBoard.querySelectorAll('fieldset');

        for (let key in fieldsets) {
            fieldsets[key].classList.toggle('hidden');
        }
    });

    // 让控制元素自动居中
    function autoCenter(controlDashBoard) {
        controlDashBoard.style.left = (viewW - controlDashBoard.clientWidth) / 2 + 'px';
        controlDashBoard.style.top = (viewH - controlDashBoard.clientHeight) / 2 + 'px';

        return true;
    }

    autoCenter(controlDashBoard);
    window.addEventListener('resize', function () {
        viewW = document.documentElement.clientWidth; // 视口宽度
        viewH = document.documentElement.clientHeight; // 视口高度

        autoCenter(controlDashBoard);
    });

    controlDashBoard.onselectstart = function () {
        return false;
    }; // 元素拖地时不会选中文本
}())