

        // arrow funtions 

        const add = (a, b) => a + b;
        console.log(add(2, 3))

        let arr = [1, 2, 3, 4, 5, 6];
        const oddNumber = arr.filter(n => n % 2 === 0);
        console.log(oddNumber);

        user = {
            name: 'Drashti',
            age: 22,
            address: 'Ahmedabad',
        }

        function updateObj(user, key, value) {
            user[key] = value
        }
        updateObj(user, 'age', 24)
        console.log(user);


        usersdata = [{
            name: 'Divya',
            age: 34,
            city: 'surat',
        }]


        function addObj(arr, name, age, city) {
            arr.push({
                name: name,
                age: age,
                city: city
            });
        }
        addObj(usersdata, 'Drashti', 22, 'Ahmedabad');
        console.log(usersdata);

        usersdata[0].name = 'Meet';

        //    Object Destructuring   
        const listuser = { firstName: 'Drashti', age: 22 };
        const { firstName, age } = listuser;
        console.log(firstName);
        console.log(age);


        //   array   Destructuring 
        const arrdes = [1, 3, 4, 5, 6, 7];
        const [a, b, c, d, e, f] = arrdes;
        console.log(f);


        //  Spread Operator
      
        let fruits = ['mango', 'banana', 'apple'];
        let shakes = ['mangoshake', 'bananacake', 'applepie'];


        const fruitshake = [...fruits, ...shakes];
        console.log(fruitshake);

        // example [1]
        let defultarr = [1, 2, 3];
        let newArr = [...defultarr, 4, 5];
        console.log(newArr);

        // example [2]
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const result = { ...obj1, ...obj2 };
        console.log(result);


        // example [3]
        let cars = ['BMW', 'mercedes', 'audi', 'toyota'];

        let temp = [...cars];

        temp[2] = 'Thar'
        console.log(temp);


        // example [4]
        function sum(x, y, z) {
            return x + y + z;
        }

        let numbers = [1, 2, 3];
        console.log(sum(...numbers));


        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1
            }
            else {
                return n * factorial(n - 1);
            }
        }

        console.log(factorial(6));

        // data parameter
        const xmas95 = new Date("2016-06-23");
        console.log(xmas95);


        const today = new Date();
        console.log(today);


        const names = ["John", "Alice", "John", "Bob", "Alice"];

        const uniqueNames = [...new Set(names)];

        console.log(uniqueNames);

        const mySet = new Set();
        mySet.add(1);
        mySet.add("some text");
        mySet.add("foo");

        mySet.has(1); // true
        mySet.delete("foo");
        mySet.size;


        for (const item of mySet) {
            console.log(item);
        }

        // Selecting Elements
        const heading = document.getElementById("title");
        console.log(heading);

        const para = document.querySelector(".text");
        console.log(para.textContent);

        const paragraphs = document.querySelectorAll(".para");
        paragraphs.forEach(p => {
            console.log(p.textContent);
        });

        // Changing Content
        document.getElementById("header").textContent =
            "New Title";
        //inner html
        document.getElementById("box").innerHTML =
            "<h2>Welcome</h2>";

        //   Manipulating Styles
        const msg = document.getElementById('message')

        msg.style.color = 'red';
        msg.style.fontSize = '30px'


        //  Creating Elements
        const newPara = document.createElement("p");

        newPara.textContent = "I am a new paragraph";

        document.getElementById("container").appendChild(newPara);


        // create  the button
        const btn = document.createElement("button");
        btn.textContent = "Click Me";
        document.body.appendChild(btn);




        //  Event Handling
        function sayHello() {
  alert("Hello!");
}

        // promise
        const promise = new Promise((res, resp) => {
            console.log('this  is  my first promise')
        });

        const myPromise = new Promise((resolve, reject) => {
            resolve("Data received");
        });

        myPromise.then((result) => {
            console.log(result);
        });


        const mycustomPromise = new Promise((resolve, reject) => {
            resolve("Something went wrong");
        });
        mycustomPromise.then((result) => {
            console.log(result)
        })

        const customRject = new Promise((res, rej) => {
            rej("Getting  some  error");
        });

        customRject.then((result) => {
            console.log(result);
        })
            .catch((error) => {
                console.log("error", error);
            })


 