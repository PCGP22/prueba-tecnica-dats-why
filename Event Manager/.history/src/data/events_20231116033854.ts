type event = {
    nombre?: string;
    descripcion?: string;
    coordenadas?: [number, number];
    fechas?: [Date, Date];
    urlDeImagen?: string;
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
        descripcion: "El concierto de Pop del cantante del momento, ¡No te lo puedes perder!",
        fechas:[new Date("05/12/2023"), new Date("10/12/2023")],
        urlDeImagen: "https://www.villapalmarcancun.com.mx/blog/wp-content/uploads/2016/11/cancun-nightlife-1.jpg",
    },

]

export default eventos;