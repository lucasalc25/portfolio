// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
const createTable = (number, multiplicator) => {

    multiplicationTable.innerHTML = "";

    for(let i=0;i<=multiplicator;i++){

        const template = 
        `
        <div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${number*i}</div>
        </div>`
        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
}


// Eventos
multiplicationForm.addEventListener("submit", (e) => {
   e.preventDefault();
   
   const multiplicationNumber = +numberInput.value;
   const multiplicatorNumber = +multiplicationInput.value;

   if(!multiplicationNumber || !multiplicatorNumber) return;
   
   createTable(multiplicationNumber, multiplicatorNumber);
})