const container   = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn    =  document.getElementById("login"); 

// end odoo merge uusgene 
const devLoginn = document.getElementById("login"); 
// ariuka shuu odoo ene deer conflit garhgui bol shantarlaa


registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add("active");
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove("active");
});

// ene shine PR hiiilt
// za odo yg 


