const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:admintest@cluster0-shard-00-00.wf3eq.mongodb.net:27017,cluster0-shard-00-01.wf3eq.mongodb.net:27017,cluster0-shard-00-02.wf3eq.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-5lb4jj-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true})


