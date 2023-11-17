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
        fechas:[new Date("05/12/2023").toLocaleString('es-mx').split(",")[0], new Date("10/12/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[17.44619803628396, -97.91243042236],
        urlDeImagen: "https://www.entradas.com/magazine/fileadmin/_processed_/c/1/csm_outfit-conciertos_9cba9d8eb3.png",
    },
    {
        nombre: "Fiestatón",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023").toLocaleString('es-mx').split(",")[0], new Date("08/21/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[76.1761, -98.8076],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Concierto de Rock",
        descripcion: "El concierto de Rock del cantante del momento, ¡No te lo puedes perder!",
        fechas:[new Date("07/03/2023").toLocaleString('es-mx').split(",")[0], new Date("07/10/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[0.31355, -92.6138],
        urlDeImagen: "https://www.entradas.com/magazine/fileadmin/_processed_/c/1/csm_outfit-conciertos_9cba9d8eb3.png",
    },
    {
        nombre: "Fiestas nocturnas",
        descripcion: "Fiestas en un bar de Puerto Vallarta, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("06/12/2023").toLocaleString('es-mx').split(",")[0], new Date("06/22/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[8.44619803628396, -100.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Obra de teatro famosa",
        descripcion: "Obra de teatro en el centro de la ciudad, !Debes Verla¡",
        fechas:[new Date("02/02/2023").toLocaleString('es-mx').split(",")[0], new Date("02/20/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[22.44619803628396, -99.91243042236],
        urlDeImagen: "https://thumbs.dreamstime.com/b/filas-de-asiento-teatro-gen%C3%A9rico-rojo-cierre-asientos-gen%C3%A9ricos-cine-o-277479847.jpg",
    },
    {
        nombre: "XV años colectivo",
        descripcion: "¿Cumples 15 este año? ¿Te interesa una super celebración?, ¡Ven a celebrarlos con nosotros!",
        fechas:[new Date("03/21/2023").toLocaleString('es-mx').split(",")[0], new Date("03/21/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [48.44619803628396, -105.91243042236],
        urlDeImagen: "https://webguadalupe.s3.amazonaws.com/wp-content/uploads/2023/06/a89a9187-cf35-49ae-8fc7-c49e466d0579.jpg",
    },
    {
        nombre: "Boda de famosos",
        descripcion: "Boda de los famosos del momento, ¡Podrás registrarte y llevar a un invitado!",
        fechas:[new Date("08/18/2023").toLocaleString('es-mx').split(",")[0], new Date("08/20/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [-20.44619803628396, -96.91243042236],
        urlDeImagen: "https://lalunadelhenares.com/wp-content/uploads/2020/05/MESA-BODA-GEN%C3%89RICA-1-1024x682.jpg",
    },
    {
        nombre: "Feria del empleo 2023",
        descripcion: "Feria del empleo anual, miles de empresas, !sólo faltas tú!",
        fechas:[new Date("10/10/2023").toLocaleString('es-mx').split(",")[0], new Date("10/15/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [44.84619803628396, -105.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Expo baby showers",
        descripcion: "De todo para tu fiesta de baby shower, ¡Habrán descuentos y regalos!",
        fechas:[new Date("01/20/2023").toLocaleString('es-mx').split(",")[0], new Date("01/26/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [50.84619803628396, -94.91243042236],
        urlDeImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRAP66SlxyMFZ_EdNU3YO12QCb480xT2yYw&usqp=CAU",
    },
    {
        nombre: "Excursión Maya",
        descripcion: "Ven con dos acompañantes a explorar la Riviera Maya, ¡Tu próxima aventura aguarda!",
        fechas:[new Date("06/17/2023").toLocaleString('es-mx').split(",")[0], new Date("07/7/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [64.84619803628, -97.91243042236],
        urlDeImagen: "data:image/jpeg;base64,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",
    },
    {
        nombre: "Buen Fin",
        descripcion: "Aprovecha las ofertas imperdibles de este año, ¡Ahorra en grande!",
        fechas:[new Date("11/17/2023").toLocaleString('es-mx').split(",")[0], new Date("20/17/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [50.84619803628, -104.91243042236],
        urlDeImagen: "https://www.unioncdmx.mx/wp-content/uploads/2022/11/logo-el-buen-fin-2022-1.jpg",
    },
    {
        nombre: "Convención religiosa",
        descripcion: "Reunión única de arsobispos, clérigos y feligreses ¡No puedes faltar!",
        fechas:[new Date("02/12/2023").toLocaleString('es-mx').split(",")[0], new Date("02/18/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [30.44619803628396, -99.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Super Tianguis",
        descripcion: "¡Ocasión irrepetible!, por primera vez se juntan tres tianguis distintos",
        fechas:[new Date("10/15/2023").toLocaleString('es-mx').split(",")[0], new Date("10/18/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [35.84619803628, -102.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Concierto al aire libre",
        descripcion: "La gran sinfónica viene a celebrar sus 100 años de creación, ¡Evento gratuito!",
        fechas:[new Date("08/02/2023").toLocaleString('es-mx').split(",")[0], new Date("08/07/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [8.44619803628396, -97.1243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Exposición de arte en museo",
        descripcion: "Arte de todo el mundo reunida por una corta temporada, ¡Ven con tus amigos!",
        fechas:[new Date("04/04/2023").toLocaleString('es-mx').split(",")[0], new Date("04/24/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [13.44619803628396, -98.1243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Desfile del día de muertos",
        descripcion: "Ven a ver con tu familia este gran desfile conmemorativo, ¡Lleva tu cámara!",
        fechas:[new Date("11/01/2023").toLocaleString('es-mx').split(",")[0], new Date("11/01/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[35.84619803628, -106.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Juguetón 2023",
        descripcion: "Ven a celebrar el día de reyes con nosotros, ¡Haz la diferencia!",
        fechas:[new Date("01/06/2023").toLocaleString('es-mx').split(",")[0], new Date("01/06/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[35.85113801176917, -112.61888926424743],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Primaveral",
        descripcion: "Ven a disfrutar de comida, música y un desfile vistoso ¡Una experiencia única!",
        fechas:[new Date("03/18/2023").toLocaleString('es-mx').split(",")[0], new Date("03/22/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [30.85113801176917, -112.61888926424743],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Navidad colectiva",
        descripcion: "Ven a pedir posada, romper piñatas y compartir tu alegría, ¡Felices fiestas!",
        fechas:[new Date("12/12/2023").toLocaleString('es-mx').split(",")[0], new Date("12/12/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [30.84619803628, -106.91243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Celebra la pascua",
        descripcion: "Festival con delicias del mar, ¡Ven a refrescarte!",
        fechas:[new Date("04/02/2023").toLocaleString('es-mx').split(",")[0], new Date("04/08/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [-15.44619803628396, -95.1243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Ciudad ornamentada",
        descripcion: "Con motivo de fin de año, se colocarán ornatos en cada edificio importante. ¡La ciudad se viste de gala!",
        fechas:[new Date("11/20/2023").toLocaleString('es-mx').split(",")[0], new Date("12/25/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas:[32.44619803628396, -98.1243042236],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta de verano",
        descripcion: "Descuentos, regalos y todo lo que necesitas para estas vacaciones, ¡Diviértete en grande!",
        fechas:[new Date("06/15/2023").toLocaleString('es-mx').split(",")[0], new Date("07/01/2023").toLocaleString('es-mx').split(",")[0]],
        coordenadas: [23.85113801176917, -107.61888926424743],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    }

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