





    let arr =[10,20,30];
    let newvalue=40;
    let pos=3

    arr[arr.length]=40;
    console.log(arr)

    for (let i=arr.length; i>0;i--){
        arr[i]=arr[i-1];
    }

    arr[0]=newvalue;
    console.log(arr)


    for (let i=arr.length; i>0;i--){
        arr[i]=arr[i-1];
    }

    arr[pos]=newvalue;
    console.log(arr)


    let num =[1,2,3,4];
    let index=3;
    let  newValue=300;
    num[index]=newValue;
    console.log(num)


    let start=0
    let end=num.length-1

while (start<end){
    let temp=num[start];
    num[start]=num[end]
    num[end]=temp;

    start++;
    end--;
}
console.log(num);


let newarry=[11,3,45,6,7]
let min=arr[0]
let max=arr[0];
for (let i=1;i<newarry.length;i++){
    if(newarry[i] > max){
        max=newarry[i]
    }
}

console.log(max);


for (let i=1;i<newarry.length;i++){
    if(newarry[i] < min){
        min=newarry[i]
    }
}
console.log(min);

let arrtwo = [1, 2, 3, 4, 5, 6];

let count =0;

for (let i=0;i<arrtwo.length;i++){
    if(arrtwo[i] %2 ===0){
        count++;
    }
}
console.log(count)


let arrthree = [1, 2, 3, 4, 5, 6];
let sums = 0;
for (let i=0; i<arrthree.length ; i++){
sums +=arrthree[i]


}
console.log(sums)



let user = {
  name: "John",
  age: 25
};

user.age=40;
console.log(user)


user.city='ahemdabad';
console.log(user)

delete user.age
console.log(user)


let keys = "name";
let exists = false;

for (let prop in user) {
  if (prop === keys) {
    exists = true;
    break;
  }
}

console.log(exists); // true


let record=0
for (let key in user ){
    record ++;
}
console.log(record)



let userlist = {
  name: "John",
  age: 25,
  city: "Ahmedabad"
};
for (let key in userlist){
    console.log(key)
}


for (let key in userlist){
    console.log(userlist[key])
}

// 3. Local Storage


const userss = {
  name: "Drashti",
  age: 22
};

localStorage.setItem(
  "userss",
  JSON.stringify(userss)
);
const data = JSON.parse(
  localStorage.getItem("userss")
);

console.log(data.name);


async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const data = await response.json();

  console.log(data);
}

getUser();