import "./styles.css"
import { homePage } from "./homepage.js"
import { menu } from "./menu.js"
import { contacts } from "./conatacts.js"

const menuBtn=document.querySelector("#Menu")
const homeBtn=document.querySelector("#Home")
const contactBtn=document.querySelector("#contact")
const content=document.querySelector("#content")

homePage(content);

menuBtn.addEventListener('click',(e)=>{
    content.innerHTML="";
    menu(content);
});
homeBtn.addEventListener("click",(e)=>{
     content.innerHTML="";
    homePage(content);
})
contactBtn.addEventListener("click",(e)=>{
     content.innerHTML="";
    contacts(content);
});


// let abc=document.getElementById(content);
// abc.innerHTML=`<p><h1>Cozy-Cafe</h1></p>
//         <p><h3>Your Home Away From Home </h3></p>
//         <p>A newly opened cafe in tonk near nehru park givig u a seamless home expierince 
//             so visit now!
//         </p>`




// const content=document.querySelector("#content")
// const intro=document.createElement("div");
// intro.classList.add("intro");
// const name=document.createElement("div");
// name.classList.add("name", "heading");
// name.textContent="Cozy-Cafe";

// const tagline=document.createElement("div");
// tagline.classList.add("tagline");
// tagline.textContent="Your Home Away From Home ";

// const time=document.createElement("ul");

// const opening1=document.createElement("li");

// opening1.textContent="Weekdays 11:00 to 20:00";

// const opening2=document.createElement("li");

// opening2.textContent="Weekdays 12:00 to 20:00";


// const location=document.createElement("div");
// location.classList.add("location");
// location.textContent="23 Forest Drive, Forestville, Maine";

// content.appendChild(intro);
// intro.appendChild(name);
// intro.appendChild(tagline);
// content.appendChild(time);
// time.appendChild(opening1);
// time.appendChild(opening2);
// content.appendChild(location);








// //menu

// const menu=document.createElement("div");
// menu.classList.add("menu");

// const menuHeading=document.createElement("div");
// menuHeading.classList.add("menu","heading");
// menuHeading.textContent=("Menu")


// const beverages = document.createElement("div");
// beverages.textContent=("Beverages")

// const beverage1 = document.createElement("p");
// beverage1.textContent=("cold coffee          80 ruppees");

// const beverage2 = document.createElement("p");
// beverage2.textContent=(" coffee          50 ruppees");


// const fastFood = document.createElement("div");
// fastFood.textContent=("Beverages")

// const fastFood1 = document.createElement("p");
// fastFood1.textContent=("Masala Burger        80 ruppees");

// const fastFood2 = document.createElement("p");
// fastFood2.textContent=(" margiritta pizza          50 ruppees");


// content.appendChild(menu);

// menu.append(menuHeading,beverages,fastFood);

// beverages.append(beverage1,beverage2);
// fastFood.append(fastFood1,fastFood2);


// //CONTACT



// const Contacts = document.createElement("div");
// Contacts.classList.add("contacts");


// const contactsHeading=document.createElement("div");

// contactsHeading.textContent=("Contacts");


// const contact1 = document.createElement("p");
// contact1.textContent=("Manager    82739879837");


// const contact2 = document.createElement("p");
// contact2.textContent=("chef    37687268726");


// content.append(contactsHeading,contact1,contact2);