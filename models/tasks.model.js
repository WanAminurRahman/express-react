module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Task;
  };