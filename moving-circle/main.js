// HTMLから canvas要素を取得する
const canvas = document.getElementById('canvas');

// canvasのサイズをウィンドウ一杯に広げる
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas要素を2D(2次元)で扱う環境を取得する
const ctx = canvas.getContext('2d');

let positionX = canvas.width / 2;
let positionY = canvas.height / 2;
let radius = 25;
let rgb = "";

resetParameter();

// 玉の位置や、色をランダムで決定する関数
function resetParameter() {
    // positionX = Math.floor(Math.random() * canvas.width);
    // positionY = 0;
    // radius = Math.floor(Math.random() * 10) + 20;

    // RGBの色要素をランダムで決定
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // 塗りつぶし色の設定
    rgb = `rgb(${r}, ${g}, ${b})`;

    // 画面を白で一度クリアする
    ctx.fillStyle = "rgba(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// 円を描く関数
function drawCircle() {
    // 一番下の高さに行くまで縦方向に動かす。
    // if (positionY < canvas.height) {
    //     positionY = positionY + 5;
    // } else {
    //     // 一番下まで行ったらリセット
    //     resetParameter();
    // }

    // 描き始めの関数
    ctx.beginPath();

    // 円を描く
    ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, true);

    // 塗りつぶす色の設定
    ctx.fillStyle = rgb;

    // 円を塗りつぶす
    ctx.fill();
    // 円弧を描く
    ctx.stroke();
}

function anim() {
    // 5％の白で全体を塗りつぶす。徐々に黒くしていく。
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 円を描く。
    drawCircle();
}

// 20msごとに再描画する
setInterval(anim, 20);

document.body.onkeydown = (ev) => {
	if (ev.code == 'KeyW' || ev.code == 'ArrowUp') {
		positionY -= 10;
	} else if (ev.code == 'KeyS' || ev.code == 'ArrowDown') {
		positionY += 10;
	} else if (ev.code == 'KeyA' || ev.code == 'ArrowLeft') {
		positionX -= 10;
	} else if (ev.code == 'KeyD' || ev.code == 'ArrowRight') {
		positionX += 10;
	}
}