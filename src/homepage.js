export function homePage(content){
    // content.innerHTML="";
const intro=document.createElement("div");
intro.classList.add("intro");
const name=document.createElement("div");
name.classList.add("name", "heading");
name.textContent="Cozy-Cafe";

const tagline=document.createElement("div");
tagline.classList.add("tagline");
tagline.textContent="Your Home Away From Home ";

const time=document.createElement("ul");

const opening1=document.createElement("li");

opening1.textContent="Weekdays 11:00 to 20:00";

const opening2=document.createElement("li");

opening2.textContent="Weekdays 12:00 to 20:00";


const location=document.createElement("div");
location.classList.add("location");
location.textContent="23 Forest Drive, Forestville, Maine";

content.appendChild(intro);
intro.appendChild(name);
content.appendChild(tagline);
content.appendChild(time);
time.appendChild(opening1);
time.appendChild(opening2);
content.appendChild(location);
}  