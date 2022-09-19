create schema proyecto_data;
use proyecto_data;
create table usuarios(
            id int unsigned primary key auto_increment,
            username varchar(50) unique not null,
            mail varchar(100) not null,
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
		    foreign key (id_usuarios) references usuarios(id),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
)

create table comentarios(
            id_comentarios int unsigned primary key auto_increment,
            id_posteos int unsigned,
            id_usuarios int unsigned,
            comentario text not null,
            foreign key (id_usuarios) references usuarios(id),
			foreign key (id_posteos) references posteos(id),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into usuarios (`id`, `mail`, `contrasenia`, `foto_perfil`, `fecha`, `dni`)
values (default, 'franfontana@hotmail.com', 'ff4345', '/img/usuario/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg', '2018-12-9', 43244245  );

insert into usuarios (`id`, `mail`, `contrasenia`, `foto_perfil`, `fecha`, `dni`)
values (default, 'tomasbereciartua@gmail.com', 'tb4569', '/img/usuario/360_F_90127256_86LvAGl04mOoZH1OkBnQ63G9CLsFWucV.jpg', '1998-12-12', 41924431  );

insert into usuarios (`id`, `mail`, `contrasenia`, `foto_perfil`, `fecha`, `dni`)
values (default, 'Ojani88@hotmail.com', 'gfgfg1345', '/img/usuario/f768x1-39851_39978_79.jpg', '1987-4-20', 35656565  );

insert into usuarios (`id`, `mail`, `contrasenia`, `foto_perfil`, `fecha`, `dni`)
values (default, 'AniAnita@gmail.com', 'ani95678', '/img/usuario/gubJ8-s0_400x400.jpg', '1978-4-3', 34224591  );

insert into usuarios (`id`, `mail`, `contrasenia`, `foto_perfil`, `fecha`, `dni`)
values (default, 'Leiva3000@gmail.com', 'barracas383', '/img/usuario/hqdefault.jpg', '1965-3-9', 23545623 );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,1,'/img/post/aureora.jpeg', 'cali' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,3,'/img/post/lagonieve.jpeg', 'pink lake' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,4,'/img/post/lagorosa.jpeg', 'la rioja' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,2,'/img/post/desierto.jpeg', 'mar del plata' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,2,'img/post/puente.jpeg', 'san bernardooo' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,5,'/img/post/girasoles.jpeg', 'australia' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,1,'/img/post/montefuji.jpeg', 'conociendo alaska' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,2,'/img/post/sidney.jpeg', 'muralla china' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,3,'/img/post/cabaña.jpeg', 'de viajee' );

insert into posteos (`id`,`id_usuarios`,`imagen`,`pie_imagen`)
values (default,5,'/img/post/monte.jpeg', 'montee fujii' );


insert into comentarios (`id_comentarios`,`id_posteos`,`id_usuarios`,`comentario`)
values (default,2,4, 'traemee un regalito' );

insert into comentarios (`id_comentarios`,`id_posteos`,`id_usuarios`,`comentario`)
values (default,2,1, 'fantasma' );

insert into comentarios (`id_comentarios`,`id_posteos`,`id_usuarios`,`comentario`)
values (default,3,1, 'buena foto' );

insert into comentarios (`id_comentarios`,`id_posteos`,`id_usuarios`,`comentario`)
values (default,1,3, 'buuurro' );