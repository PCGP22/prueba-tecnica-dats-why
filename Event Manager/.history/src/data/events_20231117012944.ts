type event = {
    nombre: string;
    descripcion: string;
    coordenadas?: [number, number];
    fechas: [string, string];
    urlDeImagen: string;
}


type frequenciaDeMeses = {
    [index: string]: number;
}

const eventos:event[] = [
    {
        nombre: "Concierto de pop",
        descripcion: "El concierto de Pop del cantante del momento, ¡No te lo puedes perder!",
        fechas:[new Date("05/12/2023").toDateString(), new Date("10/12/2023").toDateString()],
        coordenadas:[17.44619803628396, -97.91243042236],
        urlDeImagen: "https://www.entradas.com/magazine/fileadmin/_processed_/c/1/csm_outfit-conciertos_9cba9d8eb3.png",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023").toDateString(), new Date("08/21/2023").toDateString()],
        coordenadas:[76.1761, -98.8076],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Concierto de Rock",
        descripcion: "El concierto de Rock del cantante del momento, ¡No te lo puedes perder!",
        fechas:[new Date("07/03/2023").toDateString(), new Date("07/10/2023").toDateString()],
        coordenadas:[0.31355, -92.6138],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiestas nocturnas en Puerto Vallarta",
        descripcion: "Fiestas en un bar de Puerto Vallarta, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("06/12/2023").toDateString(), new Date("06/22/2023").toDateString()],
        coordenadas:[8.44619803628396, -100.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Obra de teatro famosa",
        descripcion: "Obra de teatro en el centro de la ciudad, !Debes Verla¡",
        fechas:[new Date("02/02/2023").toDateString(), new Date("02/20/2023").toDateString()],
        coordenadas:[22.44619803628396, -99.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "XV años colectivo",
        descripcion: "¿Cumples 15 este año? ¿Te interesa una super celebración?, ¡Ven a celebrarlos con nosotros!",
        fechas:[new Date("03/21/2023").toDateString(), new Date("03/21/2023").toDateString()],
        coordenadas: [48.44619803628396, -105.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Boda de famosos",
        descripcion: "Boda de los famosos del momento, ¡Podrás registrarte y llevar a un invitado!",
        fechas:[new Date("08/18/2023").toDateString(), new Date("08/20/2023").toDateString()],
        coordenadas: [-20.44619803628396, -96.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Feria del empleo 2023",
        descripcion: "Feria del empleo anual, miles de empresas, !sólo faltas tú!",
        fechas:[new Date("10/10/2023").toDateString(), new Date("10/15/2023").toDateString()],
        coordenadas: [44.84619803628396, -105.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Expo baby showers",
        descripcion: "De todo para tu fiesta de baby shower, ¡Habrán descuentos y regalos!",
        fechas:[new Date("01/20/2023").toDateString(), new Date("01/26/2023").toDateString()],
        coordenadas: [50.84619803628396, -94.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Excursión a la Riviera Maya",
        descripcion: "Ven con dos acompañantes a explorar la Riviera Maya, ¡Tu próxima aventura aguarda!",
        fechas:[new Date("06/17/2023").toDateString(), new Date("07/7/2023").toDateString()],
        coordenadas: [64.84619803628, -97.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Buen Fin",
        descripcion: "Aprovecha las ofertas imperdibles de este año, ¡Ahorra en grande!",
        fechas:[new Date("11/17/2023").toDateString(), new Date("20/17/2023").toDateString()],
        coordenadas: [50.84619803628, -104.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Convención religiosa",
        descripcion: "Reunión única de arsobispos, clérigos y feligreses ¡No puedes faltar!",
        fechas:[new Date("02/12/2023").toDateString(), new Date("02/18/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Super Tianguis",
        descripcion: "¡Ocasión irrepetible!, por primera vez se juntan tres tianguis distintos",
        fechas:[new Date("10/15/2023").toDateString(), new Date("10/18/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Concierto al aire libre",
        descripcion: "La gran sinfónica viene a celebrar sus 100 años de creación, ¡Evento gratuito!",
        fechas:[new Date("08/02/2023").toDateString(), new Date("08/07/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Exposición de arte en museo",
        descripcion: "Arte de todo el mundo reunida por una corta temporada, ¡Ven con tus amigos!",
        fechas:[new Date("04/04/2023").toDateString(), new Date("04/24/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Desfile del día de muertos",
        descripcion: "Ven a ver con tu familia este gran desfile conmemorativo, ¡Lleva tu cámara!",
        fechas:[new Date("11/01/2023").toDateString(), new Date("11/01/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Juguetón 2023",
        descripcion: "Ven a celebrar el día de reyes con nosotros, ¡Haz la diferencia!",
        fechas:[new Date("01/06/2023").toDateString(), new Date("01/06/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Desfile de primavera 2023",
        descripcion: "Ven a disfrutar de comida, música y un desfile vistoso ¡Una experiencia única!",
        fechas:[new Date("03/18/2023").toDateString(), new Date("03/22/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Navidad colectiva",
        descripcion: "Ven a pedir posada, romper piñatas y compartir tu alegría, ¡Felices fiestas!",
        fechas:[new Date("12/12/2023").toDateString(), new Date("12/12/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Celebra la pascua",
        descripcion: "Festival con delicias del mar, ¡Ven a refrescarte!",
        fechas:[new Date("04/02/2023").toDateString(), new Date("04/08/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Ciudad ornamentada",
        descripcion: "Con motivo de fin de año, se colocarán ornatos en cada edificio importante. ¡La ciudad se viste de gala!",
        fechas:[new Date("11/20/2023").toDateString(), new Date("12/25/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta de verano",
        descripcion: "Descuentos, regalos y todo lo que necesitas para estas vacaciones, ¡Diviértete en grande!",
        fechas:[new Date("06/15/2023").toDateString(), new Date("07/01/2023").toDateString()],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },

]

export default eventos;

export function getMonthFrequency(){

    const todosLosMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const frecuenciaDeMeses:frequenciaDeMeses = {
    Enero: 0,
    Febrero: 0,
    Marzo: 0,
    Abril: 0,
    Mayo: 0,
    Junio: 0,
    Julio: 0,
    Agosto: 0,
    Septiembre: 0,
    Octubre: 0,
    Noviembre: 0,
    Diciembre: 0,
};

eventos.forEach((e) => {
    const fecha = new Date(e.fechas[0])
    const mes = todosLosMeses[fecha.getMonth()];
    frecuenciaDeMeses[mes] += 1;
});

return frecuenciaDeMeses;
}