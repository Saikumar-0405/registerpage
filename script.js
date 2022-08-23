const form = document.getElementById('form')

const uname = document.getElementById('uname')

const email = document.getElementById('email')

const password = document.getElementById('password')

const cpassword = document.getElementById('cpassword')

const tandc = document.getElementById('tc')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate()
})

function validate(){
    let nameValue=uname.value.trim()
    let emailValue=email.value.trim()
    let passwordValue=password.value.trim()
    let cpasswordValue=cpassword.value.trim()

    if(nameValue==""){
        setError(uname,'user name can not be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 letters')
    }
    else{
        setSuccess(uname)
    }


    if(emailValue==""){
        setError(email,'email can not be empty')
    }
    else if(!emailCheck(emailValue)){
        setError(email,'enter valid email id')
    }
    else{
        setSuccess(email)
    }


    if(passwordValue==""){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'password should be minimum 8 letters')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordValue==""){
        setError(cpassword,'cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'password not matched')
    }
    else{
        setSuccess(cpassword)
    }

    if(!tandc.checked){
        setError(tc,'click on agree terms and conditions')
    }
    else{
        setSuccess(tc)
    }

    function setError(input,message){
        let parent= input.parentElement;
        let small=parent.querySelector('small');
        small.innertText=message;
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccess(input){
        let parent=input.parentElement;
        parent.classList.add('success');
        parent.classList.remove('error')
    }

    function emailCheck(input){
        let emailReg = /^[a-zA-Z0-9._]+\.[a-z]{2,4}$/;
        let valid=emailReg.test(input)
        return valid
    } 
}   