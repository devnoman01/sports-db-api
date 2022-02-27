const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;

    fetch(url)
    .then(resposnse => resposnse.json())
    .then((data) => showPlayerDetails(data.player));
   
}

const showPlayerDetails = (players) => {
    players.forEach(player => {
        const parent = document.getElementById('player-container');
        
        parent.classList.add('px-2');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card border m-3 p-3">
            <div class="pro-pic">
                <img src="${player.strThumb}" class="img-fluid" alt="">
            </div>
            <h3>Name: ${player.strPlayer}</h3>
            <h5>Country: ${player.strNationality}</h5>
            <p>Hehehe</p>
            <div class="allButton">
                <button class="btn btn-danger">Delete</button>
                <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                </div>
            </div>
        `;
        parent.appendChild(div);
    });
}

const details = (info) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
    .then(resposnse => resposnse.json())
    .then(data => setDetails(data.players[0]));
}

const setDetails = (info) => {
    document.getElementById('details-container').innerHTML = `
        <div>
            <h2>${info.strPlayer}</h2>
        </div>
    `;
}