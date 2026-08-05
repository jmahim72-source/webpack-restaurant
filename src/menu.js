export function menu(content){

    // content.innerHTML="";
    const menu=document.createElement("div");
menu.classList.add("menu");

const menuHeading=document.createElement("div");
menuHeading.classList.add("menu","heading");
menuHeading.textContent=("Menu")


const beverages = document.createElement("div");
const beverageHeading=document.createElement("div")
beverageHeading.classList.add("beverage","heading")
beverages.textContent=("Beverages")



const beverage1 = document.createElement("p");
beverage1.textContent=("cold coffee          80 ruppees");
beverage1.classList.add("items")

const beverage2 = document.createElement("p");
beverage2.textContent=(" coffee          50 ruppees");
beverage2.classList.add("beverage","heading")


const fastFood = document.createElement("div");
fastFood.textContent=("Beverages")
beverageHeading.classList.add("items")

const fastFood1 = document.createElement("p");
fastFood1.textContent=("Masala Burger        80 ruppees");
fastFood1.classList.add("items")

const fastFood2 = document.createElement("p");
fastFood2.textContent=(" margiritta pizza          50 ruppees");
fastFood2.classList.add("items")


content.appendChild(menu);

menu.append(menuHeading,beverages,fastFood);

beverages.append(beverage1,beverage2);
fastFood.append(fastFood1,fastFood2);

}
