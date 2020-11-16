import express from 'express';

import * as accountCtrl from '../controllers/account-ctrl';

const accountRouter = express.Router();

accountRouter.post('/account', accountCtrl.createAnAccount);
accountRouter.get('/account', accountCtrl.readAllAccounts);
accountRouter.put('/account/:id', accountCtrl.updateAnAccount);
accountRouter.delete('/account/:id', accountCtrl.deleteAnAccount);

//////accountRouter.use('/login', acco)

export default accountRouter;
