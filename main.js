const $player1 = {
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['head'],
    attack: function() {
        alert(this.name + ' Fight...');
    },
};


const $player2 = {
    name: 'SCORPION',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['foot'],
    attack: function() {
        alert(this.name + ' Fight...');
    },
};

function createPlayer(player, hero) {
    const $arenas = document.querySelector('.arenas');

    const $divPlayer1 = document.createElement('div');
    $divPlayer1.classList.add(player);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.classList.add('name');

    const $img = document.createElement('img');
    $img.classList.add('img');

    $arenas.appendChild($divPlayer1);

    $divPlayer1.appendChild($progressBar);
    $divPlayer1.appendChild($character);

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    $character.appendChild($img);

    $life.style.width = hero.hp + '%';
    $name.innerText = hero['name'];
    $img.src = hero.img;
}


createPlayer('player1', $player1);
createPlayer('player2', $player2);