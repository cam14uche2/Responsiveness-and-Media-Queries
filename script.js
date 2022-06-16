const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lasttname'].value;
    const email = form['email'].value;
    const password = form['password'].value;


    if(firstName === ''){
        addErrorTo('firstname', 'First Name is required');
        
    }
    if(lastName === ''){
        addErrorTo('lastname', 'Last Name is required');
    }

    if(email === ''){
        addErrorTo('email', 'Email is required');
        
    }
    if(isValid(email) ){
        addErrorTo('email', 'Email is not valid');
        
    }
    if(password === ''){
        addErrorTo('password', 'Password Name is required');
        
    }

});


function addErrorTo(field, message ){
    const small = form ['firstname']. parentNode.querySelector('small');
        small.innerText = message;
        small.style.opacity = '1';
    
}

function isValid(email) {
    
}