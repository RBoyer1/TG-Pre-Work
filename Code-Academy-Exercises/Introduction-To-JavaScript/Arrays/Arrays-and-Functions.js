const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = newArr => {
  newArr.pop()
}

removeElement(concept);

console.log(concept);

// an array that is mutated inside a function will also be changed outside the function
