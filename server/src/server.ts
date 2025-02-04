const forceDatabaseRefresh = false;

import express from 'express';
import router from './router/index.ts';
import sequelize from './config/connection';

const app = express();
const PORT = process.env.PORT || 3001;

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
