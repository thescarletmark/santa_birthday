window.addEventListener('load', e => {
    const h = window.innerHeight;
    document.getElementById('countDownDate').style.height = h + 'px';


    // Set the date we're counting down to
    var countDownDate = new Date("Mar 5, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="birthday"
    document.getElementById("birthday").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("birthday").innerHTML = "<p>GIOITE, È IL COMPLEANNO DI MARCO</p> <img src=\"https://media-exp1.licdn.com/dms/image/C4D03AQF-hyVvexXo7Q/profile-displayphoto-shrink_200_200/0/1517249369510?e=1648080000&v=beta&t=VwuAPd9G59b6Eu7kDMpHNOw4qtV_ZNisSJOlFd75cas\" alt=\"Santa\">"
        
    }
    }, 1000);
})

