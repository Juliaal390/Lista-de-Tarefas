const btnStyle = document.querySelector('.btnStyle');
const circle = document.querySelector('.bi.bi-circle-fill');
const body = document.getElementsByTagName('body')[0];

/* alterar cor da tela */
btnStyle.addEventListener('click', (e)=>{
    if (circle.classList.contains('animation')) {
        circle.classList.remove('animation');
        circle.classList.add('animationV');
        body.classList.remove('b2');
    } else {
        circle.classList.remove('animationV');
        circle.classList.add('animation');
        body.classList.add('b2');
    }
})

/* mostrar data */
const date = document.getElementById('date');
const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();

const dateFormato = day + '/' + month + '/' + year;

date.textContent = dateFormato;

/* adicionar tarefa */
const btnAddTask = document.querySelector('.addTaskBtn'); /* botão */
const bloconotas = document.querySelector('.tasks2'); /* bloco onde as notas aparecerão */
 const taskSaved = btnAddTask.addEventListener('click', ()=>{
    let getTask = document.getElementById('inputTask').value;

    if(getTask.trim()!==''){
    let newTask = document.createElement('div');
    newTask.setAttribute('class', 'newTaskElement');
    newTask.style.cursor='pointer';
    newTask.textContent=getTask;

    let newIcon = document.createElement('i');
    newIcon.setAttribute('class', 'bi bi-eraser');
    newTask.appendChild(newIcon);

    /* adiciona a nova tarefa acima da última */
    let lastTask = bloconotas.firstChild;
    bloconotas.insertBefore(newTask, lastTask);
    

    /* apagar nota */
    newIcon.addEventListener('click', () => {
        bloconotas.removeChild(newTask);
    });

    newTask.addEventListener('click',(e)=>{
        e.target.classList.toggle('decorationFont');
    });
    
}else{
    alert('Insira algum texto');
}
});

