module.exports = function (sequelize, dataTypes) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */
  
    let alias = "Seguidor";
  
    /* 3er paso : Es crear una variable con la extructura de la tabla */
  
    let cols = {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
      },
      id_seguido: {
        type: dataTypes.INTEGER
      },
      id_seguidor: {
        type: dataTypes.INTEGER
      },
    }
  
    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
      tableName: "seguidores",
      timestamps: true,
      underscored: false
    }
  
    /* 5to paso : crear el metodo define() con los 3 parametros */
  
    let Seguidor = sequelize.define(alias, cols, config);
  
  
    return Seguidor;
  }