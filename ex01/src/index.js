// Create
myArr = [2, 4, 0, 8, 10];
// End creating Array

//Function here
function myArrayFunction (myItems) {
    myArr[myItems] = 6; 

    return myArr;
} 
myArrayFunction(2);
//End function

module.exports = myArrayFunction; 