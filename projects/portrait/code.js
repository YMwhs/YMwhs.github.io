const canvas = document.getElementById("portrait");
const ctx = canvas.getContext("2d");
ctx.fillStyle="lightBlue";
ctx.fillRect(0, 0, 800, 800);
ctx.fillStyle="lightBlue";
ctx.beginPath(); // Face
ctx.arc(400, 400, 200, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath(); // Mouth
ctx.arc(405, 420, 100, 0, Math.PI, false);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(305, 420);
ctx.lineTo(505, 420);
ctx.stroke();
ctx.beginPath(); // Teeth
ctx.strokeRect(385, 420, 25, 30);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(415, 420, 25, 30);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(355, 420, 25, 30);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(325, 420, 25, 30);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(445, 420, 25, 30);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(475, 420, 25, 30);
ctx.stroke();
ctx.beginPath(); // Braces
ctx.strokeRect(390, 430, 15, 10);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(420, 430, 15, 10);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(360, 430, 15, 10);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(330, 430, 15, 10);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(450, 430, 15, 10);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(480, 430, 15, 10);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(305, 435);
ctx.lineTo(500, 435);
ctx.stroke();
ctx.beginPath(); // Left eye
ctx.arc(350, 375, 20, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(350, 375, 10, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(350, 375, 5, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath(); // Right eye
ctx.arc(450, 375, 20, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(450, 375, 10, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(450, 375, 5, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath(); // Glasses
ctx.strokeRect(310, 350, 75, 50);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(410, 350, 75, 50);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(385, 375);
ctx.lineTo(410, 375);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(310, 375);
ctx.lineTo(200, 360);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(485, 375);
ctx.lineTo(600, 360);
ctx.stroke();
ctx.beginPath(); // Hair
ctx.moveTo(240, 280);
ctx.lineTo(240, 180);
ctx.lineTo(540, 180);
ctx.lineTo(540, 260);
ctx.stroke();
ctx.beginPath(); // Nose
ctx.moveTo(400, 390);
ctx.lineTo(395, 410);
ctx.lineTo(405, 410);
ctx.lineTo(400, 390);
ctx.stroke();
ctx.beginPath(); // Neck
ctx.moveTo(325, 585);
ctx.lineTo(325, 675);
ctx.moveTo(475, 585);
ctx.lineTo(475, 675);
ctx.stroke();
ctx.beginPath(); // Body
ctx.arc(400, 860, 200, 0,  Math.PI, true);
ctx.stroke();
ctx.beginPath(); // Phone
ctx.strokeRect(650, 300, 100, 200);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(650, 480, 100, 20);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(650, 300, 100, 20);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(685, 310);
ctx.lineTo(715, 310);
ctx.stroke();
ctx.beginPath();
ctx.arc(700, 490, 7, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath(); // Cross
ctx.strokeRect(100, 300, 30, 200);
ctx.stroke();
ctx.beginPath();
ctx.strokeRect(75, 320, 80, 30);
ctx.stroke();
