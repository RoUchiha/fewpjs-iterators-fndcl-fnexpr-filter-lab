// Code your solution here

function findMatching(array, string) {
    let match = array.filter(str => str.toLowerCase() === string.toLowerCase());
    return match
}

function fuzzyMatch(array, string) {
    return array.filter( str => str.startsWith(string))
}

function matchName(array, string) {
   return array.filter(str => str.name === string )
}