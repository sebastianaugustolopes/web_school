document.querySelector(".dropdown-button").addEventListener("click", function(){
    let dropdownContent = document.querySelector(".dropdown-content");
    let rotateicon = document.querySelector('.fa-chevron-down')

    if(dropdownContent.classList.contains('dropdown-show')){
        dropdownContent.classList.remove('dropdown-show');
        rotateicon.classList.remove('rotate')

    } else{
        dropdownContent.classList.add('dropdown-show');
        rotateicon.classList.add('rotate')
    }
});

function ToggleSidebar() {
    let menu = document.querySelector('#menu');
    let navClose = document.querySelector('.nav-close');
    if (menu) {
        menu.classList.toggle('show'); // Adiciona ou remove a classe 'show'
    }
}




    





