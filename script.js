window.onload = function () {
    const canvas = document.getElementById('background');
    canvas.width = window.screen.width;
    canvas.height = window.screen.height;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#fff';
      ctx.fillStyle = '#fff';
      ctx.lineWidth = 10;
      
      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
          if (j*i % 12 == 0) {
            ctx.strokeStyle = '#c8ffa8ca';
            ctx.fillStyle = '#c8ffa8ca';
          }else if(j*i % 12 == 1){
            ctx.strokeStyle = '#fcffa8ca';
            ctx.fillStyle = '#fcffa8ca';
          }else if(j*i % 12 == 2){
            ctx.strokeStyle = '#ffa8a8ca';
            ctx.fillStyle = '#ffa8a8ca';
          }else{
            ctx.strokeStyle = '#ffffffca';
            ctx.fillStyle = '#ffffffca';
          }
          ctx.beginPath();
          ctx.arc(100*j+Math.random()*100, 100*i+Math.random()*100, 0.5+Math.random()*2.5, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill(); 
        }
      }
    }
  }

window.onscroll = function(){
  const scrollY = window.scrollY
  const canvas = document.getElementById('background');
  canvas.style.top = String(scrollY/25-100) + 'px'
}