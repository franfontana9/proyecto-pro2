module.exports = function (sequelize, dataTypes ) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = "Posteo";

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_usuarios : {
            type : dataTypes.STRING
        },
        imagen : {
            type : dataTypes.STRING
        },
        pie_imagen : {
            type : dataTypes.TEXT
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    } 

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "posteos",
        timestamps : true,
        underscored : false
    }

    /* 5to paso : crear el metodo define() con los 3 parametros */
    
    let Posteo = sequelize.define(alias, cols, config);

    /* 5.5 paso: crear las relaciones */

    Posteo.associate = function(models) {
        Posteo.belongsTo( models.Usuario, {
            as : 'Usuario',
            foreignKey : 'id_usuarios',
            onDelete: 'cascade' 
        })

        Posteo.hasMany( models.Comentario, {
            as : 'comentarios',
            foreignKey : 'id_posteos',
            onDelete: 'cascade' 
        })

    }

    /*  retornar el valor del modelo */

    return Posteo;
}