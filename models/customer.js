module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      // Giving the Customer model a name of type STRING
      name: DataTypes.STRING
    });
  
    Customer.associate = function(models) {
      // Associating Customer with Burger
      // When an Customer is deleted, also delete any associated Burger
      Customer.hasMany(models.Burger, {
        onDelete: "cascade"
      });
    };
  
    return Customer;
  };
  