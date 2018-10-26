

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.fillStyle="red";
      ctx.strokeStyle="blue";
      
      var rectangle = new Path2D();
      rectangle.rect(35, 180, 150, 30);
      
      var circle = new Path2D();
      circle.moveTo(125, 35);
      circle.arc(100, 35, 15, 0, 2 * Math.PI);
      
      var rightArm = new Path2D();
      ctx.beginPath();
      ctx.moveTo(120, 65);
      ctx.lineTo(100, 75);
      ctx.stroke();
      
      var leftArm = new Path2D();
      ctx.beginPath();
      ctx.moveTo(80, 65);
      ctx.lineTo(100, 75);
      ctx.stroke();
      
      var leftLeg = new Path2D();
      ctx.beginPath();
      ctx.moveTo(75, 150);
      ctx.lineTo(100, 120);
      ctx.stroke();
      
      var rightLeg = new Path2D();
      ctx.beginPath();
      ctx.moveTo(125, 150);
      ctx.lineTo(100, 120);
      ctx.stroke();
      
      var body = new Path2D();
      ctx.beginPath();
      ctx.moveTo(100, 30);
      ctx.lineTo(100, 120);
      ctx.stroke();
      
      var hangPost3 = new Path2D();
      ctx.beginPath();
      ctx.moveTo(100, 20);
      ctx.lineTo(100, 5);
      ctx.stroke();  
      
      var hangPost2 = new Path2D();
      ctx.beginPath();
      ctx.moveTo(150, 5);
      ctx.lineTo(100, 5);
      ctx.stroke();    
      
      var hangPost = new Path2D();
      ctx.beginPath();
      ctx.moveTo(150, 5);
      ctx.lineTo(150, 180);
      ctx.stroke();
      
      ctx.stroke(rectangle);
      ctx.fill(circle);
      
    }
  }