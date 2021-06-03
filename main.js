const $player1 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['head'],
    attack: () => {
        alert(name + 'Fight...');
    },
};
const $player2 = {
    name: 'SCORPION',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['foot'],
    attack: () => {
        alert(name + 'Fight...');
    },
};

function createPlayer() {
    const $divPlayer1 = document.createElement('div');
    $divPlayer1.classList.add('player1');

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressBar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.classList.add('name');

    const $img = document.createElement('div');
    $img.classList.add('img');


    $divPlayer1.appendChild($progressBar);
    $divPlayer1.appendChild($character);

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    $character.appendChild($img);
}