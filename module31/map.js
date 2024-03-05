const numbers=[343,345,35,23,24,53]
//you can double this array item using for loop

function doubleIt(num){
    // console.log(num)
    return num*2;

}
const final =numbers.map(doubleIt)
console.log(final)

// the same thing you can do by arrow function 
const double2= a=>a*2;
const result=numbers.map(double2)
console.log(result)//this map do the opetation and save internally in a array and finaly return the array.