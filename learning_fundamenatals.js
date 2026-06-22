


// print the  number  from 1 to  n
function printnumber(n){
    for (let i=1; i<=n;i++){
     console.log(i);   
    }
}

printnumber(20);

// print the  even  number  from 1 to  n
function evenNumber (n){
        for (let i=1; i<=n;i++){
            if (i%2==0){
            console.log(i);
            }
            }
    }
evenNumber(30);


//  calculate the sum of a number
function sum (n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum +=i;
    }
    console.log(sum)
}

sum(20);


//  calculate the table of a number
function multable(num){
    for (let i=1;i<=10;i++){
        console.log(`${num * i}`)
    }
}
 multable(2);


//  count  the number of digits prsent 

function numberCount (num){
    let count=0;

    while (num >0){
        count++;
        num=Math.floor(num / 10);
    }
    console.log(count);
}
numberCount(12345);



//  reverse  the number  

function reverseNumber(num){
    let reverse =0;

    while (num >0){
        let digit  = num % 10;
        reverse =reverse * 10 + digit;
        num =Math.floor (num /10);

    }
    console.log(reverse);

}
reverseNumber(123456);


// factorial of a number 
function  factorial(num){
    let result =1;

    for (let i =1;i<=num ;i++){
        result *=i;

    }
    console.log(result)
}
factorial (5)



//prime  number 
function isprime (num){
if (num < 2 ){
    return false;
}

else {
    for (let i=2;i<=num;i++){
        if(num % i===0){
            return false;
        }
    }
}


return  true;
}
console.log(isprime(5));


// largest number is an array
function largestNumber(arry){
let arrymax=arry[0];


for (let i=1; i<arry.length; i++){
    if (arry[i] >arrymax){
        arrymax =arry[i];

    }
}


console.log(arrymax);
}   
largestNumber([1,2,9,4,1,3,5,6,7,2]);



// count vowels in the  string first way


function countVowels(str){
let count =0;


for (let char of str.toLowerCase()){
    if ('aeiou'.includes(char)){
        count ++;
    }
}
console.log(count);
}


countVowels("Drashti");



// count vowels  seacond way

function countVowels(str){
let count =0;
    for(let i =0;i< str.length ;i++){
    let char =str[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        count++;
            }
    }
console.log(count)}


countVowels("Divya");



// find  the pallendrom  string

function palindrome (str){
    let temp ='';

    for(let i =str.length-1;i>=0;i--){
        temp += str[i];

    }

    if (temp === str){
        console.log('true ')
    }
    else{
        console.log('false')
    }
}


palindrome('DAD');


// fibonaci series

function fibonaci (number){
    let a=0;
    let b=1;

    for(let i=2;i<=number;i++){
 console.log(a);

 let temp =a+b;
 a=b;
 b=temp;

    }
}
fibonaci(10)



// remove  the dublicate  from the array

function removeDuplicates(arr) {
    
    let uniqueSet = new Set(arr);
     let result = [...uniqueSet];
    
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));




