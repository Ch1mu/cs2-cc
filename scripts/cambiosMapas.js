function mostrarMapas() {
  var listaMapasElement = document.getElementById("weaponList");

  var mapas = [
    {
      name: "Ancient",
      image: "https://images.ctfassets.net/nua5jmq7o9f6/5UWqqhGsCpmFp2zkgQxdC1/186a62a904757223357a1a261412bd8b/Screenshot_2023-08-03_130704.jpg?w=3840&q=75&fm=webp",
    },
    {
      name: "Anubis",
      image: "https://img-cdn.hltv.org/gallerypicture/ZAeEO31kTJRTcDpL7XCfif.jpg?auto=compress&ixlib=java-2.1.0&q=75&w=800&s=0da85f296b4e9c7a796e6eb042b5a94a",
    },
    {
      name: "Inferno",
      image: "https://arena.rtp.pt/wp-content/uploads/2023/09/cs2_Inferno_A-860x507-1.jpeg",
    },
    {
      name: "Mirage",
      image: "https://www.dkm-gaming.com/wp-content/uploads/2023/06/knhza2p4c5ta1-1.jpg",
    },
    {
        name: "Nuke",
        image: "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/07/07/nuke-cs2-exploit.jpg",
    },
    {
        name: "Overpass",
        image: "https://www.charlieintel.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.charlieintel.com/wp-content/uploads/2023/10/04/cs2-overpass-smoke-grenades-flash-lineups-1.jpg",
    }
  ];

  mapas.forEach(function (mapa) {
    var listItem = document.createElement("li");
    listItem.className = "card";
    listItem.style.display = "flex";
    listItem.style.flexDirection = "column";
    listItem.style.margin = "5px";
    listItem.style.background = "rgba(255, 255, 255, 0.377)";

    listItem.innerHTML = `
            <div class="card-body" style="display:flex;flex-direction:column;justify-content:center;">
            <strong style="text-align:center;margin-bottom:15px">${mapa.name}</strong>
            <img style="width:200px;border-radius:10px" src=${mapa.image}> 
            </div>   
        `;
    listaMapasElement.appendChild(listItem);
  });
}

mostrarMapas();
