const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

console.log("canvas.width", canvas.width);
console.log("canvas.height", canvas.height);
console.log("window width", window.innerWidth);
console.log("window height", window.innerHeight);

// windowの高さ
const windowHeight = window.innerHeight;
// windowの幅
const windowWidth = window.innerWidth;

// canvas
canvas.width = windowWidth;
canvas.height = windowHeight;

const draw = () => {
    // Math.random()は0以上1未満の数字を出してくれる
    const positionX = Math.random() * windowWidth;
    const positionY = Math.random() * windowHeight;


    console.log("positionX", positionX)
    console.log("positionY", positionY)

    ctx.fillStyle = 'red';
    ctx.fillRect(positionX, positionY, 100, 100);
}

window.onclick = draw;

// 1. クリックする前に最初に一つ四角形を前もって描画しておこう。
// 2. 描画するたびに前の四角形が消えるようにしよう。(毎回新しい四角形のみ表示される)
