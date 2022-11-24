module.exports = function (sequelize, dataTypes ) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = "Usuario";

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        username : {
            type : dataTypes.STRING,
        },
        mail : {
            type : dataTypes.STRING
        },
        contrasenia : {
            type : dataTypes.STRING
        },
        foto_perfil : {
            type : dataTypes.STRING
        },
        fecha : {
            type : dataTypes.DATE
        },
        dni : {
            type : dataTypes.STRING
        }
    } 

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "usuarios",
        timestamps : true,
        underscored : false
    }

    /* 5to paso : crear el metodo define() con los 3 parametros */
    
    let Usuario = sequelize.define(alias, cols, config);

    /* 5.5 paso: crear las relaciones */

    Usuario.associate = function(models) {

        Usuario.hasMany(models.Posteo, {
            foreignKey: 'id_usuarios'
        })

        Usuario.belongsToMany( models.Usuario, {
            as : 'mis_seguidores',
            through:'seguidores',
            foreignKey : 'id_seguido',
            otherKey:'id_seguidor',
            timestamps:true,
            onDelete: 'cascade'
        })

        Usuario.belongsToMany( models.Usuario, {
            as : 'mis_seguidos',
            through:'seguidores',
            foreignKey : 'id_seguidor',
            otherKey:'id_seguido',
            timestamps:true,
            onDelete: 'cascade'
        })
    }

    /*  retornar el valor del modelo */

    return Usuario;
}