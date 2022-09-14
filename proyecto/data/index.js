const data =
{
    usuarios: [

        {
            username: "Francisco Fontana",
            mail:"franfontana@hotmail.com",
            foto: "/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg",
            contrasenia:"ff4345" ,
            fecha: "9/12/2022" ,
            dni: 43244245,
            id: 1,

        },
        {
            username: "Tomas Bereciartua",
            mail: "tomasbereciartua99@gmail.com",
            foto: "/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg",
            contrasenia:"Tomito27",
            fecha:"8/11/2022",
            dni: 41924431,
            id: 2,

        },
        {
            username: "Ojani Noa",
            mail:"Ojani88@hotmail.com",
            fotoPerfil: "/img/usuario/f768x1-39851_39978_79.jpg",
            contrasenia:"riverdealma35" ,
            fecha: "28/4/2022" ,
            dni: 43578245,
            id: 3,

        },
        {
            username: "Anita Cartijera",
            mail: "AniAnita@gmail.com",
            foto: "/img/usuario/gubJ8-s0_400x400.jpg",
            contrasenia:"ani95678",
            fecha:"8/7/2022",
            dni: 42843132,
            id: 4,

        },
        {
            username: "Cristian Leiva",
            mail: "Leiva3000@gmail.com",
            foto: "/img/usuario/hqdefault.jpg",
            contrasenia:"Boca45678",
            fecha:"4/6/2022",
            dni: 36843132,
            id: 4,

        },
    
    

    ],

    posteos: [

        {

            imagen: "/img/post/Que-es-paisaje.jpg",
            pieImagen: "Conociendo Alaska",
            id : 1

        },

        {

            imagen: "/img/post/girasoles.jpg",
            pieImagen: "Atardecer entre flores",
            id : 2

        },

        {

            imagen: "/img/post/nieve.jpg",
            pieImagen: "Que frio que hace",
            id : 3

        },

        {

            imagen: "/img/post/cabaña.jpg",
            pieImagen: "Luna de miel",
            id : 4

        },

        {

            imagen: "/img/post/lagorosa.jpg",
            pieImagen: "Pink Lake Australia",
            id : 1

        },

        {

            imagen: "/img/post/montefuji.jpg",
            pieImagen: "Japon no podes ser mas lindo",
            id : 2

        },

        {

            imagen: "/img/post/sidney.jpg",
            pieImagen: "Sidney de noche",
            id : 3

        },

        {

            imagen: "/img/post/desierto.jpg",
            pieImagen: "Recorriendo el desierto",
            id : 4

        },

        {

            imagen: "/img/post/aureora.jpg",
            pieImagen: "Luces nocturnas",
            id : 1

        },

        {

            imagen: "/img/post/puente.jpg",
            pieImagen: "Sabado 10 am",
            id : 2

        },


    ],

    comentarios: [

        {
            id: 1,
            id_usuario:2,
            id_post: 1,
            username: "Cristian Leiva",
            texto: "Fantasma",

        },
        {
            id: 1,
            id_post: 2,
            username: "Anita Cartijera",
            texto: "de chill",
            
        },
        {
            id: 1,
            id_post: 3,
            username: "Ojani Noa",
            texto: "JUUUUJUU",
        },
        {
            id: 1,
            id_post: 1,
            username: "Fran Fontana",
            texto: "primoooo, q vien se te ve jeeejee",
        }

    ],
}

module.exports = data;