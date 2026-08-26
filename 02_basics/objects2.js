const tideruser= new Object();  // singleton
 const tinderuser= {
    name:"Virat",
    email:"Virat@google.com",
    isLoggedIn:"False"
 }   // non singleton

 const other_user={
    email : "virat123@google.com",
    userfullname: {
        fullname :{
            firstname:"virat",
            lastname:"Pratap"

        }
    }
 }
//  console.log(other_user.userfullname.fullname.firstname)
//   console.log(other_user.userfullname.fullname)


  const obj1={
    1:"A",
    2:"b",
  }
  const obj2={
    3:"c",
    4:"d",
  }
//   const obj3= Object.assign({},obj1,obj2)

//   console.log(obj3)

const obj3={...obj1,...obj2}
// console.log(obj3)


// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))

// console.log(Object.keys(other_user))
// console.log(Object.values(other_user))

console.log(tinderuser.hasOwnProperty('name'));


const course={
  name:"Baasics of JS",
  student:"virat",
  courseInstructor:"Hitesh",
}

const {courseInstructor : v}=course

console.log(v);
