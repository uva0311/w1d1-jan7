// i am coding here my password analyzer

// first step is to collect the password from command line

var pwd = process.argv[2]



function areThereAny(fullset, word) {
  var areThere = false
  for(var p = 0; p < word.length; p++) {
    if(fullset.includes(word[p])) { // is a capital letter
      return true
    }
  }
  return false
}


var allCaptials = "QWERTYUIOPASDFGHJKLZXCVBNM"
console.log('Does it have capitals? ', areThereAny(allCaptials,pwd))

var allSpecials = "!@#$%^&*(){}"
console.log('Does it have specials? ', areThereAny(allSpecials,pwd))

console.log('Is it really long? ' , pwd.length>13? true:false)