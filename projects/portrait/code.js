const canvas = document.getElementById("portrait");
const ctx = canvas.getContext("2d");
ctx.fillStyle="lightBlue";
ctx.fillRect(0, 0, 800, 800);
ctx.fillStyle="lightBlue";
ctx.beginPath(); // Face
ctx.arc(400, 400, 200, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath(); // Mouth
ctx.arc(405, 405, 125, 0, Math.PI, false);
ctx.stroke();
ctx.beginPath(); // Left eye
ctx.arc(350, 375, 20, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath(); // Right eye
ctx.arc(450, 375, 20, 0, Math.PI * 2, true);
ctx.stroke();
