const $arenas = document.querySelector('.arenas');

const player1 = {
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['head'],
    attack: function() {
        alert(this.name + ' Fight...');
    },
    player: 1,
};

const player2 = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['foot'],
    attack: function() {
        alert(this.name + ' Fight...');
    },
    player: 2,
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(hero) {
    const player = createElement('div', 'player' + hero.player);
    const $progressBar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    player.appendChild($progressBar);
    player.appendChild($character);

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    $character.appendChild($img);

    $life.style.width = hero.hp + '%';
    $name.innerText = hero.name;
    $img.src = hero.img;

    return player;

}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

const $randomButton = document.querySelector('.button');
$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);

});

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= 20;
    $playerLife.style.width = player.hp + '%';

    if (player.hp < 0) {
        $arenas.appendChild(playerLose(player.name));
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}