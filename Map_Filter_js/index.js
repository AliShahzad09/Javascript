//                         MAP Method

// let arr = [12,43,32,22,65]
// a = arr.map((value,index,array)=>{
//     console.log(value ,index,array)
// })

// let arr = [12,43,32,22,65]
// a = arr.map(value=>value*2)
//     console.log("orignal Array :",arr)
//     console.log("Multiply by 2 NUM :",a)


//                        FILTER METHOD

// let arr2 = [12,23,34,45,10,9,6,8,7,5]
// let b = arr2.filter(number=>number % 2 === 0);
// console.log("Orignal Array: ",arr2)
// console.log("Even Numbers : ",b)   

        //    using filter method array may josny num 10 sy less hy usy show krwa dega 

// let arr2 = [12,23,34,45,10,9,6,8,7,5]
// let b = arr2.filter(number=>number <=10);
// console.log("Orignal Array: ",arr2)
// console.log("Even Numbers : ",b)   

// Make a funtion using filter to find age less than 20
let people = [
    {Name: 'Ali Shahzad',Age : 20 ,Roll :212},
    {Name: 'Natasha Ali',Age : 21,Roll : 432},
    {Name: 'Maham ',Age : 27,Roll : 213},
    {Name: 'Alina',Age : 20},
    {Name: 'Subhan Ziah',Age :30},
    {Name: 'Talha Ashraf',Age :35},
    {Name: 'Habbia Nazir',Age :19},
    {Name: 'Talha Hussain',Age:18},
]
// let newpeople = people.filter(person=>person.Name.startsWith('A'))
// let namestart = newpeople.map(person=>person.Name) 
// let newpeople = people.filter(person=>person.Age<30)
console.log("previous Data",people)
// console.log("By Filter To get name starts with A",namestart)
// console.log("Age whose less than 30",newpeople)
let newpeople = people.filter(person=>person.Roll<400)
let some = newpeople.map(person=> {
    return {
        name: person.Name,
        roll: person.Roll,
    }
})
console.log(some)

//                  By using Map & Filter 

let log =[
    {Name :'Ali Shahzad',Age :'20',Roll :'132',Marks :'98%'},
    {Name :'Natasha Ali',Age :'21',Roll :'133',Marks :'99%'},
    {Name :'Sana Sakhawat',Age :'24',Roll :'134',Marks:'70%'},
    {Name :'Subhan',Age :'23',Roll :'135',Marks:'80%'},
    {Name :'Ayesha',Age :'22',Roll :'136',Marks:'60%'},
    {Name :'Rizwan Ali',Age :'25',Roll :'137',Marks:'50%'},
    {Name :'Raffay Rana',Age :'26',Roll :'138',Marks:'75%'},
    {Name :'Noor',Age :'27',Roll :'139',Marks:'66%'},
] 
// let newlog = log.filter(value=>value.Name.startsWith('A'))
let newlog = log.filter(value=>value.Age<25)
let newloged = newlog.map(value=>{
    return{
        Name : value.Name,
        Age : value.Age,

    }
})
console.log('previous value',log);
console.log('New Data',newloged);
    
