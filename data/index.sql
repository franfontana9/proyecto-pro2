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
