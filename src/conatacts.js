export function contacts(content){
    
// content.innerHTML="";

const Contacts = document.createElement("div");
Contacts.classList.add("contacts");


const contactsHeading=document.createElement("div");

contactsHeading.textContent=("Contacts");


const contact1 = document.createElement("p");
contact1.textContent=("Manager    82739879837");


const contact2 = document.createElement("p");
contact2.textContent=("chef    37687268726");

Contacts.append(contactsHeading,contact1,contact2);
content.append(Contacts);
}