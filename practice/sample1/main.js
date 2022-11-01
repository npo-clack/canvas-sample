const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

console.log("canvas.width", canvas.width);
console.log("canvas.height", canvas.height);
console.log("window width", window.innerWidth);
console.log("window height", window.innerHeight);


ctx.fillStyle = 'green';

// ４つの値をずらしてみよう。四角形の高さと幅を決める引数はどこ？四角形の描画位置を決める引数は？
// canvasの枠150 x 150を超えて描画するとどうなる？マイナスにするとどうなる？

ctx.fillRect(10, 10, 120, 120);