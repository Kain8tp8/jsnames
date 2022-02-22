// const btn=document.querySelector('#find')
// const input=document.querySelector('#id')
// const text=document.querySelector('#text')


// btn.onclick = () => {

//     let NamBer= input.value

//     let names = ['Harry', 'Ross', 'Bruce', 'Cook', 'Carolyn', 'Morgan', 'Albert', 'Walker', 'Randy', 'Reed'];
//     let jobs = ['Frontend Developer', 'React Developer', 'Javascript Backend Developer', 'Java Developer', 'DevOps', 'Go Developer', 'Android Developer', 'Flutter Developer', 'Graphic Designer', 'Team Lead'];

//     console.log(names[NamBer] +' '+ jobs[NamBer])
//     text.innerText = names[NamBer] +' '+ jobs[NamBer]
// }
// osan usul

const btn=document.querySelector('#find')
const input=document.querySelector('#id')
const text=document.querySelector('#text')
const urel=document.querySelector('ul')

let names = ['Harry', 'Ross', 'Bruce', 'Cook', 'Carolyn', 'Morgan', 'Albert', 'Walker', 'Randy', 'Reed'];
let jobs = ['Frontend Developer', 'React Developer', 'Javascript Backend Developer', 'Java Developer', 'DevOps', 'Go Developer', 'Android Developer', 'Flutter Developer', 'Graphic Designer', 'Team Lead'];

for (let i = 0; i < 10; i++) {
    let li = document.createElement('li') 
    li.classList.add('list-group-item')
    li.innerText = names[i]
    urel.appendChild (li)
}
                    
btn.onclick = () => {
    let N = parseInt(input.value)
    
    text.innerText = names[N-1] +" "+ jobs[N-1]
}
 



























