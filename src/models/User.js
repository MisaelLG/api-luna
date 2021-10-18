import mongo from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongo.Schema ({

    username:{
        type:String,
        unique:true,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        require:true
    },
    roles:[{

        ref:"Role",
        type:mongo.Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
}
);

    userSchema.statics.encryptPassword = async (password) => {
      const salt = await bcrypt.genSalt(1)
      return await bcrypt.hash(password, salt)
    }
    userSchema.statics.comparePassword = async (password, recivedPassword) => {
        return await bcrypt.compare(password, recivedPassword)
    }

export default mongo.model( 'User', userSchema );