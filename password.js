let password = "isTh1sAGoodPassword?"

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    return specialChars.test(str)
  }
function containsNum(str) {
    const nums = /[1234567890]/
    return nums.test(str)
  }
function longEnough(str) {
    const length = password.length
    return length
}
function shortEnough(str) {
    const shortness = password.length
    return shortness
}
function containsUpperCase(str) {
    const upper = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/
    return upper.test(str)
}
function containsLowerCase(str) {
    const lower = /[abcdefghijklmnopqrstuvwxyz]/
    return lower.test(str)
}
function containsSpace(str) {
    const space = /[\s]/
    return space.test(str)
}
  
  if (containsSpecialChars(password) === false) {
    console.log("Password must contain a special character")
  } 
  if (containsNum(password) === false) {
    console.log("Password must contain a number")
  }
  if (longEnough(password) < 10) {
    console.log("Password must contain at least 10 characters")
  }
  // This checks if password is short enough
  if (shortEnough(password) > 20) {
    console.log("Password cannot contain more than 20 characters")
  }
  // This checks if password has an upper case
  if (containsUpperCase(password) === false) {
    console.log("Password must contain an upper case letter")
  }
  // This checks if password has a lower case
  if (containsLowerCase(password) === false) {
    console.log("Password must contain a lower case letter")
  }
  // This checks if password has a space
  if (containsSpace(password) === true) {
    console.log("Password cannot contain a space")
  }
  if (containsSpecialChars(password) === true 
        && containsNum(password) === true 
        && longEnough(password) >= 10 
        && shortEnough(password) <= 20 
        && containsUpperCase(password) === true 
        && containsLowerCase(password) === true 
        && containsSpace(password) === false) {
    console.log("Password Success!")
  }

  let thisIsArtRight = ` /^\\\n/   \\\n| |_|\n_\\ \\\n| | |\n\\   /\n \\v/`




  console.log(thisIsArtRight)