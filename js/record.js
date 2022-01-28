1 /* integar */
1.5 /* float */
"hello" + "my name is nico" /*string*/
console.log('lalalala'); /* 이 코드는 콘솔에 log. 즉 괄호 안의 내용을 출력하는 역할 */
variable /* 값을 저장하거나 유지하는 역할 */
/* 주의할 점. 자바스크립은 언제나 위에서 아래로 실행되므로, 변수 설정을 위, 적용을 아래에서 해야 함. */
const /* 상수. 바뀌지 않는 값. 계속 유지 */
const a = 5; /*여기서 variable의 이름은 a이고 5와 같다는 의미를 가짐. 즉 a가 5라는 값을 가지고 있다 라는 의미. */

/* camelCase와 snake_case 설명:
변수명은 띄워쓰기가 안된다. 그래서 긴 변수명은 myName 이런식으로 다음 단어를 대문자로 표시하는데,
자바스크립의 경우에는 저렇게 대문자로 표시하는 경우가 대다수 = camelCase,
파이썬에서는 주로 _(언더바)로 표시한다. = snake_case */
let a = 5; 
let b = 2;
let myName = "minsub";



console.log(a+b); 
console.log(a * b);
console.log(a / b);
console.log("hello " + myName)

myName = "bravo"

console.log("your new name is " + myName)
/* 자바스크립에서 variable을 만드는 방법은 두가지가 있는데,
    하나는 const를 사용하는 것이고, 하는 let을 사용하는 것이다.
    여기서 const와 let의 차이점은 const(상수)는 constant, 즉
    값이 바뀔 수 없다는 것이고, let(변수)는 언제나 값을 변경할 수 있다.
    규칙은 기본적으로는 const를 쓰고, 필요할 때만 let을 쓰되, var는 쓰지 말 것.*/

/* 데이터타입 boolean 설명:
    자바스크립의 데이터 타입 중에는 '존재하지 않음' 또는 정의되지 않음'(undefined) 그리고 '아무것도 없음'(null)을 의미하는 것이 있다.

    그 중 하나는 null인데 '(해당 변수에) 아무것도 없음'을 의미한다. 
    null은 false와 다른데, false는 false 라는 값이 존재하는 것이다.
    null은 변수에 값은 있는데 아무것도 아닌 값이 있는 것이다.
    ex) const amIFat = null 이라고 정의하면, 나는 이 variable을 
    비워있다기 보다 말 그대로 아무것도 없는 것으로 채웠다고 보면 된다.

    다음으로 '정의되지 않음'을 뜻하는 undefined는 변수는 존재하는데 변수의 값을 정의하지 않은 것이다.
    ex) let something; 
        console.log(something)

    여기서 기억해야 할 점은 null은 절대 자연발생적이지 않다는 것이다. 
    null은 우리가 변수안에 어떤 값이 없다는 것을 확실히 하기 위해 쓰는 것이고,
    undefined는 변수는 있는데 값이 아예 주어지지 않은 상태인 것이다.
    따라서 위 예시를 봤을 때, amIFat은 존재하고, 값이 주어졌는데 그 값이 '비어있음'의 상태인 거고,
    something은 아예 정의되지 않은, 주어지지 않은 상태인 것이다. */

/* 배열
const mon="mon";
const tue="tue";
const wed="wed";
const thu="thu";
const fri="fri";
const sat="sat";
const sun="sund"

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
이러한 형태는 그저, string을 나열하고, 합친 것뿐 우리가 원하는 대로 작동하지 않음.

const daysOfWeek = [mon , tue , wed , thu , fri , sat , sun];
이러한 모양이 string이 아닌 array가 되는 것이다.
만약, array 안의 데이터에 접근하고 싶다면, console.log() 괄호 안에 변수명을 적고,
대괄호를 열어서 안에 얻고 싶은 항목의 번호를 넣고, 대괄호를 닫는다.
주의할 점. 컴퓨터는 숫자를 0부터 센다.

// Get Item from Array
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

array의 목적은 하나의 variable 안에 데이터의 list를 가지는 것. */

