// get the date from the input field
    var input = document.getElementById("birthday").value;
    var date = new Date(input).getTime();



// start the countdown

setInterval("start()", 10000)

function start() {
    var now = new Date().getTime() 
    var distance = date - now 

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
 
    var seconds = Math.floor((distance % (1000 * 60)) / (1000)); 
 
 
    document.getElementById('days').innerText = days 
 
    document.getElementById('hours').innerText = hours 

    document.getElementById('secs').innerText = seconds 


    // Set the date we're counting down to

    // Update the count down every 1 second

        // Get today's date and time

        // Find the distance between now and the count down date

        // Time calculations for days, hours, minutes and seconds

        // Output the result in an element with id="demo"

        // If the count down is over, write some text 
        
}

