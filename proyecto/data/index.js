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
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "Muy lindo lugar"
                },
                {
                    id_usuario: 1,
                    nombre: "Oli Costa",
                    comentario: "Increible <3"
                }
            ]

        },

        {
            id : 1,
            id_usuario:2,
            imagen: "/img/post/lagonieve.jpeg",
            image_usuario:"/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg",
            pieImagen: "Disfrutando el bosque",
            username: "Tomas Bereciartua",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Francisco Fontana",
                    comentario: "Tremenda placa"
                },
                {
                    id_usuario: 1,
                    nombre: "Ojani Noa",
                    comentario: "Quiero estar ahi!"
                }
            ]

        },

        {
            id : 1,
            id_usuario:3,
            imagen: "/img/post/lagorosa.jpeg",
            image_usuario:"/img/usuario/f768x1-39851_39978_79.jpg",
            pieImagen: "Pink Lake",
            username: "Ojani Noa",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "Quien pudiera..."
                },
                {
                    id_usuario: 1,
                    nombre: "Tomas Bereciartua",
                    comentario: "Disfrutando a lo loco"
                }
            ]

        },
        {
            id : 1,
            id_usuario:1,
            imagen: "/img/post/desierto.jpeg",
            image_usuario:"/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg",
            pieImagen: "Dunas de Asia",
            username: "Francisco Fontana",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "No tiene ningun tipo de sentido"
                },
                {
                    id_usuario: 1,
                    nombre: "Oli Costa",
                    comentario: "Quiero!!!!"
                }
            ]

        },

        {
            id : 1,
            id_usuario:4,
            imagen: "/img/post/puente.jpeg",
            image_usuario:"/img/usuario/gubJ8-s0_400x400.jpg",
            pieImagen: "Armando Puentes",
            username: "Anita Cartijera",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Francisco Fontana",
                    comentario: "Que vertigo"
                },
                {
                    id_usuario: 1,
                    nombre: "Tomas Bereciartua",
                    comentario: "No te caigas"
                }
            ]

        },

        {
            id : 1,
            id_usuario:3,
            imagen: "/img/post/girasoles.jpeg",
            image_usuario:"/img/usuario/f768x1-39851_39978_79.jpg",
            pieImagen: "Atardecer entre flores",
            username: "Ojani Noa",
            comentarios:[
                {
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "Donde es?? "
                },
                {
                    id_usuario: 1,
                    nombre: "Oli Costa",
                    comentario: "Me tenes que llevar la proxima!"
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
                    id_usuario: 1,
                    nombre: "Ojani Noa",
                    comentario: "Monte fuji????!!"
                },
                {
                    id_usuario: 1,
                    nombre: "Tomas Bereciartua",
                    comentario: "WOOOW"
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
                    id_usuario: 1,
                    nombre: "Anita Cartijera",
                    comentario: "Volve que te extraño"
                },
                {
                    id_usuario: 1,
                    nombre: "Oli Costa",
                    comentario: "Traeme un regalito"
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
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "Que nivel que manejas"
                },
                {
                    id_usuario: 1,
                    nombre: "Oli Costa",
                    comentario: "Vos si que estas tranquilo"
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
                    id_usuario: 1,
                    nombre: "Cristian Leiva",
                    comentario: "Tremendo lugar"
                },
                {
                    id_usuario: 1,
                    nombre: "",
                    comentario: "Son los alpes?"
                }
            ]

        },

    ],

    comentarios: [

        {
            id: 1,
            id_usuario:1,
            id_post: 1,
            username: "Cristian Leiva",
            texto: "Fantasma",

        },
        {
            id: 1,
            id_post: 3,
            username: "Anita Cartijera",
            texto: "de chill",
            
        },
        {
            id: 1,
            id_post: 4,
            username: "Ojani Noa",
            texto: "JUUUUJUU",
        },
        {
            id: 1,
            id_post: 2,
            username: "Fran Fontana",
            texto: "primoooo, q vien se te ve jeeejee",
        }

    ],
}

module.exports = data;