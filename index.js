function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
  var node = document.querySelector('#nested')
  var nextNode = node.children[0];
  while (nextNode){
    node = nextNode
    NextNode = node.children[0];
      }
  return node
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
  var node = document.querySelector("#grand-node")
  var nextNode = node.children[0];
  while (nextNode){
  node = nextNode;
  nextNode = node.children[0]
  }
  return node
}