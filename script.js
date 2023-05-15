// Darck mode

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // outra forma: 
    //if ( html.classList.contains('darck')) {
        //html.classList.remove('darck')
    //} else {
            //html.classList.add('darck')
        //}


    // Transição da foto/avatar darck mode 
        
    const img = document.querySelector(".avatar img")
    if ( html.classList.contains("light")){
        img.setAttribute("src", "./img-bg/Avatar-darck.png")
    } else {
        img.setAttribute("src", "./img-bg/Avatar-light.png")
    }
}

// Alert como comunicado aviso sobre mudanças

function unavailable() {
    alert('Desculpe! Área em manutenção.')
}