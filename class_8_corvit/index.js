//    question no 1 write an async function to call an api and log its response 

// const callapi=async()=>{
//     const res=await fetch("https://reqres.in/api/users?page=1")
//     console.log(await res.json())
// };
// console.log(callapi());
 
// qno 2 write an async function that fetches data from multiple api and return the combined result
// let arr1=[]
// let arr2=[]
// let arr3=[]

// const multipleapi=async()=>{
//     console.log("program run")
//     const res1=await fetch("https://reqres.in/api/users?page=1")
//     const res2=await fetch("https://reqres.in/api/users?page=2")
//     const res3=await fetch("https://reqres.in/api/users?page=3")
//       arr1=await res1.json();
//       arr2=await res2.json();
//       arr3=await res3.json();
//       let combine=[...arr1.data,...arr2.data,...arr3.data]
//       console.log(combine)
//       console.log("last of function")
// };
// console.log(multipleapi());
