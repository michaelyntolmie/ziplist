const testA = ['a', 'b', 'c'];
const test1 = [1, 2, 3];

function zipList(arr1, arr2) {
  const zipArr = [];
  for (let i = 0; i < arr1.length; i++) {
    zipArr.push(arr1[i]);
    zipArr.push(arr2[i]);
  }
  return zipArr;
}

console.log(zipList(testA, test1));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(testA, test1));