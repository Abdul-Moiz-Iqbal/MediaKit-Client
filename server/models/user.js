const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema =  new Schema({

    firstName:{ type:String, default:null, require:true},
    lastName:{ type:String, default:null, require:true},
    email:{type:String, unique:true, require:true},
    phone:{type:Number, unique:true, },
    password: {type:String, require:true},
    image_url:{type:String ,default:null},
    token:{ type:String, default:null}
})

module.exports = mongoose.model('user',userSchema)
