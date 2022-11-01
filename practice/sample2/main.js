const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

console.log("canvas.width", canvas.width);
console.log("canvas.height", canvas.height);
console.log("window width", window.innerWidth);
console.log("window height", window.innerHeight);

// 1. canvasのサイズを画面最大にしてみよう。
// 2. positionXとpositionYにランダムな値を入れる実装をしてみよう。
// 3. canvasの枠を超えないようにするためにはどんな工夫が必要？
const positionX = 10;
const positionY = 10;

ctx.fillStyle = 'red';
ctx.fillRect(positionX, positionY, 100, 100);