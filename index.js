setInterval(updateStatus,1000)

function updateStatus() {
fetch('https://hosting-miniclient.wireway.ch/status')
    .then(response => response.json())
    .then(data => {
        document.getElementById('onlinePlayers').innerText = data.onlinePlayers + ' Online';
    });
}