/* object

const player = {
    name:"minsub",
    points: 10,
    fat: true,
};

object는 내부의 규칙과 외부의 규칙이 다르다. 보시다시피 외부에서는 =을 사용하지만,
내부에서는 :을 사용한다. 그리고 한 개의 property를 작성하고 난 뒤에는 우리는
콤마를 사용하는데, property가 하나 더 올 수 있기 때문이다.

이 오브젝트 변수에 접근하는 방식은 console.log(player.name)과 같이
기존의 방식 외에도 console.log(player["name"]); 와 같은 방식이 있다.
또한 object도 업데이트를 할 수 있다. 

const player = {
    name:"minsub",
    points: 10,
    fat: true,
};
console.log(player)
player.fat= false;
console.log(player)

본 코드를 통해 업데이트 되는 것을 확인할 수 있는데, 우리는 const는 값을 변경할 수 없는
것으로 배웠다. 그건 여전히 사실이나, 여기서 하는 건 object 안의 무언가를 수정하는 것이다.
에러는 constant 전체를 하나의 값으로서 업데이트 하려고 할 때 발생한다. 
const player = {
    name:"minsub",
    points: 10,
    fat: true,
};
console.log(player)
player.lastName="potato"
console.log(player)
이런 식으로 property를 가진 데이터를 추가할 수도 있다. 

player.points = player. points + 15; */

/* function이란 무엇일까?
   function은 계속 반복해서 사용할 수 있는 코드 조각이다.
   function은 만드는 규칙이 몇가지 있는데, 우선 ()이 필요하고
   function을 실행하게 될 코드 블록 {}이 필요하다. 
   ex)function sayHello(){
    aksjfhaskjfasf
} 코드 블록 안에 작성하는 것이, sayHello를 실행할 때마다 실행되는 것이다.
  코드 실행은 우리가 앞서 alert(), Array.push()를 했던 것처럼
  sayHello() 이런 식으로 실행한다. 
  그러나, 우리가 여기서 Hello my name is 000과 같이 어떤 정보를 계속 다른 것으로
  보여주고 싶다면 argument를 이용해야한다. argument는 function을 실행하는 동안 어떤 정보를
  function에게 보낼 수 있는 방법이다.

function sayHello(nameOfPerson){
    console.log(nameOfPerson);
}
   이런 식으로 괄호안에 데이터를 받을 변수명을 넣고,
sayHello("minsub");
sayHello("dal");
sayHello("lynn");
데이터를 이렇게 보내면 minsub, dal, lynn이 출력된다.
   그래서 예를 들어 첫번째 argument로 어떤 데이터가 들어오면, 
   nameOfPerson이라는 variable 이름을 쓰게 되는 것이다.
   argument는 하나만 받을 수 있다는 건 아니고 우리는 argument를 더 받을 수 있다.
   
   function sayHello(nameOfPerson, age){
    console.log(nameOfPerson, age);
}

sayHello("minsub", 10);
sayHello("dal", 23);
sayHello("lynn", 21);
   이런 식으로 구성하면 sayHello function은 2개의 argument를 받는 것이 된다.
   첫번째는 string이 되는 것이고, 두번째는 age가 되는 것이다.
   물론, 이 두가지 nameOfPerson과 age는 이 블럭 안에서만 존재하게 된다.
   {} 블록 밖에서는 존재할 수 없다는 것을 명심.

   function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("minsub", 10);
sayHello("dal", 23);
sayHello("lynn", 21);
console.log("lalala")
    이렇게도 구성할 수 있다.

function plus(a, b){
    console.log(a + b);
}

plus(8, 60); 

object와 function을 쓰면, 
const player= {
    name: "minsub",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName+ " nice to meet you");
    }
};
console.log(player.name);
player.sayHello("lynn");
player.sayHello("minsub"); 
이렇게 구성하여, player.sayHello를 만들 수 있고, 
hello minsub nice to meet you와 같이 정보를 보내고 출력할 수 있다.
*/

/* object와 function을 이용하여 계산기 만들기
    const calculator ={
    plus: function(a,b){
        console.log(a + b);
    },
    minus: function(a,b){
        console.log(a - b)
    },
    divide: function(a,b){
        console.log(a/b)
    },
    power: function(a,b){
        console.log(a**b)
    }
};

calculator.plus(1,2)
calculator.minus(3,2)
calculator.minus(4,2)
calculator.power(2,2)
console.log(calculator)     */

