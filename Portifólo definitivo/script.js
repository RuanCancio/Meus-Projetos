const rollbarpro = document.querySelector('.projects-icons')

rollbarpro.addEventListener('wheel', (event)=> {
    event.preventDefault();
    rollbarpro.scrollLeft += event.deltaY;
})

const btnleft = document.querySelector("#btn-left")
const btnright = document.querySelector("#btn-right")
const skills = document.querySelectorAll(".opt-skill")

let index = 0

btnright.addEventListener("click", ()=> {
   skills[index].classList.remove("on")
   index++

    if(index >= skills.length) {
        index = 0
    }
    skills[index].classList.add("on")
}
)

btnleft.addEventListener("click", ()=> {
    skills[index].classList.remove("on")
    index--

    if(index < 0) {
        index = skills.length - 1
    }
    skills[index].classList.add("on")
})
