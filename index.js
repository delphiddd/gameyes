context = c.getContext('2d')
const boy = new Image();
boy.src = "https://static.vecteezy.com/system/resources/previews/001/206/116/original/boy-png.png"
boyX = boyDy = score = bestScore = 0;
boySize = 70;
pipeWidth = topPipeBottomY = 50;
interval = 25;
boyY = pipeGap = 200;
canvasSize = pipeX = 500;
c.onclick = () => { boyDY = 8 }
setInterval(() => {
  context.fillStyle = "skyblue";
  context.fillRect(0, 0, canvasSize, canvasSize);
  boyY -= boyDY -= 0.5;
  context.drawImage(boy, boyX, boyY, boySize, boySize);
  context.fillStyle = "brown";
  pipeX -= 10;
  pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()));
  context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY);
  context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize);
  context.fillStyle = "black";
  context.fillText(score++, 10, 15);
  bestScore = bestScore < score ? score : bestScore;
  context.fillText(`Best: ${bestScore}`, 10, 25);
  (((boyY < topPipeBottomY || boyY > topPipeBottomY + pipeGap) && pipeX < boySize) // santa hit pipe
  || boyY > canvasSize) && // santa falls of screen
  ((boyDY = 0), (boyY = 200), (pipeX = canvasSize), (score = 0)); 
}, interval)
