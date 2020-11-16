import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';

import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Box from '@material-ui/core/Box';

import Paper from '@material-ui/core/Paper';

import apis from '../../api';
import { id_T, password_T, account_T, inputState_T } from '../Type';
import AccountFormDialog from './AccountFormDialog';

export default function () {
  const [accounts, setAccounts] = useState<Array<account_T>>(Array(0));
  const [targetAccount, setTargetAccount] = useState<account_T>({ id: '', password: '' });
  const [idList, setIdList] = useState<Array<id_T>>(Array(0));
  const [openSignUpForm, isOpenSignUpForm] = useState<boolean>(false);
  const [openEditForm, isOpenEditForm] = useState<boolean>(false);
  const [openDeleteForm, isOpenDeleteForm] = useState<boolean>(false);

  useEffect(() => {
    seeAccountTable();
  }, [openSignUpForm, openEditForm, openDeleteForm]);

  function seeAccountTable() {
    apis
      .readAllAccounts()
      .then((accounts) => {
        setAccounts(accounts.data.data);
        const idList: Array<id_T> = accounts.data.data.map((account: account_T) => {
          return account.id;
        });
        setIdList(idList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleOpenSignUpForm() {
    isOpenSignUpForm(true);
  }
  function handleCloseSignUpForm() {
    isOpenSignUpForm(false);
  }
  function handleOpenEditForm(props: account_T) {
    setTargetAccount(props);
    isOpenEditForm(true);
  }
  function handleCloseEditForm() {
    isOpenEditForm(false);
  }
  function handleOpenDeleteForm(props: account_T) {
    setTargetAccount(props);
    isOpenDeleteForm(true);
  }
  function handleCloseDeleteForm() {
    isOpenDeleteForm(false);
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      table: {
        minWidth: 500,
      },
    })
  );

  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <div style={{ width: '100%' }}>
          <Box display='flex' p={1} bgcolor='background.paper'>
            <Box m='auto' flexGrow={1000}>
              <Typography variant='h5'>アカウント</Typography>
            </Box>
            <Box m='auto'>
              <Tooltip title='新規登録' placement='top'>
                <IconButton aria-label='sign up' onClick={() => handleOpenSignUpForm()}>
                  <AddBoxIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </div>

        <TableContainer>
          <Table className={classes.table} aria-label='account table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>
                  <Typography variant='h6'>ID</Typography>
                </TableCell>
                <TableCell align='left'>
                  <Typography variant='h6'>パスワード</Typography>
                </TableCell>
                <TableCell padding='checkbox' align='center'></TableCell>
                <TableCell padding='checkbox' align='center'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell align='right'>{account.id}</TableCell>
                  <TableCell align='right'>{account.password}</TableCell>
                  <TableCell align='center'>
                    <Tooltip title='編集' placement='top'>
                      <IconButton
                        aria-label='edit'
                        size='small'
                        onClick={() => handleOpenEditForm(account)}
                      >
                        <EditIcon fontSize='small' />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell align='center'>
                    <Tooltip title='削除' placement='top'>
                      <IconButton
                        aria-label='delete'
                        size='small'
                        onClick={() => handleOpenDeleteForm(account)}
                      >
                        <DeleteIcon fontSize='small' />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <AccountFormDialog
        formType='SignUp'
        open={openSignUpForm}
        idList={idList}
        doClose={() => handleCloseSignUpForm()}
      />
      <AccountFormDialog
        formType='Edit'
        open={openEditForm}
        targetAccount={targetAccount}
        idList={idList}
        doClose={() => handleCloseEditForm()}
      />
      <AccountFormDialog
        formType='Delete'
        open={openDeleteForm}
        targetAccount={targetAccount}
        doClose={() => handleCloseDeleteForm()}
      />
    </React.Fragment>
  );
}
