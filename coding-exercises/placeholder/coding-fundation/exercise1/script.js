//trigger the button
document.getElementById('btn').addEventListener('click',createSquares);

function createSquares(){
  //get the number
  var n = document.getElementById('txt').value;
  document.getElementsByClassName('container')[0].innerHTML='';

  //draw squares
  for (var i = 1; i<=n; i++){
    var rect=document.createElement('div');
    rect.className='rect';
    document.getElementsByClassName('container')[0].appendChild(rect);
  }
}
