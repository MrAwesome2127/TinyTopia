const forceDatabaseRefresh = false;

import express from 'express';
import cors from 'cors';
import router from './src/router/index.ts';
import sequelize from './src/config/connection.ts';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use(express.static('../client/dist'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


sequelize.sync({force: forceDatabaseRefresh} ).then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
