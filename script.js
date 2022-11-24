// const dropdownOne = document.getElementById('dropdown-one').addEventListener('click',function(){
//   console.log("you press the buton");
// const mainBody = document.getElementById('main-body');
// mainBody.style.display = "none";
// const secondPage = document.getElementById('second-page');
// secondPage.style.display = "block";
// })
const loginBttn = document.getElementById("login");
loginBttn.addEventListener("click", function(){

  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const mainArea = document.getElementById("main-area");
  mainArea.style.display = "block";
})
document.getElementById("dropdown-one").addEventListener("click",function(){
  const mainBody = document.getElementById("main-body");
  mainBody.style.display = "none";
  const secondPage = document.getElementById("second-page");
  secondPage.style.display = "block";
})