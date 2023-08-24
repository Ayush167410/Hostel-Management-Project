const mongoose = require('mongoose');
const mongoDB = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopDB');
        const fetched_data = await mongoose.connection.db.collection('users');
        fetched_data.find({}).toArray().then((data)=>{
            console.log(data);
        })
        console.log('Success');
    } catch (error) {
          console.log('Error');
        handleError(error);
      }
    
}
module.exports = mongoDB;