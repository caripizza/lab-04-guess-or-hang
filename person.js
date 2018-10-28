/* exported drawBody */

// body without posts/platform = 6 parts (6 chances)

// based on Drawing shapes with canvas https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
var canvas = document.getElementById('canvas');

function drawBody() {
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
  
        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = '2';

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

        ctx.fill(circle);
    }
}