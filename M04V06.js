//! Binary Search implement
// console.log(binarySearch([3, 5, 6, 7, 9, 11], 7)); // Output: 3

const binarySearch = (arr, terget)=>{
    arr.sort((a,b)=> a-b) //? this code is sorted.

    console.log(arr.sort((a,b)=> a-b));

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((high + low)/2)
        const guessNumber = arr[mid];

        if (guessNumber === terget) {
            return mid
        } else if (guessNumber > terget) {
            high = mid - 1
        }else {
           low = mid + 1
        }
    }return false
}

console.log(binarySearch([3, 5,5,9,2,1, 6025,3512,6,30,65,32, 7,500,1000,3500, 9,20,85,65,20,25,62, 11], 7));