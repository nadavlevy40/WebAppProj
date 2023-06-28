const createUser = async (req, res) => {
    // Existing code
    // ...
  
    const user = new User({
      // Existing fields
      // ...
      role: req.body.role || 'regular' // Set the role based on the request or default to 'regular'
    });
  
    // Save the user to the database
    // ...
  };
  