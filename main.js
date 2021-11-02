const btn = document.querySelector(`.btn`);
const firstText = document.querySelector(`.first-text`);

btn.addEventListener(`click`, () => {
    console.log(`wuf`);
    firstText.innerHTML = ``;
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

    for(let i = 0; i < box; i++) {
        
    }
});