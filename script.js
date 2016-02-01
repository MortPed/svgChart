
function animatePie() {
  var pie = document.getElementById("animate")
  var result= Math.floor((Math.random() * 100) + 1);
  var data = result + ' ' + 100 ;
  document.getElementById("output").innerHTML = result + '%';
  pie.style.strokeDasharray = data;
  console.log(pie.style.strokeDasharray);
}
