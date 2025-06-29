let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navber')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: Infinity,
});


// contact

// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");

// function sendEmail() {

//     const bodyMessage = `Full Name :${fullName.value}<br> Email :${email.value}<br> Phone Number :${phone.value}<br> Message :${message.value}<br>`;

//     Email.send({

//         SecureToken : "3666fde9-d849-402a-b1ca-d0d30eaeeb3c",
        
//         To: 'kameshwaransasi@gmail.com',
//         From: "kameshwaransasi@gmail.com",
//         Subject: subject.value,
//         Body: bodyMessage
//     }).then(
//         message => {
//             if (message == "OK") {
//                 Swal.fire({
//                     title: "Sucess!",
//                     text: "Message sent successfully!",
//                     icon: "success"
//                 });
//             }
//         }
//     );
// }


// function checkInputs() {
//     const items = document.querySelectorAll(".item");

//     for (const item of items) {
//         if (item.value == "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         if(items[1].value != ""){
//             checkEmail();
//         }
//         items[1].addEventListener("keyup", ()=>{
//              checkEmail();
//         });

//         item.addEventListener("keyup", () => {
//             if (item.value != "") {
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }

//             else {

//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

// function checkEmail() {
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\,[a-z]{2,3})?$/;

// const errorTxtEmail=document.querySelector(".error-txt.email")

//  if (!email.value.match(emailRegex)){
//     email.classList.add("error");
//     email. parentElement. classList.add("error");

//     if(email.value != ""){
//         errorTxtEmail.innerText ="Enter the valid email"
//     }
//     else{
//         errorTxtEmail.innerText ="Email Address can't be blank"

//     }
//  }
//  else{

//     email.classList.remove("error");
//     email. parentElement. classList.remove("error");
//  }

// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if(!fullName.classList.contains("error") && !email.classList.contains("error") &&
//          !phone.classList.contains("error") &&  !subject.classList.contains("error") && 
//            !message.classList.contains("error") ){
//             sendEmail();
//             form.reset();
//             return false;
//            }


    

// })