var cv = document.getElementById('canvas');
var ctx = cv.getContext('2d');
ctx.width = 800;
ctx.height = 600;

var snakeSize = 20;
var gridX = ctx.width / snakeSize;
var gridY = ctx.height / snakeSize;
var startX = parseInt(gridX / 2);
var startY = parseInt(gridY / 2);
var dir = 'left';
var snakeBody = [
    { x: startX, y: startY, color: 'red' },
    { x: startX + 1, y: startY, color: 'black' },
    { x: startX + 2, y: startY, color: 'black' }
];
// 判断是否吃到自己的变量
var newSnakeNode = { x: 0, y: 0 };
var eatCount = 0;
// 绘画
function drawSnake() {
    for (var i = 0; i < snakeBody.length; i++) {
        ctx.fillStyle = snakeBody[i].color;
        ctx.fillRect(snakeBody[i].x * snakeSize, snakeBody[i].y * snakeSize, snakeSize, snakeSize);
    }
}
// 移动
function move(dir) {
    switch (dir) {
        case 'left':
            for (var i = snakeBody.length - 1; i > 0; i--) {
                snakeBody[i].x = snakeBody[i - 1].x;
                snakeBody[i].y = snakeBody[i - 1].y;
            }
            snakeBody[0].x -= 1;
            newSnakeNode.x = snakeBody[0].x - 1;
            break;
        case 'right':
            for (var i = snakeBody.length - 1; i > 0; i--) {
                snakeBody[i].x = snakeBody[i - 1].x;
                snakeBody[i].y = snakeBody[i - 1].y;
            }
            snakeBody[0].x += 1;
            newSnakeNode.x = snakeBody[0].x + 1;
            break;
        case 'up':
            for (var i = snakeBody.length - 1; i > 0; i--) {
                snakeBody[i].x = snakeBody[i - 1].x;
                snakeBody[i].y = snakeBody[i - 1].y;
            }
            snakeBody[0].y -= 1;
            newSnakeNode.y = snakeBody[0].y - 1;
            break;
        case 'down':
            for (var i = snakeBody.length - 1; i > 0; i--) {
                snakeBody[i].x = snakeBody[i - 1].x;
                snakeBody[i].y = snakeBody[i - 1].y;
            }
            snakeBody[0].y += 1;
            newSnakeNode.y = snakeBody[0].y + 1;
            break;
    }
}
// 键盘事件
document.onkeydown = function (e) {
    e = e || event;
    e.preventDefault();
    switch (e.keyCode) {
        case 38:
            // 判断当前方向，不能取反
            dir = dir == 'down' ? 'down' : 'up';
            break;
        case 40:
            dir = dir == 'up' ? 'up' : 'down';
            break;
        case 37:
            dir = dir == 'right' ? 'right' : 'left';
            break;
        case 39:
            dir = dir == 'left' ? 'left' : 'right';
            break;
    }
}

// 获取随机坐标
function getFoodXY() {
    var x = Math.floor(Math.random() * gridX);
    var y = Math.floor(Math.random() * gridY);
    for (var i = 0; i < snakeBody.length; i++) {
        if (x == snakeBody[i].x && y == snakeBody[i].y) {
            break;
        } else {
            var objX = x, objY = y;
            return { x: objX, y: objY };
        }
    }
    getFoodXY();
}
// alert(JSON.stringify(getFoodXY()));
// 画食物
function drawFood(x, y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
}

// 游戏中
function playing() {
    var foodX = getFoodXY().x, foodY = getFoodXY().y;
    timer = setInterval(function () {
        move(dir);
        // 清空画布
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        drawSnake();
        // 绘画食物
        drawFood(foodX, foodY);
        // 吃到食物
        if (snakeBody[0].x == foodX && snakeBody[0].y == foodY) {
            // alert('i get it');
            eatCount++;
            snakeBody.push({ x: snakeBody[snakeBody.length - 1].x, y: snakeBody[snakeBody.length - 1].y, color: 'black' })
            foodX = getFoodXY().x, foodY = getFoodXY().y;

        }
        // 碰壁game over
        if (snakeBody[0].x < 0 || snakeBody[0].x > gridX || snakeBody[0].y < 0 || snakeBody[0].y > gridY) {
            clearInterval(timer);
            layerDialog(eatCount);
            return;
        }
        // 碰到自己game over
        for (var i = 2; i < snakeBody.length; i++) {
            if (newSnakeNode.x == snakeBody[i].x && newSnakeNode.y == snakeBody[i].y) {
                clearInterval(timer);
                layerDialog(eatCount);
                return;
            }
        }
    }, 150)
}

playing();
// game over时弹出对话框
function layerDialog(num){
    document.getElementById('layer').style.display = 'block';
    var close = document.querySelector('.dialog-close');
    var again = document.querySelector('.again');
    var score = document.querySelector('.score');
    score.innerHTML = num;
    close.onclick = function(){
        document.getElementById('layer').style.display = 'none';
    }
    again.onclick = function(){
        location.reload();
    }
}