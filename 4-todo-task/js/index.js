// const formElement = document.getElementById('language-form');
// const myInput = document.getElementsByClassName('myInput');
// const myDiv = document.getElementsByTagName('div');

const formElement = document.querySelector('#language-form');
const tasks = [];

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

});