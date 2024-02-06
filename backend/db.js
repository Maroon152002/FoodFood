//chat gpt code starts here
const mongoose = require('mongoose');

const mongoURI = 'mongodb://gofood:@Face2002@ac-soedt2p-shard-00-00.r7ocbqj.mongodb.net:27017,ac-soedt2p-shard-00-01.r7ocbqj.mongodb.net:27017,ac-soedt2p-shard-00-02.r7ocbqj.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-kquotb-shard-0&authSource=admin&retryWrites=true&w=majority';
// const mongoURI = 'mongodb+srv://gofood:@Face2002@cluster0.r7ocbqj.mongodb.net/';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected");

    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    console.log(data);
  } catch (err) {
    console.error("Connection error:", err);
  }
  if (err) console.log("---", err)
  else {
    console.log("connected");
    const fetched_data = await mongoose.connection.destroy.collection("food_items");
    fetched_data.find({}).toArray(async function (err, data) {
      const foodCategory = await mongoose.connection.destroy.collection("foodCategory");
      foodCategory.find({}).toArray(function (err, catData) {
        if (err) console.log(err);
        else {
          global.food_items = data;
          global.food_items = catdata;

        }
      })
      // if(err) console.log(err);
      // else{
      //   global.food_items = data;
      // }
    })
  }
};

module.exports = mongoDB;
//chatgpt code ends here

mongoose.connect('mongodb://127.0.0.1:27017/createUser');

// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://gofood:@Face2002@cluster0.r7ocbqj.mongodb.net/gofoodmern?retryWrites=true&w=majority'
// const mongoDB = async () => {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         if (err) console.log("---", err)
//         else {
//             console.log("connected");
//             const fetched_data = await mongoose.connection.db.collection("food_items");
//             fetched_data.find({}).toArray(function (err, data) {
//                 if (err) console.log(err);
//                 else console.log(data);
//             })
//         }
//     });
// }

// module.exports = mongoDB;


// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'athus' });
// kitty.save().then(() => console.log('meow'));

// </rewritten_selection_following_instructions>
