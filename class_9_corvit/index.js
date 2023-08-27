//  Assessment No 5 

// Qestion NO 1 : Call back function ?
//  Ans: A funtion that is passed as an aurgument to another funtion so that it can be executed to that other funtion is called callback funtion 

// Question NO 2: Name any one Javascript async Function ?
// ANS : SetTimeout() is a Async funtion 
//     2.Fetch()is also a Async function

// Question NO 3: 
// ANS : It shows that the the promise is pending .promise <pending>
//       If we write an await in console.log tehn it shows the data of that Api.

// Question NO : 4

// function makeApiCall() {
//     return new Promise((resolve, reject) => {
//       fetch('https://api.example.com/data')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Request failed with status ' + response.status);
//           }
//           return response.json();
//         })
//         .then(data => {
//           resolve(data);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }
  
//   // Usage:
//   makeApiCall()
//     .then(data => {
//       console.log('API call successful:', data);
//     })
//     .catch(error => {
//       console.log('API call failed:', error);
//     });
  
//   Question NO 5 

const callapi=async()=>{
    try {
        const res = await fetch("https://api.genderize.io/?name=luc");
        console.log(await res.JSON());
    } catch (error){
        console.log(error);
    }
};
console.log(callapi());