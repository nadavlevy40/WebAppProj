const UserSchema = new Schema({
   
    role: {
      type: String,
      enum: ['regular', 'admin'],
      default: 'regular'
    }
  });