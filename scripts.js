// Mapeando o Formulário
const form = document.querySelector(".form");

// Ouvidor do evento, quando clicam no botão enviar. 
form.addEventListener("submit", (event) => {
    // Impede de seguir o link 
    event.preventDefault();

    // Puxando as informações adicionadas ao formulário. 
    const name = document.querySelector("#name").value;

    const email = document.querySelector("#email").value;

    const age = document.querySelector("#age").value;

    const selectOne = document.querySelector("#currency-select").value;

    const selecttwo = document.querySelector("#select-two").value;

    const coments = document.querySelector("#coments").value;


    // Adicionando sequencia numérica, antes de cada value
    console.log(`1 ${name}`);
    console.log(`2 ${email}`);
    console.log(`3 ${age}`);
    console.log(`4 ${selectOne}`);
    console.log(`5 ${selecttwo}`);
    console.log(`6 ${coments}`);

    // Mostrando os valores no console
    console.log(name, email, age, selectOne, selecttwo, coments);

}); 
