// HTMLから canvas要素を取得する
const canvas = document.getElementById('canvas');

// canvasのサイズをウィンドウ一杯に広げる
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas要素を2D(2次元)で扱う環境を取得する
const ctx = canvas.getContext('2d');

let positionX = 0;
let positionY = 0;
let radius = 25;

// 円を描く関数
function drawCircle() {
    // Math.random() は 0~1 の間の数値になる。 例: Math.random() = 0.545615443
    // Math.random() * 10 で 0 ~ 10 の間の数値になる。 例： Math.random() * 10 = 5.45615443
    // Math.floor(数値) で小数点以下を四捨五入する 例： Math.floor(5.45615443) = 5
    // ランダムな数値を取得して、それをキャンバスの範囲内の座標に変換している。
    positionX = Math.floor(Math.random() * canvas.width);
    positionY = Math.floor(Math.random() * canvas.height);
    // 10〜20の間の整数を取得している。
    radius = Math.floor(Math.random() * 10) + 20;

    // 描き始めの関数
    ctx.beginPath();

    // 円を描く
    ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, true);

    // RGBの色要素をランダムで決定
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // 塗りつぶし色の設定
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

    // 円を塗りつぶす
    ctx.fill();
}

function anim() {
    // 5％の白で全体を塗りつぶす。徐々に黒くしていく。
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 円を描く。
    drawCircle();
}

// 最初に背景を黒色に変える
ctx.fillStyle = "rgba(0, 0, 0, 1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

setInterval(anim, 20);