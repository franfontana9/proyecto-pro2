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
            posteos: 3,
            seguidores: 60,
            seguidos: 100,

        },
        {
            username: "Tomas Bereciartua",
            mail: "tomasbereciartua99@gmail.com",
            foto: "/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg",
            contrasenia:"Tomito27",
            fecha:"8/11/2022",
            dni: 41924431,
            id: 2,
            posteos: 420,
            seguidores: 768,
            seguidos: 5675,

        },
        {
            username: "Ojani Noa",
            mail:"Ojani88@hotmail.com",
            fotoPerfil: "/img/usuario/f768x1-39851_39978_79.jpg",
            contrasenia:"riverdealma35" ,
            fecha: "28/4/2022" ,
            dni: 43578245,
            id: 3,
            posteos: 3,
            seguidores: 2332,
            seguidos: 234,

        },
        {
            username: "Anita Cartijera",
            mail: "AniAnita@gmail.com",
            foto: "/img/usuario/gubJ8-s0_400x400.jpg",
            contrasenia:"ani95678",
            fecha:"8/7/2022",
            dni: 42843132,
            id: 4,
            posteos: 24,
            seguidores: 2342,
            seguidos: 10000,

        },
        {
            username: "Cristian Leiva",
            mail: "Leiva3000@gmail.com",
            foto: "/img/usuario/hqdefault.jpg",
            contrasenia:"Boca45678",
            fecha:"4/6/2022",
            dni: 36843132,
            id: 5,
            posteos: 30,
            seguidores: 1000000,
            seguidos: 1,

        },
    
    

    ],

    posteos: [

        {
            id : 1,
            id_usuario:1,
            imagen: "/img/post/aureora.jpeg",
            image_usuario:"/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg",
            pieImagen: "Conociendo Alaska",
            username: "Francisco Fontana",
            comentarios:[
                {
                    id_usuario: 5,
                    nombre: "Cristian Leiva",
                    comentario: "Muy lindo lugar",
                    image_usuario:"/img/usuario/hqdefault.jpg"
                },
                {
                    id_usuario: 4,
                    nombre: "Anita Cartijera",
                    comentario: "Increible <3",
                    image_usuario:"/img/usuario/gubJ8-s0_400x400.jpg"
                }
            ]

        },

        {
            id : 2,
            id_usuario:2,
            imagen: "/img/post/lagonieve.jpeg",
            image_usuario:"/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg",
            pieImagen: "Disfrutando el bosque",
            username: "Tomas Bereciartua",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Francisco Fontana",
                    comentario: "Tremenda placa",
                    image_usuario:"/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg"
                },
                {
                    id_usuario: 3,
                    nombre: "Ojani Noa",
                    comentario: "Quiero estar ahi!",
                    image_usuario:"/img/usuario/f768x1-39851_39978_79.jpg"
                }
            ]

        },

        {
            id : 3,
            id_usuario:3,
            imagen: "/img/post/lagorosa.jpeg",
            image_usuario:"/img/usuario/f768x1-39851_39978_79.jpg",
            pieImagen: "Pink Lake",
            username: "Ojani Noa",
            comentarios:[
                {
                    id_usuario: 5,
                    nombre: "Cristian Leiva",
                    comentario: "Quien pudiera...",
                    image_usuario:"/img/usuario/hqdefault.jpg"
                },
                {
                    id_usuario: 2,
                    nombre: "Tomas Bereciartua",
                    comentario: "Disfrutando a lo loco",
                    image_usuario:"/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg"
                }
            ]

        },
        {
            id : 4,
            id_usuario:1,
            imagen: "/img/post/desierto.jpeg",
            image_usuario:"/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg",
            pieImagen: "Dunas de Asia",
            username: "Francisco Fontana",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "No tiene ningun tipo de sentido",
                    image_usuario:"/img/usuario/hqdefault.jpg"
                },
                {
                    id_usuario: 2,
                    nombre: "Tomas Beraciartua",
                    comentario: "Quiero!!!!",
                    image_usuario:"/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg"
                }
            ]

        },

        {
            id : 5,
            id_usuario:4,
            imagen: "/img/post/puente.jpeg",
            image_usuario:"/img/usuario/gubJ8-s0_400x400.jpg",
            pieImagen: "Armando Puentes",
            username: "Anita Cartijera",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Francisco Fontana",
                    comentario: "Que vertigo",
                    image_usuario:"/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg"
                },
                {
                    id_usuario: 2,
                    nombre: "Tomas Bereciartua",
                    comentario: "No te caigas",
                    image_usuario:"/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg"
                }
            ]

        },

        {
            id : 6,
            id_usuario:3,
            imagen: "/img/post/girasoles.jpeg",
            image_usuario:"/img/usuario/f768x1-39851_39978_79.jpg",
            pieImagen: "Atardecer entre flores",
            username: "Ojani Noa",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "Donde es?? ",
                    image_usuario:"/img/usuario/hqdefault.jpg"
                },
                {
                    id_usuario: 1,
                    nombre: "Anita Cartijera",
                    comentario: "Me tenes que llevar la proxima!",
                    image_usuario:"/img/usuario/gubJ8-s0_400x400.jpg"
                }
            ]

        },
        {
            id : 7,
            id_usuario:5,
            imagen: "/img/post/montefuji.jpeg",
            image_usuario:"/img/usuario/hqdefault.jpg",
            pieImagen: "Japon",
            username: "Cristian Leiva",
            comentarios:[
                {
                    id_usuario: 3,
                    nombre: "Ojani Noa",
                    comentario: "Monte fuji????!!",
                    image_usuario:"/img/usuario/f768x1-39851_39978_79.jpg"
                },
                {
                    id_usuario: 2,
                    nombre: "Tomas Bereciartua",
                    comentario: "WOOOW",
                    image_usuario:"/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg"
                }
            ]

        },
        {
            id : 8,
            id_usuario:5,
            imagen: "/img/post/sidney.jpeg",
            image_usuario:"/img/usuario/hqdefault.jpg",
            pieImagen: "Australia",
            username: "Cristian Leiva",
            comentarios:[
                {
                    id_usuario: 4,
                    nombre: "Anita Cartijera",
                    comentario: "Volve que te extraño",
                    image_usuario:"/img/usuario/gubJ8-s0_400x400.jpg"
                },
                {
                    id_usuario: 3,
                    nombre: "Ojani Noa",
                    comentario: "Traeme un regalito",
                    image_usuario:"/img/usuario/f768x1-39851_39978_79.jpg"
                }
            ]

        },
        {
            id : 9,
            id_usuario:2,
            imagen: "/img/post/cabaña.jpeg",
            image_usuario:"/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg",
            pieImagen: "Playita",
            username: "Tomas Bereciartua",
            comentarios:[
                {
                    id_usuario: 5,
                    nombre: "Cristian Leiva",
                    comentario: "Que nivel que manejas",
                    image_usuario:"/img/usuario/hqdefault.jpg"
                },
                {
                    id_usuario: 4,
                    nombre: "Anita Cartijera",
                    comentario: "Vos si que estas tranquilo",
                    image_usuario:"/img/usuario/gubJ8-s0_400x400.jpg"
                }
            ]

        },
        {
            id : 10,
            id_usuario:4,
            imagen: "/img/post/monte.jpeg",
            image_usuario:"/img/usuario/gubJ8-s0_400x400.jpg",
            pieImagen: "Conociendo Alaska",
            username: "Anita Cartijera",
            comentarios:[
                {
                    id_usuario: 5,
                    nombre: "Cristian Leiva",
                    comentario: "Tremendo lugar",
                    image_usuario:"/img/usuario/hqdefault.jpg"
                },
                {
                    id_usuario: 1,
                    nombre: "Francisco Fontana",
                    comentario: "Son los alpes?",
                    image_usuario:"/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg"
                }
            ]

        },

    ],



}


module.exports = data;