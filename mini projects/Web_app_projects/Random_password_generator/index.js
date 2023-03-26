var len = document.getElementById("length_input");
var length_output = document.getElementById("length_output")
var passwordLength = 10;
length_output.innerHTML = passwordLength;
len.oninput= ()=>{
    passwordLength = len.value;
    length_output.innerHTML = passwordLength;
}
var password;
function get_password()
{
    password = generate_password()
    var password_output = document.getElementById("pass");
    password_output.value=password;
    calcStrength();
}
async function copyPass(){
    let copied = document.getElementById("coppied");
    try{
        await navigator.clipboard.writeText(password);
        copied.innerText = "coppied"
    }
    catch(e){
        copied.innerText = "failed"
    }
    setTimeout(()=>{
        copied.innerText=""},7000
    );
}

// functions to generate random numbes characters and symbols

//*******THERE DECLARATIONS ARE OF LINE 65 TO 71***************/
var uppercase_checkbox = document.getElementById("uppercase");

var lowercase_checkbox = document.getElementById("lowercase");

var numbers_checkbox = document.getElementById("numbers");

var symbols_checkbox = document.getElementById("symbols");
// *************************************************************

var temp_pass="";
function generate_password()
{
    temp_pass="";
    function generate_random_integer(min,max){
        return Math.floor(Math.random()*(max-min)+min);
        //this function returns a random integer between certain values
    }

    function generate_random_number()
    {
        return generate_random_integer(0,9);
        // this function returns a random number between 0 to 9
    }

    function generate_random_uppercase()
    {
        return String.fromCharCode(generate_random_integer(65,91));
        // this function return a random UpperCase character (A to Z)
    }

    function generate_random_lowercase()
    {
        return String.fromCharCode(generate_random_integer(97,123));
        // this function return a random UpperCase character (a to z)
    }

    const symbols_arr = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

    function generate_random_symbol()
    {
        var index=generate_random_integer(0,symbols_arr.length-1)
        return symbols_arr[index];
        // this function return a random symbol character
    }

    // var uppercase_checkbox = document.getElementById("uppercase");

    // var lowercase_checkbox = document.getElementById("lowercase");

    // var numbers_checkbox = document.getElementById("numbers");

    // var symbols_checkbox = document.getElementById("symbols");

    let functions_arr = []; // this is an array which holds the function calls for different requirements of passwords


    if(uppercase_checkbox.checked)
    {
        functions_arr.push(generate_random_uppercase);
    }

    if(lowercase_checkbox.checked)
    {
        functions_arr.push(generate_random_lowercase);

    }
    if(numbers_checkbox.checked)
    {
        functions_arr.push(generate_random_number);
    }

    if(symbols_checkbox.checked)
    {
        functions_arr.push(generate_random_symbol);
    }

    // here we build the password by calling each funciton in the array
    for(let i=0;i<functions_arr.length;i++)
    {
        temp_pass+=functions_arr[i]();
    }
    //now temp_pass has all the minimum requirements (according to checked boxes)

    for(let i=temp_pass.length;i<passwordLength;i++)
    {
        //after minimum requirements we now complete the length of password
        let random_functions_caller = generate_random_integer(0,4);
        //random_functions_caller is a random integer b/w 0 to 4 
        //this is so that we have a totally random arrangement of uppercase/lowercase/numbers/symbols
        if(random_functions_caller===0)
        {
            temp_pass+=generate_random_uppercase();
        }
        if(random_functions_caller===1)
        {
            temp_pass+=generate_random_lowercase();
        }
        if(random_functions_caller===2)
        {
            temp_pass+=generate_random_number();
        }
        if(random_functions_caller===3)
        {
            temp_pass+=generate_random_symbol();
        }
    }
    //the first 4 charactes of the password are pridictable because of line 58 to 82
    //so now we randomise the temp_pass array
    // console.log(typeof temp_pass);
    let final_pass = shufflePassword(Array.from(temp_pass));
                            //Array.from() is a function to make an array from string
    // *************************IMPORTANT*******************
    function shufflePassword(array) {
        //Fisher Yates Method
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            // console.log("flag");
          }
        let str = "";
        array.forEach((el) => (str += el));
        // console.log(str);
        return str;
    }
    // console.log(password);
    //***********************************************************
    //now we give the generated password to the get_password function
    return final_pass;
}

