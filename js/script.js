const fullname = document.getElementById('full_name')
const email = document.getElementById('email')
const workdetails = document.getElementById('workdetails')
const subject = document.getElementById('subject')
const form = document.getElementById('form')
const error = document.getElementById('error')
const active = [fullname,email,subject,workdetails]

form.addEventListener('submit', (e) => { 
    let messages = []
    if(fullname.value === '' || fullname.value == null){
         messages.push("Fullname field is required!!!!")
         red(fullname);
     }
     else if(fullname.value.length > 0){
         green(fullname);
     }
 
     
 
     if(email.value === '' || email.value == null){
         messages.push("email field is required!!!!")
         red(email);
     }
     else if(!email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
         messages.push("please enter valid email address!!!!")
         red(email);
     }
     else if(email.value.length > 0){
         green(email);
     }
 
     
     
     if(subject.value === '' || subject.value == null){
             messages.push("subject field is required!!!!")
             red(subject);
     }
     else if(subject.value.length > 0){
         green(subject);
     }
 
 
     if(workdetails.value === '' || workdetails.value == null){
         messages.push("workdetails field is required ")
         red(workdetails);
     }
     else if(workdetails.value.length <= 50){
         messages.push("workdetails must be atleast 50 words!!!!")
         red(workdetails);
     }
     else if(workdetails.value.length >= 100){
         messages.push("please enter work details less than 100 words!!!!")
         red(workdetails);
     }
     else if(workdetails.value.length > 0){
         green(workdetails);
     }
 
      
     if(messages.length > 0){
         e.preventDefault()
         error.innerHTML = messages.join('<br>,')
         error.style.display = "block";
         
     }
})

function red(color){
    color.style.backgroundColor = "rgba(251, 196, 196, 0.65)";
    color.style.border = "1px solid red";
}

function green(color){
    color.style.backgroundColor = "";
    color.style.border = "1px solid green";
}


/*function nored(){
    active.forEach((value) => {
        value.style.backgroundColor = ""
        value.style.border = "";
    })
}*/

