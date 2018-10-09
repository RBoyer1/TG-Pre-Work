// Write your code below
let bobsFollowers = ['Sarah', 'Josh', 'Mike', 'Heather'];
let tinasFollowers = ['Sarah', 'Josh', 'Bill'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// creating a nested loop in js
