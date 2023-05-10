function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('darck')

    // outra forma: 
    //if ( html.classList.contains('darck')) {
        //html.classList.remove('darck')
    //} else {
            //html.classList.add('darck')
        //}
        
    const img = document.querySelector(".avatar img")
    if ( html.classList.contains("darck")){
        img.setAttribute("src", "./img-bg/Avatar-darck.png")
    } else {
        img.setAttribute("src", "./img-bg/Avatar-light.png")
    }
}