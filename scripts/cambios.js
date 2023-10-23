const apiUrl = "https://bymykel.github.io/CSGO-API/api/en/collections.json";

function mostrarArmas() {
  var listaArmasElement = document.getElementById("weaponList");

  var armas;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo obtener la información");
      }
      return response.json();
    })
    .then((data) => {
      armas = data[0].contains;

      armas.forEach(function (arma) {
        var listItem = document.createElement("li");
        listItem.className = "card";
        listItem.style.display = "flex";
        listItem.style.flexDirection = "column";
        listItem.style.margin = "5px";

        switch (arma.rarity) {
          case "Covert":
            listItem.style.background = "#ff00009e";
            break;
          case "Classified":
            listItem.style.background = "#ffc0cba6";
            break;
          case "Mil-Spec Grade":
            listItem.style.background = "#0000ff75";
            break;
          case "Restricted":
            listItem.style.background = "#800080bf";
            break;
        }

        listItem.innerHTML = `
            <div class="card-body" style="display:flex;flex-direction:column;justify-content:center; width:250px">
            <strong style="text-align:center">${arma.name}</strong>
            <img style="width:200px" src=${arma.image}> 
            </div>   
        `;
        listaArmasElement.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

mostrarArmas();
