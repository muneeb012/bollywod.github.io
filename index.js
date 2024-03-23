let resultText = ''; // Variable to store the result text

function result() {
    let input = document.getElementById("input").value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    const arr = ["Qari ke Sath", "Wahab ke Sath", "Hussnain ke Sath", "Abdurehman ke Sath", "Hashir ke Sath", "Ahsan ke Sath", "Zeeshan ke Sath", "Mubeen ke Sath"];
    
    // Check if input contains "javeria", "tahzeeb", and "teacher" in any order
    const containsJaveria = input.includes("javeria");
    const containsTahzeeb = input.includes("tahzeeb");
    const containsTeacher = input.includes("teacher");

    if (containsJaveria && containsTahzeeb && containsTeacher) {
        alert("Error: Javeria Tahzeeb teacher detected in input.");
        return;
    }

    let index = Math.floor(Math.random() * arr.length);
    if (input.trim() !== "") {
        resultText = "Result: " + input + " " + arr[index];
        document.getElementById("resul").innerHTML = resultText;
    } else {
        alert("Error: Empty input.");
    }
}

function shareResult() {
    if (resultText !== '') {
        function shareTextToWhatsApp(text) {
            // Encode the text
            const encodedText = encodeURIComponent(text);
        
            // Construct the WhatsApp share URL
            const whatsappUrl = `https://wa.me/?text=${encodedText}`;
        
            // Open the WhatsApp share URL in a new tab
            window.open(whatsappUrl, '_blank');
        }
        shareTextToWhatsApp(resultText);
    } else {
        alert("Error: No result to share.");
    }
}

function getResult() {
    result(); // Call the result function to generate the result
}