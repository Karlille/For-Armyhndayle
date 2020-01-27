

function gameEngine(){
  let sel = document.getElementById('attacks');
  let val = sel[sel.selectedIndex].value;
  let userIn = 10;
  let p1hp = document.getElementById('health').innerHTML = userIn;
while(p1hp > 1) {
 p1hp = userIn -1;
console.log(p1hp);
}
  }
