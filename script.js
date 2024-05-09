function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("name").value,
        subject : document.getElementById("name").value,
        message : document.getElementById("name").value,
    }

    emailjs.send("service_0hu9ma2","template_1e1n4fk",parms).then(alert("Email Sent!"))
}
