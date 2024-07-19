function sendProductInfo() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const workshop = document.getElementById('workshop').value;


    const message = `
    ||| الاسم الكامل : ${fullName}   |||
    ||| رقم الهاتف  : ${phone}      |||
    ||| الجنس       : ${gender}     |||
    ||| الورشة      : ${workshop}   |||
    `
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '212647262361'; // Your WhatsApp number with country code

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Add event listener to the send button
document.getElementById('send-whatsapp').addEventListener('click', sendProductInfo);
