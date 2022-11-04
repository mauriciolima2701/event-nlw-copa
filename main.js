

function createGame(player1, hour, player2) {
    return`
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandera ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandera ${player2}" />
    </li>
    `
}

let delay = -0.7

function createCard(date, day, games) {
    delay += 0.7;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
        </div>
    `
}

const calendarCopa = document.querySelector('#cards')

calendarCopa.innerHTML = 

    createCard('20/11', 'domingo',
        createGame('qatar', '13:00', 'equador')
    )

    +

    createCard('21/11', 'segunda',
        createGame('england', '10:00', 'iran') +
        createGame('senegal', '13:00', 'holanda') +
        createGame('eua', '16:00', 'gales')
    )

    +

    createCard('22/11', 'terça',
        createGame('argentina', '07:00', 'saudi-arabia') +
        createGame('dinamarca', '10:00', 'tunisia') +
        createGame('mexico', '13:00', 'polonia') +
        createGame('france', '16:00', 'australia') 
    )

    +

    createCard('23/11', 'quarta',
        createGame('marrocos', '07:00', 'croacia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa-rica') +
        createGame('belgium', '16:00', 'canada')
    )

    +

    createCard('24/11', 'quinta', 
        createGame('switzerland', '07:00', 'cameroon') +
        createGame('southkorea', '10:00', 'uruguay') +
        createGame('portugal', '13:00', 'gana') +
        createGame('brazil', '16:00', 'serbia')
    )

    +

    createCard('25/11', 'sexta', 
        createGame('gales', '07:00', 'iran') +
        createGame('qatar', '10:00', 'senegal') +
        createGame('holanda', '13:00', 'equador') +
        createGame('england', '16:00', 'eua')
    )

    +

    createCard('26/11', 'sabado',
        createGame('tunisia', '07:00', 'australia') +
        createGame('polonia', '10:00', 'saudi-arabia') +
        createGame('france', '13:00', 'dinamarca') +
        createGame('argentina', '16:00', 'mexico') 
    )

    +

    createCard('27/11', 'domingo',
        createGame('japan', '07:00', 'costa-rica') +
        createGame('belgium', '10:00', 'marrocos') +
        createGame('croacia', '13:00', 'canada') +
        createGame('germany', '16:00', 'spain')
    )

    +

    createCard('28/11', 'segunda', 
        createGame('cameroon', '07:00', 'serbia') + 
        createGame('southkorea', '10:00', 'gana') + 
        createGame('brazil', '13:00', 'switzerland') + 
        createGame('portugal', '16:00', 'uruguay')
    )

    +

    createCard('29/11', 'terça', 
        createGame('senegal', '12:00', 'equador') +
        createGame('holanda', '12:00', 'qatar') +
        createGame('iran', '16:00', 'eua') +
        createGame('england', '16:00', 'gales')
    )

    +

    createCard('30/11', 'quarta',
        createGame('france', '12:00', 'tunisia') +
        createGame('dinamarca', '12:00', 'australia') +
        createGame('saudi-arabia', '16:00', 'mexico') +
        createGame('argentina', '16:00', 'polonia') 
    )

    +

    createCard('01/12', 'quinta',
        createGame('belgium', '12:00', 'croacia') +
        createGame('canada', '12:00', 'marrocos') +
        createGame('spain', '16:00', 'japan') +
        createGame('costa-rica', '16:00', 'germany')
    )

    +

    createCard('02/12', 'sexta', 
        createGame('portugal', '12:00', 'southkorea') +
        createGame('uruguay', '12:00', 'gana') +
        createGame('switzerland', '16:00', 'serbia') +
        createGame('brazil', '16:00', 'cameroon')
    )

   
        

   