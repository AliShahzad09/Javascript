// let marks_class_12 = [91,89,80,86,75,76,"not present"]
// marks_class_12[0] = 95 // Changing a value 
// marks_class_12[6] = 95 // Addaing a value
// console.log(marks_class_12[0])
// console.log(marks_class_12[1])
// console.log(marks_class_12[2])
// console.log(marks_class_12[3])
// console.log(marks_class_12[5])
// console.log(marks_class_12[6])

// const gave_my_course = (ai,web,seo,gd,cs,)=> ai || web || seo || gd || cs || "Ghar Jao";
// const response = gave_my_course("",null,null,null,'cyber security');
// console.log(response) 

            //    use any array and print studnets data in for loop.

// const numbers = [13, 23, 33, 43, 55];
// // Step 2: Use a for loop to iterate over the array
// for (let i = 0; i < numbers.length; i++) {
//   // Step 3: Print each element inside the loop
//   console.log(numbers[i]);
// }

            //   ARRAYS METHODS

// let numbers2 = [1,2,3,4,5,6,7,8,9]
// console.log(numbers2.join(" and "))
// console.log(numbers2.length)            

            //  pop() Method  remove an element  from last of the array.
// let numbers3 = [12,3,45,67,89,90]
// let r = numbers3.pop()
// console.log(numbers3,r)
   

           //   push() Method  add an element from end of the array.
//  let myarray = [13,23,45,67,89,98]
//  let r2 = myarray.push(19)
//  console.log(myarray,r2)

        //   shift() remove the first element from an array and return it.   

// let numb4 = [21,33,54,76,87]
// let r = numb4.shift()
// console.log(numb4.length)
// console.log(numb4,r)
       
        //   unshift() add the first elemnt from an array and return new array length.
// let numb5 = [88,66,55,44,33,22]
// let r3 = numb5.unshift(19)
// console.log(numb5,r3)
  
       // Delete() it delete any array element .imp:array length can be remain same cannot be change
// let  numb6 = [12,23,34,46,65,53,23,21]
// delete numb6[2]
// let r4 =numb6.length
// console.log(numb6)
// console.log(r4)

// let volt = 240;
// if (volt>=240)  {
//         console.log("Turn of The Breaker");        
// } 

// else {
//        console.log("Turn on The Breaker");
// }

//          Concate() Method => mean two or more than two ko combine krna

// let num = [12,23,43,23,54,23]
// let num_more = [76,65,54,43]
// let num_mores = [21,34,42,31]
// let newarray = num.concat(num_more,num_mores)
// console.log(newarray)

//          sort() Method => mean kay ye alphabetically arrange krty hy number ko string smjh kr

// let compare =(a,b)=>{
//         return a-b
// }
// let ashort = [12,32,54,43,67,35,67,18]
// let bsort = ashort.sort(compare)
// console.log(ashort)

//   reverse() Method mean array ko ullat kardega

// let num7 = [12,32,34,45,65,67]
// let numb8 = num7.reverse()
// console.log(num7)

//     splice() splice can be used to add an item to an array 

// let numb9 = [12,43,76,98,764,5,432]
// let deletevalues =numb9 .splice(2,2,999,766,555)
// console.log(numb9)
// console.log(deletevalues)

//     slice 
// let nub10 = [12,343,543,654,324,876]
// num1= nub10.splice(2,1)
// console.log(nub10)

        
        //           USING LOOPS WITH ARRAYS IN JAVASCRIPT 

// let a = [12,3,4,5,6]
// for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);  
// }        

        //                        FOR EACH LOOP
// let b = [43,23,11,7,2]
// b.forEach((value) => {
// console.log(value*value)
// });

                        //      ARRAY.FROM
// let c = "Ali"
// let d = "NA"
//  e = c.concat(d)
//  f = Array.from(e)
// console.log(f)                       

//                          FOR OF LOOP 
// let g = [76,13,42,46,86]
// for(let i of g){
//         console.log(i)
// }

                        //   FOR-in LOOP
// let h = [43,45,567,9,3,32]
// for(i in h){
//         console.log(h[i])
// }                        
