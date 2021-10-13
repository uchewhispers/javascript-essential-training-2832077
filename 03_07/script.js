/**
 * To create my own special object
 */
 const updateTelevision = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(television);
    console.info(update);
  };
  
const television = {
    name: "Everyday Television",
    formFactor: "Flat screen",
    color: "Brown",
    diagonal: true,
    toggleDiagonal: function (length) {
        switch (length) {
        case 55:
            console.log("This is a 55\"");
            break;
        case 49:
            console.log("This is a 49\"");
            break;
        case 32:
            console.log("This is a 32\"");
            break;
        }
    this.diagonal = length; 
    },
};

const markup = (television) => {
    return `
    <div>
      <h3>${television.name}</h3>
      <ul>
        <li>Form Factor: ${television.formFactor}</li>
        <li>Color: ${television.color}</li>
        <li>Diagonal: ${television.diagonal}</li>
      </ul>
    </div>
  `;
  };

const main = document.createElement("main");
main.innerHTML = markup(television);
document.body.appendChild(main);