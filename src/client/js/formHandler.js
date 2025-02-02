import { checkForUrl } from './nameChecker';

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
const serverURL = 'http://localhost:8000/api'; // Ensure this is http if your server is not configured for https

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Check if the URL is valid
    const check = checkForUrl(formText);

    // If the URL is valid, send it to the server using the serverURL constant above
    if (check) {
        console.log('Sending request to server:', serverURL);
        fetch(serverURL, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: formText }),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(function(res) {
            console.log('Response from server:', res);
            document.getElementById('results').innerHTML = `Polarity: ${res.polarity}, Subjectivity: ${res.subjectivity}, Text: ${res.text}`;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch data from the server. Please try again later.');
        });
    } else {
        // If the URL is not valid, alert the user
        alert('Please enter a valid URL');
    }
}

// Export the handleSubmit function
export { handleSubmit };