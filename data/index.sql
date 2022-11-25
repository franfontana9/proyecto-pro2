create schema proyecto_data;

use proyecto_data;

create table usuarios(
            id int unsigned primary key auto_increment,
            username varchar(50) unique not null,
            mail varchar(100) unique not null ,
            contrasenia varchar(100) not null,
            foto_perfil varchar(100) not null,
            fecha date not null,
            dni char(8) not null,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table posteos(
            id int unsigned primary key auto_increment,
            id_usuarios int unsigned,
            imagen varchar(200) not null,
            pie_imagen text not null,
		    foreign key (id_usuarios) references usuarios(id) ON DELETE CASCADE,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table comentarios(
            id_comentarios int unsigned primary key auto_increment,
            id_posteos int unsigned not null,
            id_usuarios int unsigned not null,
            comentario text not null,
            foreign key (id_usuarios) references usuarios(id) ON DELETE CASCADE,
			foreign key (id_posteos) references posteos(id) ON DELETE CASCADE,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table seguidores(
            id int unsigned primary key auto_increment,
            id_seguido int unsigned not null,
            id_seguidor int unsigned not null,
            foreign key (id_seguido) references usuarios(id) ON DELETE CASCADE,
			foreign key (id_seguidor) references usuarios(id) ON DELETE CASCADE,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


insert into usuarios values(DEFAULT, 'neyjr', 'ney@gmail.com', 'neymar123', '/img/usuario' ,'1998-08-02', '71717171', DEFAULT, DEFAULT);
insert into usuarios values(DEFAULT, 'snoopdog', 'snoopy@gmail.com', 'realg', '/img/usuario' ,'1420-08-02', '42042066', DEFAULT, DEFAULT );
insert into usuarios values(DEFAULT, 'leomessi', 'messi@gmail.com', 'cincodecopa', '/img/usuario/multer-1669238831418.jpeg' ,'2002-08-02', '12312312' , DEFAULT, DEFAULT );
insert into usuarios values(DEFAULT, 'canserBero', 'berobero@gmail.com', 'canserbero', '/img/usuario/multer-1669339552844.jpeg' ,'1999-04-20', '51151166', DEFAULT, DEFAULT );
insert into usuarios values(DEFAULT, '2pac', 'tupac@gmail.com', 'realg', '/img/usuario/multer-1668083668617.jpg' ,'2010-08-02', '12345678', DEFAULT, DEFAULT );

INSERT INTO Posteos values (default, 4 , '/public/img/post/image-1669238245017.jpg', 'par', default, default);
INSERT INTO posteos values (default, 5 , '/img/post/image-1669238526118.jpeg', 'real g', default, default);
INSERT INTO posteos values (default, 1 , '/img/post/image-1669340564021.jpeg', 'sambasambinha', default, default);
INSERT INTO posteos values (default, 2 , '/img/post/image-1669238590472.jpeg', 'buzzy gato', default, default);
INSERT INTO posteos values (default, 3 , '/img/post/image-1669341191451.jpeg', 'de gira', default, default);
INSERT INTO posteos values (default, 5 , '/img/post/image-1669341077579.jpeg', 'W', default, default);
INSERT INTO posteos values (default, 1 , '/img/post/image-1669341259258.jpeg', 'mininha', default, default);
INSERT INTO posteos values (default, 4 , '/img/post/image-1669339735486.jpeg', 'el techo', default, default);
INSERT INTO posteos values (default, 3 , '/img/post/image-1669340904926.jpeg', 'que la chup los periodistas', default, default);
INSERT INTO posteos values (default, 3 , '/img/post/image-1669340783672.jpeg', 'de gira', default, default);

INSERT INTO comentarios values (default, 1, 1, 'fotoon', default, default);
INSERT INTO comentarios values (default, 2, 3, 'invitaa', default, default);
INSERT INTO comentarios values (default, 5, 5, 'cuando salimos?', default, default);
INSERT INTO comentarios values (default, 3, 4, 'jajajjaja', default, default);
INSERT INTO comentarios values (default, 4, 2, 'gigooolo', default, default);
INSERT INTO comentarios values (default, 6, 1, 'ooa', default, default);

