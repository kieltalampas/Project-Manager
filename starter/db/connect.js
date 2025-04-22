const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://kiel:kiel123@nodeexpressprojects.zcg2ang.mongodb.net/?retryWrites=true&w=majority&appName=TASK-MANAGER';

mongoose.connect(connectionString).then(()=>console.log('CONNECTED TO DB')).catch((err)=>console.log(err));

