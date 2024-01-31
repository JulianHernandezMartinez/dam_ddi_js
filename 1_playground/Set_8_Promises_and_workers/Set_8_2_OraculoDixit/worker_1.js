// Inside worker.js

// Listen for messages from the main script
self.onmessage = function(event) {
    console.log('Received message in the worker:', event.data);

    // Make an HTTP POST request using Fetch API
    fetch('http://localhost:3000/personas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: 'Oraculo',
            localidad: 'Almeria',
            codigo: '04001',
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('POST request response in the worker:', data);
        
        // Send a response back to the main script
        self.postMessage('POST request completed in the worker.');
    })
    .catch(error => {
        console.error('Error in POST request in the worker:', error.message);
        
        // Send an error response back to the main script
        self.postMessage('Error occurred in the worker: ' + error.message);
    });
};
