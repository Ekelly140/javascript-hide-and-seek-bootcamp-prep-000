function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested div div div .target')
}

function increaseRankBy(n){
const lis = document.querySelectorAll('ul.ranked-list li')
var ammount =lis.length 
for (let i = 0; i < ammount; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
}
}
/*
function deepestChild(){
  return document.querySelector("#grand-node div div div div")
}
*/

function deepestChild(){
  const check = document.querySelectorAll("#grand-node")
  var nextNode = 
}