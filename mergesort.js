let array = [4, 2, 3, 1];

function mergeSort(array) {
  split(array), merge(split);
}

function split(array) {
  let mitad;
  let firstHalf;
  let secondHalf;

  if (array.length % 2 == 0) {
    mitad = array.length / 2;
  } else {
    mitad = parseInt(array.length / 2);
  }

  firstHalf = array.slice(0, mitad);
  secondHalf = array.slice(mitad, array.length);

  return [firstHalf, secondHalf];
}

function merge(fn) {
  let primera = fn()[0];
  let segunda = fn()[1];
  let arrayFinal = [];
  let j = 0;
  while (j < primera.length && j < segunda.length) {
    if (primera[j] > segunda[j]) arrayFinal.push(segunda[j]);
    else if (primera[j] < segunda[j]) arrayFinal.push(primera[j]);

    j++;
  }
  return arrayFinal;
}
// let array = [4, 2, 3, 1];

// function mergeSort(array) {
//   let firstHalf;
//   let secondHalf;
//   let arrayFinal = [];

//   split();
//   merge();
//   function split(array) {
//     let mitad;

//     if (array.length % 2 == 0) {
//       mitad = array.length / 2;
//     } else {
//       mitad = parseInt(array.length / 2);
//     }

//     firstHalf = array.slice(0, mitad);
//     secondHalf = array.slice(mitad, array.length);

//     return [firstHalf, secondHalf];
//   }

//   function merge(firstHalf, secondHalf) {
//     let j = 0;
//     while (j < firstHalf.length && j < secondHalf.length) {
//       if (firstHalf[j] > secondHalf[j]) arrayFinal.push(secondHalf[j]);
//       else if (firstHalf[j] < secondHalf[j]) arrayFinal.push(firstHalf[j]);

//       j++;
//     }
//     return arrayFinal;
//   }

//   // let arrMerged = arrayFinal.concat(array);
//   return arrMerged;
// }
