// Select the '.change_colour' div
document.querySelector(".change_colour").addEventListener("click", function() {
    // Generate a random color
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the body's background color
    document.body.style.backgroundColor = randomColor;
    document.querySelector(".colur_code").innerText = "colour code :" + randomColor;
});
