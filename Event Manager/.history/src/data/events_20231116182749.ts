type event = {
    nombre: string;
    descripcion: string;
    coordenadas?: [number, number];
    fechas: [Date, Date];
    urlDeImagen: string;
}


type frequenciaDeMeses = {
    [index: string]: number;
}

const eventos:event[] = [
    {
        nombre: "Concierto de pop",
        descripcion: "El concierto de Pop del cantante del momento, ¡No te lo puedes perder!",
        fechas:[new Date("05/12/2023"), new Date("10/12/2023")],
        urlDeImagen: "https://www.entradas.com/magazine/fileadmin/_processed_/c/1/csm_outfit-conciertos_9cba9d8eb3.png",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Concierto de Rock",
        descripcion: "El concierto de Rock del cantante del momento, ¡No te lo puedes perder!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Puerto Vallarta",
        descripcion: "Fiesta en un bar de Puerto Vallarta, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Obra de teatro famosa",
        descripcion: "Obra de teatro en el centro de la ciudad, !Debes Verla¡",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "XV años colectivo",
        descripcion: "¿Cumples 15 este año? ¿Te interesa una super celebración?, ¡Ven a celebrarlos con nosotros!",
        fechas:[new Date("03/21/2023"), new Date("03/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Boda de famosos",
        descripcion: "Boda de los famosos del momento, ¡Podrás registrarte y llevar a un invitado!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },
    {
        nombre: "Fiesta nocturna en Cancún",
        descripcion: "Fiesta en un bar de Cancún, con música, comida y música en vivo, ¡Será inolvidable!",
        fechas:[new Date("08/20/2023"), new Date("08/21/2023")],
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
    const mes = todosLosMeses[e.fechas[0].getMonth()];
    frecuenciaDeMeses[mes] += 1;
});

return frecuenciaDeMeses;
}