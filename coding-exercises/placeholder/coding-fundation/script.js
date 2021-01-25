document.getElementById('btn').addEventListener('click',draw);

function draw(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
  var n = document.getElementById('number').value;
  for (i = 1; i<=n; i++){

  }
}
