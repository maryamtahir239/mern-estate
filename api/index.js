import exprress from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=> {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.log (err);
    
});
const app = exprress();

app.listen(3000, () => {
    console.log('server is running on port 3000!');
}
);