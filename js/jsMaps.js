async function initMap() {
  // Importando as bibliotecas necessárias
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );

  // Criando o mapa
  const map = new Map(document.getElementById("map"), {
    center: { lat: -29.294760, lng: -51.242812 },
    zoom: 7,
    mapId: "4504f8b37365c3d0",
  });


  // Criando os marcadores
  const markersData = [
    {
      lat: -29.455586010537903,
      lng: -51.96421206460413,
      image: "https://lh3.googleusercontent.com/d/1D_Zfte2jEDqKnuCvdLDOPIXddD6LsdIB=w3000",
    },
    { lat: -29.7494901, lng: -52.4138868, image: "https://lh3.googleusercontent.com/d/1_cxDdqhDJZk4cugss_mGBvGiXx0KSIYa=w3000" },
    { lat: -29.361264, lng: -50.8357253, image: "https://lh3.googleusercontent.com/d/1lc7IEG6ii1jFjJ9YkW2rcfVjKE3Q7MfK=w3000" },
    { lat: -29.445921, lng: -51.952093, image: "https://lh3.googleusercontent.com/d/1Gk3GnhplC4aN61eHNWewP6ngbsrGTIWi=w3000" },
    { lat: -29.397450, lng: -51.800306, image: "https://lh3.googleusercontent.com/d/1b9dAIGG8L0qFh-LdPjhHOwpC1bu6kWDW=w3000" },
    { lat: -29.395892, lng: -50.875239, image: "https://lh3.googleusercontent.com/d/1J1FEGVM4cxFAZSJxXSsVjszpOUQstu4i=w3000" },
    { lat: -29.710322, lng: -52.430621, image: "https://lh3.googleusercontent.com/d/15uPyoNbAisK4qKJDrPm2GnYC5uP3H9vp=w3000" },
    { lat: -29.344169, lng: -49.726423, image: "https://lh3.googleusercontent.com/d/1Jzobz5tZs3ZJHN7YtvVTrD__0yh_evZ3=w3000" },
    { lat: -29.574833, lng: -51.850696, image: "https://lh3.googleusercontent.com/d/1ilqSbvmfRGiFupXfcDZqqlr70P5m3q9I=w3000" },
    { lat: -29.467596, lng: -51.962627, image: "https://lh3.googleusercontent.com/d/1ZKwqjugnZ0Shv4Nr60MzRVvKRMu0eGxw=w3000" },
    { lat: -29.459904, lng: -51.984479, image: "https://lh3.googleusercontent.com/d/1HEP9y5mEjP4TlKn7jos_lBvMSh_7K0Fj=w3000" },
    { lat: -29.995193, lng: -50.127480, image: "https://lh3.googleusercontent.com/d/115si2heyj5WztGNLKbdaty5_5CC9Bx-U=w3000" },
    { lat: -29.590459, lng: -49.913348, image: "https://lh3.googleusercontent.com/d/1-J662yb19LPGhb8IdMrr9taVp9mSBPs4=w3000" },
    { lat: -29.802206, lng: -51.864238, image: "https://lh3.googleusercontent.com/d/1ZEEx0-hZaY_GXcFLg5MV_D_kbyEUczHd=w3000" },
    { lat: -29.764438, lng: -50.427510, image: "https://lh3.googleusercontent.com/d/1iMPjXr8cbmkLG_L0F-nvp59y5GM3ErzO=w3000" },
    
  ];

  markersData.forEach(data => {
    // Definindo o ícone personalizado com a imagem
  
    const icon = {
        
        url: data.image, // Caminho para a imagem
        size: new google.maps.Size(50, 50), // Tamanho da imagem
        origin: new google.maps.Point(0, 0), // Origem
        anchor: new google.maps.Point(25, 25) // Ponto de ancoragem da imagem
    };
    const pin = new PinElement({ scale: 1.0 });
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: data.lat, lng: data.lng },
      content: pin.element,
    });

    // Adicionando eventos para exibir a imagem
    marker.element.addEventListener("click", (event) =>
      toggleImage(event, data.image));
    return marker;

    //marker.element.addEventListener("", hideImage, false);


  });
  map.addListener("click", hideImage);
}

// Função para mostrar a imagem ao passar o mouse
/*function showImage(event, imageSrc) {
  const img = document.getElementById("markerImage");
  img.src = imageSrc;
  img.style.left = event.clientX + 10 + "px";
  img.style.top = event.clientY + 10 + "px";
  img.style.display = "block";
}*/
function toggleImage(event, imageSrc) {
  const img = document.getElementById("markerImage");

  if (img.style.display === "block" && img.src.includes(imageSrc)) {
    hideImage();
  } else {
    img.src = imageSrc;
    img.style.left = event.clientX + "px";
    img.style.top = event.clientY + "px";
    img.style.display = "block";
  }
}


// Função para esconder a imagem ao tirar o mouse do marcador
function hideImage() {
  document.getElementById("markerImage").style.display = "none";
}

// Inicializa o mapa
initMap();


/* Função para voltar à página anterior */
function voltarPagina() {
  window.location.href = "index.html";
}