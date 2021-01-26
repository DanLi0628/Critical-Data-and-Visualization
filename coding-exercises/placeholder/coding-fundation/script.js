//trigger the button
document.getElementById('btn').addEventListener('click',createSquares);

function createSquares(){
  //get the number
  var n = document.getElementById('number').value;
  console.log(n);
  document.getElementsByClassName('container')[0].innerHTML='';
  var txt = document.getElementById('number').value;

  //draw squares
  for (i = 1; i<=n; i++){
    console.log(2);
    let div=document.createElement('div');
    div.className='rect';
    document.getElementsByClassName('container')[0].appendChild(div);
  }
}
