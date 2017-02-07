function zipList (array1, array2){
  let fused = [];

  for (let x = 0; x < array1.length; x++)
  {
    fused.push(array1[x]);
    fused.push(array2[x]);
  }

  return fused;
}

function zipListTheSimpleWay(array1, array2){
  return _.flatten(_.zip(array1, array2));
}

let a = ['a', 'b', 'c'];
let b = [1, 2, 3];

console.log(zipList(a,b));
console.log(zipListTheSimpleWay(a,b));