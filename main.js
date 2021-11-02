const btn = document.querySelector(`.btn`);
const mainContent = document.querySelector(`.main-content`);

btn.addEventListener(`click`, () => {
    console.log(`wuf`);
    mainContent.innerHTML = ``;
    const play = document.getElementById(`difficulty`).value;
    console.log(play);


    let box = 1;
    let boxPerSide = 1;


    switch (play) {

        case `1`:
            box = 100;
            boxPerSide = 10;
            break;

        case `2`:
            box = 81;
            boxPerSide = 9;
            break;

        case `3`:
            box = 49;
            boxPerSide = 7;
            break;
    }

    console.log(box);
    console.log(boxPerSide);

    // BISOGNA CREARE IL CONTAINER ESTERNO

    const container = document.createElement(`div`);
    container.classList.add(`grid`);

    mainContent.append(container);

    for(let i = 1; i <= box; i++) {

        const number = i;
        console.log(number);

        const nodo = document.createElement(`div`);
        nodo.classList.add(`box`);
        nodo.style.width = `calc(100% / ${boxPerSide})`;
        nodo.style.height = `calc(100% / ${boxPerSide})`;

        const span = document.createElement(`span`);
        span.append(number);
        nodo.append(span);

        container.append(nodo);

        nodo.addEventListener(`click`, function() {
            this.classList.add(`click`);
        });
    }
});