// we check the strength of the password and change the indicator accordingly 

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercase_checkbox.checked) hasUpper = true;
    if (lowercase_checkbox.checked) hasLower = true;
    if (numbers_checkbox.checked) hasNum = true;
    if (symbols_checkbox.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}
function setIndicator(color)
{
    // console.log(color);
    let indicator=document.getElementById("indicator");
    indicator.style.backgroundColor=color;
    let box_shadow1="3px 3px 7px "+color+", -3px -3px 7px "+color+", 3px -3px 7px "+color+", -3px 3px 7px "+color;
    // let box_shadow2="-3px -3px 5px"+color;
    indicator.style.boxShadow=box_shadow1;
    // indicator.style.boxShadow=box_shadow2;

}



// var copy = document.getElementById("copy");
// var copied = document.getElementById("dataCopied");
// var len = document.getElementById("length_input");
// var length_output = document.getElementById("length");
// var uppercase = document.getElementById("uppercase");
// // var uppercase = document.querySelector("uppercase");
// var lowercase = document.getElementById("lowercase");
// var symbols = document.getElementById("symbols");
// var numbers = document.getElementById("numbers");
// var indicator = document.getElementById("indicator");
// var pass = document.getElementById("pass");
// const symbols_arr = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// let password = "";
// let pass_base = [];
// let passwordLength=10;

// function generate_pass(){

// function random_Int_generato(min,max){
//     return (Math.floor(Math.random()*(max - min))+min)
// }
// function randomNumber(){
//     return random_Int_generato(0,9);
// }
// function randomLowerCase(){
//     return random_Int_generato(97,123);
// }
// function randomUpperCase(){
//     return String.fromCharCode(random_Int_generato(65,91));
// }
// function randomSymbols(){
//     const randNum = random_Int_generato(0,symbols.length);
//     return symbols_arr.charAt[randNum];
// }
// // function shufflePassword(max){
// //     let index = 0;
// //     while(pass_base.length>0)
// //     {
// //        index = Math.floor(Math.random()*(pass_base.length));
// //        password[i]=pass_base[index];
// //        pass_base=pass_base.slice()

// //     }
// // }
// let funcArr = [];

// if(uppercase.checked)
//     funcArr.push(randomUpperCase);

// if(lowercase.checked)
//     funcArr.push(randomLowerCase);

// if(numbers.checked)
//     funcArr.push(randomNumber);

// if(symbols.checked)
//     funcArr.push(randomSymbols );
// //compulsory addition
// for(let i=0; i<funcArr.length; i++) {
//     password += funcArr[i]();
// }
// console.log(password);
// }
// len.oninput= ()=>{
//     passwordLength = len.value;
//     length_output.innerHTML = passwordLength;
// }
// async function copyPass(){
//     try{
//         await navigator.clipboard.writeText(pass.value);
//         copied.innerText = "copied"
//     }
//     catch(e){
//         copied.innerText = "failed"
//     }
// }
// function calcStrength() {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;
//     let hasSym = false;
//     if (uppercaseCheck.checked) hasUpper = true;
//     if (lowercaseCheck.checked) hasLower = true;
//     if (numbersCheck.checked) hasNum = true;
//     if (symbolsCheck.checked) hasSym = true;
  
//     if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
//       setIndicator("#0f0");
//     } else if (
//       (hasLower || hasUpper) &&
//       (hasNum || hasSym) &&
//       passwordLength >= 6
//     ) {
//       setIndicator("#ff0");
//     } else {
//       setIndicator("#f00");
//     }
// }


