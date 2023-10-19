export async function send() {
    let d = document.getElementById("chatbox");
    var i = d.value
    d.value = '';
    displayText("User: " + i);
    await response(i);
}

function response(i) {
    let d = document.getElementById("chatbox");
    let b = document.getElementById("sendButton");
    d.disabled = true;
    
    // Define the URL of the server where your Flask app is running
    const serverUrl = "http://127.0.0.1:5000/question";

    // Create an object with the data you want to send
    const data = new URLSearchParams();
    data.append("string", i);

    // Define the configuration for the POST request
    const requestOptions = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };

    // Send the POST request
    fetch(serverUrl, requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error(`Failed to make the request: ${response.status}`);
            }
        })
        .then((responseText) => {
            // Handle the response here (e.g., printing it to the console)
            
            
            displayText("Onboarding bot: " + responseText);
            d.disabled = false;
            
        })
        .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
            d.disabled = false;
        
        });
}

export function displayText(i){
    let d = document.getElementById("chat");
    d.innerHTML += msg(i);
}

function msg(i){
    return (`<div style="border: 1px solid black width: 70px overflow: hidden white-space: nowrap">${i}</div>`);
}
