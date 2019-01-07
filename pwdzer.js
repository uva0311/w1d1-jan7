// i am coding here my password analyzer

// first step is to collect the password from command line

var pwd = process.argv[2]


// check capital letters
var allCaptials = "QWERTYUIOPASDFGHJKLZXCVBNM"
var areThereCapitals = false
for(var p = 0; p < pwd.length; p++) {
  if(allCaptials.includes(pwd[p])) { // is a capital letter
    areThereCapitals = true
  }
}
console.log('Does it have capitals? ', areThereCapitals)
