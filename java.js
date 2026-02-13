
const alternatives = [
    {text:"", images:"https://media.tenor.com/K0Op-0SpsvkAAAAm/dudu-cute.webp"},
    {text:"Ayaw pa", images:"https://media.tenor.com/LFYspX1SSUcAAAAm/bubu-dudu-bubu.webp"},
    {text:"Sige na", images:"https://media.tenor.com/iIBIiiS0fskAAAAm/mimibubu.webp"},
    {text:"PLSSSSSSSSS", images:"https://media.tenor.com/mRYP23WO1DYAAAAm/ok.webp"},
    {text:"HMP", images:"https://media.tenor.com/MN70fG-X1jcAAAAm/angry-dudu-dudu-kill.webp"}
];
const ohyes = {text:"YAAAYYY I LOVE YOU", images:"https://media.tenor.com/-aW73OVUtyYAAAAm/tkthao219-bubududu.webp"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'YES'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});
