module.exports = function (sequelize, dataTypes ) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = "Comentario";

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id_comentarios : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_posteos : {
            type : dataTypes.INTEGER
        },
        id_usuarios : {
            type : dataTypes.INTEGER
        },
        comentario : {
            type : dataTypes.TEXT, 
            allowNull: false
        }
        
    } 

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "comentarios",
        timestamps : true,
        underscored : false
    }

    /* 5to paso : crear el metodo define() con los 3 parametros */
    
    let Comentario = sequelize.define(alias, cols, config);

    /* 5.5 paso: crear las relaciones */

    /*  retornar el valor del modelo */

    return Comentario;
}