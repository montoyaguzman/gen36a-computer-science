// const formElement = document.getElementById('language-form');
// const myInput = document.getElementsByClassName('myInput');
// const myDiv = document.getElementsByTagName('div');

const formElement = document.querySelector('#language-form');
const tasks = [];
const ulElement = document.querySelector('#list-languages');
const STATUS = {
    STAND_BY: 'standBy',
    START: 'start',
    FINISHED: 'finished'
};

formElement.addEventListener('submit', (event) => {

    // prevenir la recarga de la pagina, que es lo que normalmente hacen los forms por defecto
    event.preventDefault();

    // console.log(event.target);
    // acceder a los valores del formulario
    const inputElement = event.target.languageElement;
    const radioListElement = event.target.statusRadioElement;

    const selectedLanguageElement = Array.from(radioListElement).find(element => element.checked);

    const task = {
        description: inputElement.value,
        status: selectedLanguageElement.value
    };

    console.log('task: ', task);
    tasks.push(task);
    console.log('tasks: ', tasks);

    // limpiar la vista
    cleanTaskBoard();

    // pintar el arreglo en el html
    renderTaskBoard(tasks);

    // pintar los totales en el html
    renderTotal();

});

const renderTaskBoard = (tasks) => {

    tasks.forEach((element, index) => {
        // create html
        const liElement = document.createElement('li')
        const divElement = document.createElement('div')
        const iconElement = document.createElement('i')
        const buttonElement = document.createElement('button');

        // agregar estilos
        liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger');

        // condicion para el tipo icon
        setTypeIcon(iconElement, element.status);

        // customizar el button
        buttonElement.setAttribute('data-index', index);
        buttonElement.addEventListener('click', handleDelete);

        // agregar texto
        liElement.innerHTML = element.description;

        // agregar los elementos al DOM
        ulElement.appendChild(liElement);
        liElement.appendChild(divElement);
        divElement.appendChild(iconElement);
        divElement.appendChild(buttonElement);

    });

};

const cleanTaskBoard = () => {
    ulElement.innerHTML = '';
};

const setTypeIcon = (iconElement, status) => {

    iconElement.classList.add('bi');
    if (status === STATUS.STAND_BY) {
        iconElement.classList.add('bi-pause-circle-fill', 'text-warning');
    } else if (status === STATUS.START) {
        iconElement.classList.add('bi-play-circle-fill', 'text-success');
    } else if (status === STATUS.FINISHED) {
        iconElement.classList.add('bi-check-circle-fill', 'text-primary');
    }

};

const handleDelete = (event) => {

    const buttonElement = event.target;
    const indexToDelete = buttonElement.getAttribute('data-index');
    const position = parseInt(indexToDelete);
    tasks.splice(position, 1);
    cleanTaskBoard();
    renderTaskBoard(tasks);
    renderTotal();

};

const renderTotal = () => {
    const totalElement = document.querySelector('#language-all');
    const completeElement = document.querySelector('#language-complete');
    const pendingElement = document.querySelector('#language-pending');
    totalElement.innerHTML = tasks.length;
    completeElement.innerHTML = getTotalComplete(tasks);
    pendingElement.innerHTML = getTotalPendings(tasks);
};

const getTotalComplete = (tasks) => {
    const completeds = tasks.filter(element => element.status === STATUS.FINISHED);
    return completeds.length;
}

const getTotalPendings = (tasks) => {
    const completeds = tasks.filter(element => element.status === STATUS.STAND_BY || element.status === STATUS.START);
    return completeds.length;
}