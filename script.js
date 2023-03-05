
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //대문자로 쓰는 이유? -> 일반적으로 string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username";

//function이 하나의 argument를  받도록 하고 그걸 js에 넘김
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; //매번 login.value를 적는대신에 변수를 생성
    localStorage.setItem(USERNAME_KEY, loginInput.value) ;
    paintGreetings();
}

function paintGreetings() {
    const username  = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; //username은 argument에서 가져옴
    greeting.classList.remove(HIDDEN_CLASSNAME);

}





 //function의 이름만 적어주고 지정한 이벤트가 발생했을 때만 브라우저가 해당 function을 실행하게
//모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보

const savedUsername = localStorage.getItem(USERNAME_KEY);
//username이 localstorage에 없다면 null값을 반환할 거임
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);//user정보가 없다면 form의 hidden기능을 remove하여 입력할 수 있게 해줌
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings();
}


//username의 유효성 검사 
// 1. empty여서는 안됨 2. 너무 길어도 안됨


// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Vanilla Challenge</title>
//     <meta charset="UTF-8" />
//     <link rel="stylesheet" href="style.css" />
//   </head>

//   <body>
//     <h1>Random Number Game</h1>
//     <h2>Generate a number between 0 and <input type="number" /></h2>

//     <form>
//       <h3>
//         Guess the number : <input type="number" />
//         <input type="submit" value="play!" />
//       </h3>
//     </form>

//     <h3 class="hidden">You chose:${}, the machine chose:${}</h3>
//     <script src="src/index.js"></script>
//   </body>
// </html>