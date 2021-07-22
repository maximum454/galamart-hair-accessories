jsideamore.addEventListener('click', function (event){
    let target = event.target;
    let next = target.getAttribute('data-next');
    let count = target.getAttribute('data-count');
    let ideas = document.querySelectorAll('.idea');
    for(idea of ideas){
        let ideaId = idea.getAttribute('data-id');
        if(next == ideaId){
            idea.classList.remove('more');
        }
        if (next == count){
            target.style.display = 'none'
        }
    }

    target.setAttribute('data-next', 3);
})