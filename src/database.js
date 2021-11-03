import mongoose from 'mongoose'

//204.93.167.112

mongoose.connect('mongodb://root:2674@localhost:27017/lunadb?ssl=false&authSource=admin',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useFindAndModify:true,
    // useCreateIndex:true

})
   
   
  .then(db => console.log('db lunamovil vps is conneted'))
  .catch (error => console.log(error))