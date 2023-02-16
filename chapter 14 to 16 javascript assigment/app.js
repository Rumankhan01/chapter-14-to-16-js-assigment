//connect to mongodb in nodejs?

// Q 1

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// () this brackets is called litral notation

// var names = ();
// console.log(names);

// Q 2


// 2. Declare an empty array using JS object notation to store
// student names in future.
// object notation is represnted like this []

// var studentNames = [];
// console.log(studentNames)

// Q 3

// 3. Declare and initialize a strings array.

// var carsNames = ["BMW" , "Audi", "ferarai"];
// console.log(carsNames);

// Q 4

// 4. Declare and initialize a numbers array.

// var cars = [11 , 17];
// console.log(cars);

// Q 5

// 5. Declare and initialize a boolean array.

// var cars = ['true' , 'false'];
// console.log(cars);

// Q 6

// 6. Declare and initialize a mixed array.

// var cars = ['true' , 'false',100,200,"rumann","zeeshan"];
// console.log(cars);

// Q 7



// Q 8

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentNames = ["Ruman", "Zeeshan", "Arshid"];
// var score = [279, 285, 392];
// var totelScore = 500;
// document.write('Score of ' + studentNames.splice(0, 1) + " is " + score.splice(0, 1) + ". Percentage  is: " +score.splice(0, 1)/totelScore*100+"%")

// document.write('Score of ' + studentNames.splice(1, 1) + " is " + score.splice(1, 1) + ".percetage is: " + score.splice(1, 1) / totelScore * 100 + "%")






/****Question No 09 */

// Initialize an array with color names. Display the array
// elements in your browser

// var colorNames = ["red","blue","green"];
// console.log(colorNames);


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.

// part : a



// const colors = ['red', 'green', 'blue'];
// const newColor = prompt("Enter a color to add to the beginning of the array: ");

// colors.unshift(newColor);
// document.write(`Updated array: [${colors}]`);


// part b

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser


// var color = ["red", "green", "blue"];
// var updateColor = prompt("Enter a color to add the end of the array");

// color.push(updateColor);
// document.write(`Updated array:[${color}]`);


// part c


// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.



// var color = ["red", "green", "blue"];
// var updateColor = prompt("Add two more color to the beginning of the array.");
// color.unshift(updateColor);
// document.write(`Updated array:[${color}]`);


// part c

// d. Delete the first color in the array. Display the updated
// array in your browser.


    // var color = ["red","green", "blue"];
    // var updateColor = prompt(" Delete the first color in the array");
    // color.shift(updateColor);
    // document.write(`Updated array:[${color}]`);



    // part e


    // e. Delete the last color in the array. Display the updated
    //     array in your browser.
    


    // var color = ["red","green","blue"];
    // var updateColor = prompt("Delete the last color in the array.");
    // color.pop(updateColor);
    // document.write(`Updated array:[${color}]`);

    // part f

    // f. Ask the user at which index he/she wants to add a color
    // & color name. Then add the color to desired
    // position/index. Display the updated array in your
    // browser.



        // var index = prompt("Enter the index at which you want to add the color:", "1")
    // addColors = prompt("Enter the color you want to add:")
    // colors.splice(index, 0, addColors)
    // document.write("Updated Array (After Adding Color at Desired Index): <b>" + colors + "</b> <br>")

    // part g

    // g. Ask the user at which index he/she wants to delete
    // color(s) & how many colors he/she wants to delete. Then
    // remove the same number of color(s) from user-defined
    // position/index. . Display the updated array in your
    // browser.

    // index = prompt("Enter the index at which you want to delete color(s):");
    // var deletNumbersOfColors = prompt("Enter the number of colors you want to delete:");
    // colors.splice(index, deletNumbersOfColors);
    // document.write("Updated Array (After Deleting Color(s) from Desired Index): <b>" + colors + "</b> <br>");



    // Q 10

    // 10. Write a program to store student scores in an array &
    //     sort the array in ascending order using Array’s sort
    //     method.

      // var arr = [320, 230, 480, 120, 11, 123, 888]
      // document.write("Score of student: " + arr + '<br />')
      // arr.sort()
      // document.write("Oedered Score of student: "+arr)


      // Q 11


      // 11. Write a program to initialize an array with city names.
      //     Copy 3 array elements from cities array to selectedCities
      //     array.


      // var citiesName = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
      // document.write('<h3> Cities list: <br>' + citiesName + '</h3 <br>')

      // var selectedCities = citiesName.slice(2,4)
      // document.write('<h3> Slected cities list: <br>'+ selectedCities)


      // Q 12

      // 12. Write a program to create a single string from the
      //       below mentioned array:
      //       var arr = [“This ”, “ is ”, “ my ”, “ cat”];
      //       (Use array’s join method)

          // var arr = ["This", "is", "my", "cat"];
          // var singleString = arr.join(" ");

          // console.log(singleString); // Output: "This is my cat"


        // Q 13




        // 13. Create a new array. Store values one by one in such a way
        //     that you can access the values in the order in which they
        //     were stored. (FIFO-First In First Out)

        // const queue = [];

        // queue.push("ruman");
        // queue.push("sami");
        // queue.push("zeashan");

        // const firstValue = queue.shift(); // firstValue is 1
        // const secondValue = queue.shift(); // secondValue is 2
        // const thirdValue = queue.shift(); // thirdValue is 3
        // document.write(queue)

        // Q 14


        // 14. Create a new array. Store values one by one in such a way

        //     that you can access the values in reverse order. (Last In-
        //     First Out)

        // const stack = [];

        // // Add values to the end of the stack
        // stack.push(1);
        // stack.push(2);
        // stack.push(3);

        // // Retrieve values from the end of the stack
        // const thirdValue = stack.pop(); // thirdValue is 3
        // const secondValue = stack.pop(); // secondValue is 2


        // Q 15


        // 15. Write a program to store phone manufacturers (Apple,
        //   Samsung, Motorola, Nokia, Sony & Haier) in an array.
        //   Display the following dropdown/select menu in your
        //   browser using document.write() method:


        // var phonManufac = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier','Xiaomi','Vivo','Oppo','Huawie','Realme','Infinix','Tecno']
        // document.write('<h1> Mobile Manufacture Companies list: </h1> <select> <option>'+phonManufac.slice(0,1) +'</option>')
        // document.write('<option>'+phonManufac.slice(1,2) +'</option>')
        // document.write('<option>'+phonManufac.slice(2,3) +'</option>')
        // document.write('<option>'+phonManufac.slice(3,4) +'</option>')
        // document.write('<option>'+phonManufac.slice(4,5) +'</option>')
        // document.write('<option>'+phonManufac.slice(5,6) +'</option>')
        // document.write('<option>'+phonManufac.slice(6,7) +'</option>')
        // document.write('<option>'+phonManufac.slice(7,8) +'</option>')
        // document.write('<option>'+phonManufac.slice(8,9) +'</option>')
        // document.write('<option>'+phonManufac.slice(9,10) +'</option>')
        // document.write('<option>'+phonManufac.slice(10,11) +'</option>')
        // document.write('<option>'+phonManufac.slice(11,12) +'</option> </select>')
        // const firstValue = stack.pop(); // firstValue is 1



    






















  






















