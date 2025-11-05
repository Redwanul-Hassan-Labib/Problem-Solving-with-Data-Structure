//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}


//! Eta ektu let kore data ase and onk let kore 
const finalResult = (usersA, usersB)=>{
    const startTime = performance.now()
    const  isArray = []

    //! Order of N *N  o(n*N)
    usersA.forEach((usersA) => {
        usersB.forEach((usersB)=>{
            if (usersA.id ===usersB.id) {
                isArray.push(usersB)
            }
        })
    });
const endTime = performance.now()
    return{ count: isArray.length, Timefinish : endTime - startTime}

}

// console.log(finalResult(usersA,usersB));


//! ekhne onk fast data ase set use kore

const finalResultSet = (usersA, usersB)=>{
    const startTime = performance.now()
    const  isArray = []

    const implementIsSet = new Set(usersA.map(usersA => usersA.id))
    //o(n)
    usersB.forEach((usersB) => {
        if (implementIsSet.has(usersB.id)) {
            isArray.push(usersB)
        }
    });
  const endTime = performance.now()
    return{ count: isArray.length, Timefinish : endTime - startTime}

}


    // console.log(finalResultSet(usersA,usersB));



    
const finalResultMap = (usersA, usersB)=>{
    const startTime = performance.now()
    const  isArray = []

    const implementIsmap = new Map(usersA.map(usersA => usersA.id))
    console.log(implementIsmap);
    //o(n)
    usersB.forEach((usersB) => {
        if (implementIsSet.has(usersB.id)) {
            isArray.push(usersB)
        }
    });
  const endTime = performance.now()
    return{ count: isArray.length, Timefinish : endTime - startTime}

}


    console.log(finalResultSet(usersA,usersB));
    


// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //