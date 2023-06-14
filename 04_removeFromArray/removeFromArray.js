// const removeFromArray = function(arr, nums) {
//     const index = arr.indexOf(nums);
//     for (let nums = 0; nums < nums.length ; nuns++) {
//         for (let possition = 0; possition < arr.length; possition++) {
//     if (nums === possition) {
//         return newArray = arr.splice(nums, 1);  
//     } 
//     }

// }
// };

// const arr = []
// const nums = []
const removeFromArray = function (...nums) {
    const array = nums[0];
    const newArray = [];
    array.forEach((item) => {
     
        if (!nums.includes(item)) {
            newArray.push(item);
          }
    })
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;