/* return

    우리는 단지, 콘솔 창에서 결과를 확인하거나, alert를 통해 경고창을 띄워서
    확인하는 경우도 있지만, 코드 내에서 그 결과를 확인하고 싶을 때도 있다.

    const age = 96;
function calculateKrAge(ageOfForeigner){
   return ageOfForeigner+2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

    return을 쓰면 누군가가 function을 실행할 때, 그 결과 값으로 대체해준다.
    우리는 이 reture을 통해 어떤 작업을 처리하고 그 결과를 return 하기 위해 function을 사용할 수 있다.
    이것이 바로 function이 function의 밖과 소통하는 방법이다.
    어떤 때는 우리가 어느 작업을 결과를 알려주는 function을 원하기도 하고,
    어떤 때는 어느 작업을 하고 결과를 알려주지 않고 조용히 처리하는 것을 원하기도 한다.
    그 기능을 return이 한다. 다시 말해서, return을 하면, 계산을 담당하는 function의 코드는 그 function이
    return하는 값과 같아질 것이다.    
const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner+2;
    return "hello";
}

const krAge = calculateKrAge(age);

console.log(krAge);
    이 function을 실행시키면 ageOfForeigner는 96이 된다.
    그리고  ageOfForeigner+2; 이것은 98이 되고, 그리고 "hello"를 return 하게 된다.
    이 function이 작동을 완료 했을 때, 이 function을 호출한  이 코드는 function의 return값이 된다.
    그 뜻은 krAge는 calculateKrAge의 반환 값이 된다는 것이다.
    우리가 여기서 한 작업은 function에서 console.log를 한 것이 아닌, function의 반환 값과 같은 variable을 console.log 한 것이다.
*/

/* conditionals(조건문)

    conditionals(조건문)dms true인지 false인지 알려주기 때문에 중요하다.
    뭔가를 확인해야 할 때 주로 사용한다. 예를 들어 사용자가 로그인이 되어 있다면, 무언가를 보여준다든지,
    아니면 사용자가 무언가를 할 때 반응하는 것을 만들 때 사용한다.
    
    prompt는 사용자에게 창을 띄울 수 있도록 해준다.
    prompt는 두 개의 argument(인자)를 받는데 하나는 message(문자), 다른 하나는
    defalut라는 것이다. 그런데, prompt는 자바스크립트를 일시적을 정지시키고,
    디자인적으로 바꿀 수 있는 것이 아무것도 없기 때문에 안쓴다.

    paselnt는 문자열을 숫자 데이터 타입으로 바꿔주는 함수이다.
    그러나, "lalala" 이런 것을 숫자로 바꿔주는 것이 아니라,
    "123" 이런 형태를 123의 형태처럼 숫자로 바꿔주는 것임.
    만약 "lalala" 와 같은 문자를 입력했을 경우에는 NaN이라고 알려줌.

    isNaN 함수를 사용하면 이 함수는 boolean으로 결과를 알려준다.

    조건문은 이렇게 작성한다.
    if(condition){
    // condition == true
} else {
    // condition == false
}   
    여기서 조건이 true(참)이면 위 코드가 실행될 것이고,
    조건이 거짓이면 아래 코드가 실행될 것이다.
     if(condition){
    // condition == true
} 
    조건이 참이면 실행할 것이고, 참이 아니라면, 아무것도 실행되지 않을 것이다.
    그런데, 여기서 조건은 무조건 boolean, 즉 true, false로 판단된다.

    예제)
    const age = parseInt (prompt("How old are you?"));


if(isNaN(age)){
    console.log("Please write a number");
} else if(age < 18){
    console.log("you are too young.");
} else{
    console.log("You can drink");
}

    예제2)
    const age = parseInt (prompt("How old are you?"));


if(isNaN(age)){
    console.log("Please write a number");
} else if(age < 18){
    console.log("you are too young.");
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else {
    console.log("you can't drink");
}

    예제3)

    const age = parseInt (prompt("How old are you?"));


if(isNaN(age)){
    console.log("Please write a number");
} else if(age < 18){
    console.log("you are too young.");
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else if(age > 50 && age <= 80){
    console.log("you should exercise");
}
    else를 꼭 사용할 필요는 없음.

    예제4)

    const age = parseInt (prompt("How old are you?"));


if(isNaN(age)){
    console.log("Please write a number");
} else if(age < 18){
    console.log("you are too young.");
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else if(age > 50 && age <= 80){
    console.log("you should exercise");
} else if(age> 80){
    console.log("You can do whatever you want");
}
    예제5)
    그런데 이 경우 음수에 대한 판단은 하지 못함. 
    그래서 or 연산 || 를 통해 음의 숫자에 대한 조건도 검.

    const age = parseInt (prompt("How old are you?"));


if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if(age < 18){
    console.log("you are too young.");
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else if(age > 50 && age <= 80){
    console.log("you should exercise");
} else if(age> 80){
    console.log("You can do whatever you want");
} */

