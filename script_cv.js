

const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});

function changeLanguage() {
    var button = document.querySelector(".languages");
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    
   if (button.textContent === "Español") {
      button.textContent = "English";
      name.textContent = "Surname and Name: Aurelio Cecilia";
      email.textContent = "Email: acecilia@egmail.com";
      city.textContent = "City: Michigan";
      country.textContent = "Country: USA";
      phone.textContent = "Phone: 333-555555";
    } else {
      button.textContent = "Español";
      name.textContent = "Apellido y Nombre: Aurelio Cecilia";
      email.textContent = "Correo Electronico: acecilia@egmail.com";
      city.textContent = "Ciudad: Michigan";
      country.textContent = "Pais: Estados Unidos";
      phone.textContent = "Telefono: 333-555555";
    }
  }
  


