function calculateCompatibility() {
    var name1 = document.getElementById("name1").value.trim().toLowerCase();
    var name2 = document.getElementById("name2").value.trim().toLowerCase();
    var compatibility = 0;
    
    // Remove existing GIFs if present
    var existingGifs = document.getElementsByClassName("gif-img");
    while (existingGifs.length > 0) {
        existingGifs[0].parentNode.removeChild(existingGifs[0]);
    }
    
    if ((name1 === "ruby" && name2 === "eamonn") || (name1 === "eamonn" && name2 === "ruby")) {
        compatibility = 110;
        // Display GIFs at the top and bottom of the body
        var gifUrl = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXdycDZzZzI3bGxmNTVnc3dyaWhqOXprN2pvcHJ4cTN5OHFpd21jdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif"
        var bodyRect = document.body.getBoundingClientRect();
        var centerX = bodyRect.left + bodyRect.width / 2.3;
        var topY = bodyRect.top;
        var bottomY = bodyRect.bottom;
        var margin = 50; // Adjust the margin between GIFs
        
        // Position GIFs at the top of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, topY + margin);
            document.body.appendChild(gifImg);
        }
        
        // Position GIFs at the bottom of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, bottomY - margin - 200); // 100 is the height of the GIF
            document.body.appendChild(gifImg);
        }
        
    } else if ((name1 === "ruby" && name2 === "jim") || (name1 === "jim" && name2 === "ruby")) {
        compatibility = -1000; // Special case for Ruby and Jim
        // Display GIFs at the top and bottom of the body
        var gifUrl = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2JzMWc2bmt2MDF1MWR1bW01NDhsMm5wOTNqaGhjNG1nNGM0dzN0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FuhRncrgUShaOz37IW/giphy.gif";
        var bodyRect = document.body.getBoundingClientRect();
        var centerX = bodyRect.left + bodyRect.width / 2.3;
        var topY = bodyRect.top;
        var bottomY = bodyRect.bottom;
        var margin = 50; // Adjust the margin between GIFs
        
        // Position GIFs at the top of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, topY + margin);
            document.body.appendChild(gifImg);
        }
        
        // Position GIFs at the bottom of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, bottomY - margin - 200); // 100 is the height of the GIF
            document.body.appendChild(gifImg);
        }
    } else if ((name1 === "eamonn" && name2 === "bags") || (name1 === "bags" && name2 === "eamonn")) {
        compatibility = 99; // Special case for Eamonn
        // Display GIFs at the top and bottom of the body
        var gifUrl = "https://media2.giphy.com/media/vJA5tI5SPHERO/giphy.gif?cid=ecf05e47ixf6h99opm27cd8ogtd47eqeddlvyl0tuqvqvr5d&ep=v1_gifs_related&rid=giphy.gif&ct=g";
        var bodyRect = document.body.getBoundingClientRect();
        var centerX = bodyRect.left + bodyRect.width / 2.3;
        var topY = bodyRect.top;
        var bottomY = bodyRect.bottom;
        var margin = 50; // Adjust the margin between GIFs
        
        // Position GIFs at the top of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, topY + margin);
            document.body.appendChild(gifImg);
        }
        
        // Position GIFs at the bottom of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, bottomY - margin - 200); // 100 is the height of the GIF
            document.body.appendChild(gifImg);
        }

    } else if (name1 === "ruby" || name2 === "ruby" || name1 === "eamonn" || name2 === "eamonn") {
        compatibility = 0;
        // Display GIFs at the top and bottom of the body
        var gifUrl = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2F4eHVzcmE0YnVtMWNxNzN3ZTh1Y2t5ZWc2eWJ3c3g3MWplNWttYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JtLrtaN4VPoKXJRKGB/giphy.gif";
        var bodyRect = document.body.getBoundingClientRect();
        var centerX = bodyRect.left + bodyRect.width / 2.3;
        var topY = bodyRect.top;
        var bottomY = bodyRect.bottom;
        var margin = 50; // Adjust the margin between GIFs
        
        // Position GIFs at the top of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, topY + margin);
            document.body.appendChild(gifImg);
        }
        
        // Position GIFs at the bottom of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, bottomY - margin - 200); // 100 is the height of the GIF
            document.body.appendChild(gifImg);
        }
        
    } else {
        // Display GIFs at the top and bottom of the body
        var gifUrl = "https://media2.giphy.com/media/l4FGt5bv9DxXtBbZ6/giphy.gif?cid=ecf05e47eq0767a0kw2urxu1qqt9d8ngjorr9shog9peh8oi&ep=v1_gifs_related&rid=giphy.gif&ct=g";
        var bodyRect = document.body.getBoundingClientRect();
        var centerX = bodyRect.left + bodyRect.width / 2.3;
        var topY = bodyRect.top + 40;
        var bottomY = bodyRect.bottom + 40;
        var margin = 50; // Adjust the margin between GIFs
        
        // Position GIFs at the top of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, topY + margin);
            document.body.appendChild(gifImg);
        }
        
        // Position GIFs at the bottom of the body
        for (var i = 0; i < 3; i++) {
            var x = centerX + (i - 1) * 240; // Adjust spacing between GIFs
            var gifImg = createGifElement(gifUrl, x, bottomY - margin - 200); // 100 is the height of the GIF
            document.body.appendChild(gifImg);
        }

        // Display message
        document.getElementById("result").innerHTML = "Who cares <3";
        return;
    }
    
    // Remove existing result message if present
    document.getElementById("result").innerHTML = "";
    
    document.getElementById("result").innerHTML = "Compatibility: " + compatibility + "%";
}

// Function to create a GIF element with specified URL, position, and size
function createGifElement(url, x, y) {
    var gifImg = document.createElement("img");
    gifImg.className = "gif-img";
    gifImg.src = url;
    gifImg.style.width = "200px"; // Adjust width if needed
    gifImg.style.height = "auto"; // Maintain aspect ratio
    gifImg.style.position = "absolute";
    gifImg.style.top = y + "px";
    gifImg.style.left = x + "px";
    return gifImg;
}