/* JS와 html의 연결

const title = document.getElementById("title");

document 함수 중 getElementById라는 함수는 HTML에서 id를 통해 element를 찾아준다.
위의 코드에서 당연히 title이란 id를 가진 element가 없는 경우에는 아무것도 차지 못할 것이다.
element를 찾고 나면, 그 Html에서 뭐든지 바꿀 수 있다.
예를 들어 element의 innerText를 바꿀 수 있고, id와 className을 가져올 수도 있다.

class도 같은 방식으로 가져온다.
const hellos = document.getElementsByClassName("hello");

그러나, element를 가져오는 가장 좋은 방법은 quarySelector와 querySelectorAll이다.
quarySelector가 무엇을 할까? quarySelector는 element를 css 방식으로 검색할 수 있다.
예를 들어, hello란 class 내부에 있는 h1을 가지고 올 수 있다는 것을 의미한다.

const title= document.querySelector(".hello h1");
이처럼 querySeletor에는 hello가 class name이라는 것과 그 안의 h1을 명시해줘야 한다.
*/

/* Event

    eventListener는 말 그대로 event를 listen하는 것이다.
    하지만, JavaScript에 무슨 event를 listen하고 싶은지 알려줘야 함.
    const title= document.querySelector(".hello:first-child h1");

    function handleTitleClick(){
        console.log("title was clicked!");
    }

    title.addEventListener("click", handleTitleClick);
    
    여기 이 title이란 HTML element가 하나 있다고 가정하고 addEventListner를 호출하고,
    listen 하고 싶은 event 이름을 알려준 후, 그리고 뒤에 event가 발생하면 호출할 fucntion을 전달해주면 된다.

    event listener 예제)

    const h1= document.querySelector(".hello:first-child h1");

    function handleTitleClick(){
    h1.style.color="blue";
}
function handMouseEnter(){
    h1.innerText ="Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText="Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
function handleWindowCopy(){
    alert("copier!")
}
function handleWindowOffline(){
    alert("SOS no WIFI")
}
function handleWindowOnline(){
    alert("ALL GOOD")
}
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

/* class name 변경

    classList.
    classList는 말 그대로 우리가 class들의 목록으로 작업할 수 있게끔 허용한다.
    왜냐하면 className은 그냥 모든 걸 교체해서, 이전의 class들은 상관하지 않는다.
    classList는 이것을 조금 다르게 할 수 있다.
    
    contain 함수는 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해주는 거다.

    그러나, toggle 함수를 이용하면, 매우 편리하다.
    toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서 만약 있다면,
    토글이 clicked를 제거해주고, 만약 h1의 classList에 clicked가 존재하지 않는다면, 토글은 clicked를
    classList에 추가해줄 것이다.
     */

/* Input Values

    const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
    
}

loginButton.addEventListener("click", onLoginBtnClick);
이런 식으로 코드를 작성하면, login-form class의 Input의 value를 입력해서
알아볼 수 있다. */
/*Form submission

    length는 문자열의 길이를 알려줌.

    input의 유효성 검사를 작동시키기 위해서는 input이 form 안에 있어야 된다.
    */
/* Events

    preventDefault는 어떤 event의 기본 행동이든지 발생되지 않도록 막는 역할을 한다.
    그래서 이 함수를 통해서 form을 submit 했을 때, 새로고침되는 것을 막을 수 있다.
    그리고 이건 EventListener 함수의 첫번째 argument 안에 있는 function이다.

    const loginForm = document.querySelector("#login-form");

    function onLoginSubmit(event) {
    tomato.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
    
    밑에 과정을 정리하면, submit event가 발생할 때, JS는 onLoginSubmit function을 호출하고 있고,
    이 때 event object를 argument로 주고 있고, 우리는 preventDefault를 통해 기본 동작이 실행되는 걸 막아주고 있다.

    const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit); */

/* Events part Two

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText= "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit ", onLoginSubmit);

    이렇게 하면, input에 입력하면, submit 후 input창이 없어지고,
    그 입력한 값으로 Hello + "입력한 값"이 h1으로 나타남. */

/*Loading Username

    local storage란? 정보를 저장하고 불러오고 삭제하는 브라우저가 가지고 있는 작은 DB같은 API이다.

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY= "username";

function OnLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginSubmit);
    
} else {
   paintGreetings(savedUsername);
    
}

만약 local storage에 유저 정보가 있으면, 거기서 유저정보를 받아서 인자로 넣어주고,
만약 local storage에 유저 정보가 없으면, 우리는 form의 submit을 기다리고,
form이 submit 되면 우리는 input으로부터 유저정보를 받고, input에서 받은 user를 가진 
paintgreeting을 출력할 것이다.
*/

