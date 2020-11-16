import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { createConnection } from 'typeorm';

import dbConfig from './db';
import accountRouter from './routes/account-router';

// **************************************************
import { getRepository } from 'typeorm';
import Account from './entities/account';

// const test = async () => {
//   try {
//     const db = await createConnection(dbConfig);
//     const accountRepository = getRepository(Account);
//     const allAccounts = await accountRepository.find();
//     console.log(allAccounts);
//   } catch (error) {
//     console.log(error);
//   }
// };
// test();

// createConnection(dbConfig)
//   .then(async (connection) => {
//     console.log(connection);
//     console.log(' o Successfully connection to databese on port', 5432, '>>> ');

//     // const accountRepository = getRepository(Account);
//     // const allAccounts = await accountRepository.find();
//     // console.log('Select : ', allAccounts);

//     // console.log(allAccounts[0]);
//     // console.log(allAccounts[0].id);

//     await connection.close();
//   })
//   .catch((err) => {
//     //console.log(err);
//     console.log(' x Failed to connection to databese on port', 5432, '!!! ');
//   });
// **************************************************

const app: Express = express();

app.set('apiPort', 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hi, from server "localhost:' + app.get('apiPort') + '"');
});

app.use('/api', accountRouter);

app.listen(app.get('apiPort'), () => {
  console.log(' o Server runinig on port', app.get('apiPort'), '>>> ');
});
