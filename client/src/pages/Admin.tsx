import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import apis from '../api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 500,
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

type id_T = string;
type password_T = string;
type account_T = {
  id: id_T;
  password: password_T;
};
type inputState_T = {
  error: boolean;
  messeage: string;
};

export default function () {
  const [id, setId] = useState<id_T>('');
  const [inputIdState, setInputIdState] = useState<inputState_T>({
    error: false,
    messeage: '',
  });
  const [password, setPassword] = useState<password_T>('');
  const [inputPasswordState, setInputPasswordState] = useState<inputState_T>({
    error: false,
    messeage: '',
  });
  const [cfmPassword, setCfmPassword] = useState<password_T>('');
  const [inputCfmPasswordState, setInputCfmPasswordState] = useState<inputState_T>({
    error: false,
    messeage: '',
  });
  const [accounts, setAccounts] = useState<Array<account_T>>(Array(0));
  const [idList, setIdList] = useState<Array<id_T>>(Array(0));
  const [openRegisterForm, isOpenRegisterForm] = useState<boolean>(false);
  const [openEditForm, isOpenEditForm] = useState<boolean>(false);

  useEffect(() => {
    seeAccountTable();
  }, []);

  function seeAccountTable() {
    apis
      .readAllAccounts()
      .then((accounts) => {
        setAccounts(accounts.data.data);
        const idList = accounts.data.data.map((account: account_T) => {
          return account.id;
        });
        setIdList(idList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleOpenRegisterForm() {
    isOpenRegisterForm(true);
  }

  function handleCloseRegisterForm() {
    handleClearId();
    handleClearPassword();
    handleClearCfmPassword();
    isOpenEditForm(false);
  }

  function handleOpenEditForm(account: account_T) {
    isOpenEditForm(true);
    console.log(account);
  }

  function handleCloseEditForm() {
    handleClearId();
    handleClearPassword();
    handleClearCfmPassword();
    isOpenEditForm(false);
  }

  function handleInputId(event: any) {
    const id: id_T = event.target.value;
    setId(id);
    if (id.length == 0) {
      setInputIdState({
        error: true,
        messeage: '必須項目です！',
      });
    } else if (!id.match(/^[A-Za-z0-9]+$/)) {
      setInputIdState({
        error: true,
        messeage: '半角英数字のみ使用可能です！',
      });
    } else if (idList.indexOf(id) !== -1) {
      setInputIdState({
        error: true,
        messeage: 'このIDはすでに使われています！',
      });
    } else {
      setInputIdState({ error: false, messeage: '' });
    }
  }

  function handleClearId() {
    setId('');
    setInputIdState({ error: false, messeage: '' });
  }

  function handleInputPassword(event: any) {
    const password: password_T = event.target.value;
    setPassword(password);
    if (password.length == 0) {
      setInputPasswordState({
        error: true,
        messeage: '必須項目です！',
      });
    } else if (!password.match(/^[A-Za-z0-9]+$/)) {
      setInputPasswordState({
        error: true,
        messeage: '半角英数字のみ使用可能です！',
      });
    } else {
      setInputPasswordState({ error: false, messeage: '' });
    }
    if (password == cfmPassword) {
      setInputCfmPasswordState({ error: false, messeage: '' });
    }
  }

  function handleClearPassword() {
    setPassword('');
    setInputPasswordState({ error: false, messeage: '' });
  }

  function handleInputCfmPassword(event: any) {
    const cfmPassword: password_T = event.target.value;
    setCfmPassword(cfmPassword);
    if (cfmPassword.length == 0) {
      setInputCfmPasswordState({
        error: true,
        messeage: '必須項目です！',
      });
    } else if (!cfmPassword.match(/^[A-Za-z0-9]+$/)) {
      setInputCfmPasswordState({
        error: true,
        messeage: '半角英数字のみ使用可能です！',
      });
    } else if (cfmPassword !== password) {
      setInputCfmPasswordState({
        error: true,
        messeage: 'パスワードが不一致です！',
      });
    } else {
      setInputCfmPasswordState({ error: false, messeage: '' });
    }
  }

  function handleClearCfmPassword() {
    setCfmPassword('');
    setInputCfmPasswordState({ error: false, messeage: '' });
  }

  async function handleSignUp() {
    let error: boolean = false;
    if (id.length == 0) {
      setInputIdState({
        error: true,
        messeage: '必須項目です！',
      });
      error = true;
    }
    if (password.length == 0) {
      setInputPasswordState({
        error: true,
        messeage: '必須項目です！',
      });
      error = true;
    }
    if (cfmPassword.length == 0) {
      setInputCfmPasswordState({
        error: true,
        messeage: '必須項目です！',
      });
      error = true;
    }

    if (!(error || inputIdState.error || inputPasswordState.error || inputCfmPasswordState.error)) {
      const payload = { id: id, password: password };
      await apis
        .createAnAccount(payload)
        .then((res) => {
          seeAccountTable();
        })
        .catch((err) => {
          window.alert('予期せぬエラーが発生しました！');
        });
      handleCloseRegisterForm();
    }
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <h1>Account</h1>

      <Button variant='contained' color='primary' onClick={handleOpenRegisterForm}>
        新規登録
      </Button>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='center'>パスワード</TableCell>
              <TableCell align='center'>編集</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((row) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row' align='center'>
                  {row.id}
                </TableCell>
                <TableCell align='center'>{row.password}</TableCell>
                <TableCell align='center'>
                  <IconButton
                    aria-label='edit'
                    className={classes.margin}
                    size='small'
                    onClick={function () {
                      handleOpenEditForm(row);
                    }}
                  >
                    <EditIcon fontSize='small' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openRegisterForm}
        onClose={handleCloseRegisterForm}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>新規登録</DialogTitle>
        <DialogContent>
          <DialogContentText>
            新規アカウントを登録します。
            <br />
            ID(半角英数字)とパスワード(半角英数字)を入力してください。
          </DialogContentText>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={11}>
                <TextField
                  margin='dense'
                  id='id'
                  value={id}
                  onChange={handleInputId}
                  label='ID'
                  type='text'
                  error={inputIdState.error}
                  helperText={inputIdState.messeage}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label='clear'
                  className={classes.margin}
                  size='small'
                  onClick={handleClearId}
                >
                  <ClearIcon fontSize='inherit' />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={11}>
                <TextField
                  margin='dense'
                  id='password'
                  value={password}
                  onChange={handleInputPassword}
                  label='パスワード'
                  type='password'
                  error={inputPasswordState.error}
                  helperText={inputPasswordState.messeage}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label='clear'
                  className={classes.margin}
                  size='small'
                  onClick={handleClearPassword}
                >
                  <ClearIcon fontSize='inherit' />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={11}>
                <TextField
                  margin='dense'
                  id='cfmPassword'
                  value={cfmPassword}
                  onChange={handleInputCfmPassword}
                  label='パスワード(確認)'
                  type='password'
                  error={inputCfmPasswordState.error}
                  helperText={inputCfmPasswordState.messeage}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label='clear'
                  className={classes.margin}
                  size='small'
                  onClick={handleClearCfmPassword}
                >
                  <ClearIcon fontSize='inherit' />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegisterForm} color='inherit'>
            キャンセル
          </Button>
          <Button onClick={handleSignUp} color='primary'>
            新規登録
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEditForm} onClose={handleCloseEditForm} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>編集</DialogTitle>
        <DialogContent>
          <DialogContentText>
            アカウントを編集します。
            <br />
            ID(半角英数字)とパスワード(半角英数字)を入力してください。
          </DialogContentText>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={12}>
                <TextField
                  margin='dense'
                  id='currentId'
                  disabled={true}
                  label={'現在のID：　' + ''}
                  type='text'
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={11}>
                <TextField
                  margin='dense'
                  id='id'
                  value={id}
                  onChange={handleInputId}
                  label='新しいID'
                  type='text'
                  error={inputIdState.error}
                  helperText={inputIdState.messeage}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label='clear'
                  className={classes.margin}
                  size='small'
                  onClick={handleClearId}
                >
                  <ClearIcon fontSize='inherit' />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={11}>
                <TextField
                  margin='dense'
                  id='currentPassword'
                  disabled={true}
                  label='現在のパスワード：　'
                  type='text'
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={11}>
                <TextField
                  margin='dense'
                  id='password'
                  value={password}
                  onChange={handleInputPassword}
                  label='新しいパスワード'
                  type='password'
                  error={inputPasswordState.error}
                  helperText={inputPasswordState.messeage}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label='clear'
                  className={classes.margin}
                  size='small'
                  onClick={handleClearPassword}
                >
                  <ClearIcon fontSize='inherit' />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={1} alignItems='flex-end'>
              <Grid item xs={11}>
                <TextField
                  margin='dense'
                  id='cfmPassword'
                  value={cfmPassword}
                  onChange={handleInputCfmPassword}
                  label='新しいパスワード(確認)'
                  type='password'
                  error={inputCfmPasswordState.error}
                  helperText={inputCfmPasswordState.messeage}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label='clear'
                  className={classes.margin}
                  size='small'
                  onClick={handleClearCfmPassword}
                >
                  <ClearIcon fontSize='inherit' />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditForm} color='inherit'>
            キャンセル
          </Button>
          <Button onClick={handleCloseEditForm} color='primary'>
            編集
          </Button>
          <Button onClick={handleCloseEditForm} color='secondary'>
            削除
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