/* interval

    setInterval는 두개의 argument를 받는다.
    첫번째 argument는 내가 실행하고자 하는 function이고,
    두번째 argument는 호출되는 function 간격을 몇 ms(milliseconds)로 할지 쓰면 된다.
    ex) setInterval(sayHello, 5000); sayHello라는 함수를 5초마다 실행.

    setTimeout은 function을 딱 한번만 호출하는데, 일정 시간이 흐른 뒤에 호출해준다.
    ex) setTimeout(sayHello, 5000);  */

/* Timesout and Dates

    website가 load되자마자 getClock()를 실행하고 또 매초마다 다시 실행되도록 할 수 있다.

    const clock = document.querySelector("h2#clock");

    function getClock() {
        const date = new Date();
        clock.innerText=(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    }

    getClock();
    setInterval(getClock, 1000);
    */

/* Padstart

    padStart()는 string에 쓸 수 있는 function이다.
    ex) "1".padstart(2, "0") 
    이 string의 길이를 2로 만드는데, 만약 그 string의 길이가 2가 아니라면,
    앞쪽에 "0"을 추가하도록 할 수 있다. */

/* Quotes

    Math.random()에 10을 곱하면, 0에서 10 사이의 숫자들을 얻을 수 있다.

    float()는 소수점 반올림, ceil()은 올려주는, floor()은 내려주는.

    const quotes = [
    { 
      quote:  "Victory belongs to the most persevering.",
      author:  "-Napoleon Bonaparte-",
    },
    {
      quote: "Energy and persistence conquer all things.",
      author: "-Benjamin Franklin-",

    },
    {
      quote: "Success isn't permanent, and failure isn't fatal.",
      author: "-Mike Ditka-",
    },
    {
      quote: "Everything comes to him who hustles while he waits.",
      author: "-Thomas A. Edison-",
    },
    {
      quote: "In the field of observation, chance favors only the prepared mind.",
      author: "-Louis Pasteur-",
    },
    {
      quote: "Destiny is no matter of chance. It is a matter of choice. It is not a thing to be waited for, it is a thing to be achieved.",
      author: "-William Jennings Bryan-",
    },
    {
      quote: "All you need in this life is ignorance and confidence; then success is sure.",
      author: "-Mark Twain-",
    },
    {
      quote: "It is no use saying, We are doing our best. You have got to succeed in doing what is necessary.",
      author: "-Sir Winston Churchill-",
    },
    {
      quote: "In youth we learn, in age we understand.",
      author: "-Marie Ebner von Eschenbach-",
    },
    {
      quote: "To be mature means to face, and not evade, every fresh crisis that comes.",
      author: "-Fritz Kunkel-",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; */

/* Background

const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src =`images/${chosenImage}`;

랜덤으로 사진을 불러오는 방식은 quote와 똑같지만, 사진을 html에 추가시키기 위해서는 위와 같은 과정이 요구된다.
또한, 이 img 코드를 직접 body에 추가시키기 위해서는 appendChild를 사용한다.

document.body.appendChild(bgImage); */

/*

/*TO-DO-LIST

리스트를 화면에 추가하는 과정.(but 데이터 저장 x, 새로고침시 초기화)

const toDoForm= document.getElementById("todo-form");
const toDoList= document.getElementById("todo-list");
const toDoInput= document.querySelector("#todo-form input");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText= newTodo; 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

JSON.sringify는 JAVAScript object나 array 또는 어떤 javascript 코드건 간에
그걸 string으로 만들어준다.

forEach는 array의 각 item에 대해 function을 실행하게 해준다.


function sayHello(item){
    console.log("this is the furn of", item);
}
이와 같이 function을 따로 만들 필요 없이 아래의 예시처럼 화살표 함수로 이렇게 구성할 수 있다.
if(savedToDos) {
    const parseToDos = JSON.parse(savedToDos);
    parseToDos.forEach((item) => console.log("This is the turn of ", item)); 
}

Delete 사실상 우리가 array를 삭제하는 것은 직접적으로 없애는 것이 아니라, 빼고 싶은 array를 빼고 
나머지를 남기는 것이다. 그래서 예전 array는 여전히 있고, 지우고 싶은 item을 제외하고 새 array를 만드는 것이다.
이것은 filter 함수를 사용하면 된다. filter는 forEach와 조금 비슷하다.

*/

/* weather

    위치정보 받는 방법.
    function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}
function onGeoError() {
    alert("Can't find you. no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

첫번째 인수는 성공했을 때, 두번째 인수는 실패했을 때 적용할 함수를 적는다.
*/