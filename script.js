//import '../generador de excusas/estilos.css';

window.onload = () => {
    
    document.querySelector('#the-excuse').innerHTML = generateExcuse();
    console.log('Hello ringo from the console! ');
}

let generateExcuse = () =>{
    let pronoun = ['A', 'the'];
    let subject = ['jogger','racoon','dog','driver','comedia','pincone'];
    let action = ['took my', 'threw my', 'yelled at my','stole my','bit my'];
    let possetion = ['homework', 'toe','car','shoe'];
    let where = ['on the street', 'in my house', 'in the driveway'];

    let proIndex = Math.floor (Math.random() * pronoun.length);
    let subIndex = Math.floor(Math.random()) * subject.length;
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return pronoun[proIndex] + ' ' + subject[subIndex] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndex] + ' ' + where[whereIndex];
}