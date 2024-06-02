const mongoose = require('mongoose')
const Scehma = mongoose.Schema

const mediaKit = new Scehma({
    platform:{type:String, require:true},
    view:{type:Number, default:null},
    videos:{type:Number, default:null},
    followers:{type:Number, default:null}
})