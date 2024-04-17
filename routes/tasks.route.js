module.exports = app => {
    const tasks = require("../controllers/tasks.controller.js");
  
    var router = require("express").Router();
  
    // Create a new data
    router.post("/", tasks.create);
  
    // Retrieve all data
    router.get("/", tasks.findAll);
  
    // Retrieve a single data with id
    router.get("/:id", tasks.findOne);
  
    // Update a data with id
    router.put("/:id", tasks.update);
  
    // Delete a data with id
    router.delete("/:id", tasks.delete);
  
    // Delete all data
    router.delete("/", tasks.deleteAll);
  
    app.use('/api/tasks', router);
};