import { Request, Response } from 'express';
import { createConnection, getRepository } from 'typeorm';

import dbConfig from '../db';
import Account from '../entities/account';

export const createAnAccount = async (req: Request, res: Response) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      messeage: 'Error: Blank!',
    });
  }

  let returnValue: any;
  await createConnection(dbConfig)
    .then(async (connection) => {
      try {
        const accountRepository = getRepository(Account);
        const newAccount = await accountRepository.create(req.body);
        await accountRepository.save(newAccount);
        returnValue = res.status(201).json({
          success: true,
        });
      } catch (error) {
        returnValue = res.status(400).json({
          success: false,
          messeage: error,
        });
      } finally {
        await connection.close();
        return returnValue;
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        messeage: error,
      });
    });
};

export const readAllAccounts = async (req: Request, res: Response) => {
  let returnValue: any;
  await createConnection(dbConfig)
    .then(async (connection) => {
      try {
        const accountRepository = getRepository(Account);
        const allAccounts = await accountRepository.find();
        returnValue = res.status(200).json({
          success: true,
          data: allAccounts,
        });
      } catch (error) {
        returnValue = res.status(400).json({
          success: false,
          messeage: error,
        });
      } finally {
        await connection.close();
        return returnValue;
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        messeage: error,
      });
    });
};

export const updateAnAccount = async (req: Request, res: Response) => {
  if (!req.body || !req.params) {
    return res.status(400).json({
      success: false,
      messeage: 'Error: Blank!',
    });
  }

  let returnValue: any;
  await createConnection(dbConfig)
    .then(async (connection) => {
      try {
        const accountRepository = getRepository(Account);
        const targetAccount = await accountRepository.findOne({
          where: {
            id: req.params.id,
          },
        });

        if (!targetAccount) {
          return res.status(404).json({
            success: false,
            messeage: 'Error: N/A!',
          });
        }

        targetAccount.password = req.body.password;
        await accountRepository.save(targetAccount);
        returnValue = res.status(200).json({
          success: true,
        });
      } catch (error) {
        returnValue = res.status(400).json({
          success: false,
          messeage: error,
        });
      } finally {
        await connection.close();
        return returnValue;
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        messeage: error,
      });
    });
};

export const deleteAnAccount = async (req: Request, res: Response) => {
  if (!req.params) {
    return res.status(400).json({
      success: false,
      messeage: 'Error: Blank!',
    });
  }

  let returnValue: any;
  await createConnection(dbConfig)
    .then(async (connection) => {
      try {
        const accountRepository = getRepository(Account);
        const targetAccount = await accountRepository.findOne({
          where: {
            id: req.params.id,
          },
        });

        if (!targetAccount) {
          return res.status(404).json({
            success: false,
            messeage: 'Error: N/A!',
          });
        }

        await accountRepository.remove(targetAccount);
        returnValue = res.status(200).json({
          success: true,
        });
      } catch (error) {
        returnValue = res.status(400).json({
          success: false,
          messeage: error,
        });
      } finally {
        await connection.close();
        return returnValue;
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        messeage: error,
      });
    });
};

// export const updateAnAccount = async (req: Request, res: Response) => {
//   if (!req.body) {
//     return res.status(400).json({
//       success: false,
//       messeage: 'Error: Blank!',
//     });
//   }
//   await createConnection(dbConfig)
//     .then(async (connection) => {
//       try {
//         const accountRepository = getRepository(Account);
//         const targetAccount = await accountRepository.findOne({
//           where: {
//             id: req.params.id,
//           },
//         });

//         if (!targetAccount) {
//           return res.status(404).json({
//             success: false,
//             messeage: 'Error: N/A!',
//           });
//         }

//         targetAccount.password = req.body.password;
//         await accountRepository.save(targetAccount);
//       } catch (error) {
//         console.error('Failed : ', error);
//       } finally {
//         await connection.close();
//       }
//     })
//     .catch((error) => {
//       console.error('Postgres Connection Failed', error);
//     });
// };

// export const deleteAnAccount = async (req: Request, res: Response) => {
//   await createConnection(dbConfig)
//     .then(async (connection) => {
//       try {
//         const accountRepository = getRepository(Account);
//         const targetAccount = await accountRepository.findOne({
//           where: {
//             id: req.params.id,
//           },
//         });

//         if (!targetAccount) {
//           return res.status(404).json({
//             success: false,
//             messeage: 'Error: N/A!',
//           });
//         }
//         await accountRepository.remove(targetAccount);
//       } catch (error) {
//         console.error('Failed : ', error);
//       } finally {
//         await connection.close();
//       }
//     })
//     .catch((error) => {
//       console.error('Postgres Connection Failed', error);
//     });
// };

// export const readAllAccounts = async (req: Request, res: Response) => {
//   try {
//     const db = await createConnection(dbConfig);
//     const accountRepository = getRepository(Account);
//     const allAccounts = await accountRepository.find();
//     await db.close();
//     return res.status(200).json({
//       success: true,
//       data: allAccounts,
//     });
//   } catch (error) {
//     await db.close();
//     return res.status(400).json({
//       success: false,
//       messeage: error,
//     });
//   }
// };
