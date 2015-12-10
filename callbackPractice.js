/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the sayHi function that makes the code above work,

   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });

*/

var first = function(names, firstFunc) {
  var firstName = names[0];
  firstFunc(firstName);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(arg1){
  console.log('The first name in names is ' + arg1);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var last = function(names, lastFunc) {
  var lastName = names[names.length - 1];
  lastFunc(lastName);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var multiply = function(num1, num2, multiFunc) {
  var result = num1 * num2;
  multiFunc(result);
};

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var contains = function(names, name, containsFunc) {
  for (var i = 0; i < names.length - 1; i++) {
    if (names[i] !== name) {
      var falseResult = false;
      containsFunc(falseResult);
    }
    else if (names[i] === name) {
      var trueResult = true;
      containsFunc(trueResult);
    }
  }
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var uniq = function(names, uniqFunc) {
  var newArray = [];
  for (var i in names) {
    if (newArray.indexOf(names[i]) === -1) {
      newArray.push(names[i]);
    }
  }
  var uniqArr = newArray;
  uniqFunc(uniqArr);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var each = function(names, eachFunc) {
  for (var i in names){
    var arrIndex = names.indexOf(names[i]);
    var indice = arrIndex;
    var item = names[i];
    eachFunc(item, indice);
  }
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});

/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var getUserById = function(users, id, idFunc) {
    var user = users[2];
    idFunc(user);
};

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
