/*const name=document.getElementById('name')
const email=document.getElementById('email')
const Age=document.getElementById('Age')
const dob=document.getElementById('dob')
const gender=document.getElementById('gender')
const form=document.getElementById('form')
const error=document.getElementById('error')

form.addEventListener('submit',(e) => {
    let messages = []
    if (name.value---'')
}*/
/*if( document.myForm.Name.value == "" ) {a
    alert( "Please provide your name!" );
    document.myForm.Name.focus() ;
    return false;
}
return( true );*/
var nameInput = document.getElementById('oky');

document.querySelector('container').addEventListener('submit', function (e) {


    e.preventDefault();

    console.log(nameInput.value);    
});
