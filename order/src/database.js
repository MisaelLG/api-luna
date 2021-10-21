import mongoose from 'mongoose'

//204.93.167.112

mongoose.connect('mongodb://localhost:27017/lunadb',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useFindAndModify:true,
    // useCreateIndex:true

})
   
   
  .then(db => console.log('db lunamovil vps is conneted from order'))
  .catch (error => console.log(error))