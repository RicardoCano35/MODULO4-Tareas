const generarBoton = document.getElementById('generarboton');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const userGender = document.getElementById('userGender');
const userImage = document.getElementById('userImage');

generarBoton.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            
            userImage.src = user.picture.large;    
            userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
            userEmail.textContent = user.email;
            userPhone.textContent = user.phone;
            userGender.textContent = user.gender;
        })
        
});