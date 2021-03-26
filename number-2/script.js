// Image
let pic = document.createElement("img");
pic.src = "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/4/49788/3.jpg"
pic.classList.add("image");

document.getElementById("card").appendChild(pic);

// Dark Bar
let bar = document.createElement("div");
bar.classList.add("bar");

document.getElementById("card").appendChild(bar);

// Title
let title = document.createElement("H2");
let words = document.createTextNode("Naked Tiger Hostel");
title.classList.add("title");

title.appendChild(words);
bar.appendChild(title);

// Button
let button = document.createElement("button");
let buttonText = document.createTextNode("Book Now");

button.addEventListener('click', function() {
    window.location = 'https://www.hostelworld.com/hosteldetails.php/Naked-Tiger-Hostel/San-Juan-Del-Sur/49788'
}, false)

button.classList.add("button");

button.appendChild(buttonText)
bar.appendChild(button);



