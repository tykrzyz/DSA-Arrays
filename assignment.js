const Array = require('./Array');

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  console.log(arr.get(0));
  let currentLenght = arr.length;

  for(let i = 0; i < currentLenght; i++){

    arr.pop();
  }

  console.log(arr);
  arr.push('tauhida');
  console.log(arr.get(0));
}

function URLify(input){
  let inputArr = [''];
  let index = 0;
  for(let i = 0; i < input.length; i++){
    if(input.charAt(i) !== ' '){
      inputArr[index] += input.charAt(i);
    }
    else{
      index++;
      inputArr[index] = '%20';
      index++;
      inputArr[index] = '';
    }
  }
  return inputArr.join('');
}

function filter(arr){
  let length = arr.length;
  for(let i = 0; i < length; i++){
    if(arr[i] < 5){
      arr.splice(i, 1);
    }
  }
  return arr;
}

function maxSum(arr){
  let maxSum = 0;
  for(let i = 0; i < arr.length; i++){
    maxSum += arr[i];
    
  }
  return maxSum;
}

function merge(arr1, arr2){
 
  let output = [];
  let count = 0;
  let arr1Index = 0;
  let arr2Index = 0;

  
  while(count < arr1.length + arr2.length){
    if(arr1[arr1Index] <= arr2[arr2Index]){
      output.push(arr1[arr1Index]);
      arr1Index++;
    }
    else{
      output.push(arr2[arr2Index]);
      arr2Index++;
    }
    count++;
  }

  return output;
}

function removeChars(input, removed){
  let newString = input;
  for(let i = 0; i < removed.length; i++){
    newString = newString.replace(removed.charAt(i), '');
  }
  if(newString !== input){
    newString = removeChars(newString, removed);
  }

  return newString;
}

function products(arr){
  let totalProduct = 1;
  let output = [];
  for(let i = 0; i < arr.length; i++){
    totalProduct *= arr[i];
  }
  for(let i = 0; i < arr.length; i++){
    output.push(totalProduct/arr[i]);
  }
  return output;
}

function oopsAllOs(arr){

  let output = [];
  for (var i = 0; i < arr.length; i++)
    output[i] = arr[i].slice();

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){   
      if(arr[i][j] === 0){
        for(let k = 0; k < output[i].length; k++){
          output[i][k] = 0;
        }
        for(let k = 0; k < arr.length; k++){
          output[k][j] = 0;

        }
      }
    }
  }
  return output;
}

function isRotation(str1, str2, iteration = 0){
  if (str1 !== str2){
    iteration++;
    if(iteration > str1.length){
      return false;
    }
    let newString = str1.slice(1) + str1.charAt(0);
    return isRotation(newString, str2, iteration)
  }
  return true;

}