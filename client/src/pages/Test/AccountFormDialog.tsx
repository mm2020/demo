import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import ClearIcon from '@material-ui/icons/Clear';

import Paper from '@material-ui/core/Paper';

import apis from '../../api';
import { id_T, password_T, account_T, inputState_T } from '../Type';

type Props = {
  formType: 'SignUp' | 'Edit' | 'Delete';
  open: boolean;
  targetAccount?: account_T;
  idList?: Array<id_T>;
  doClose: () => void;
};

export default function (props: Props) {
  const [open, isOpen] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<account_T>({ id: '', password: '' });
  const [idList, setIdList] = useState<Array<id_T>>(Array(0));

  const [id, setId] = useState<id_T>('');
  const [password, setPassword] = useState<password_T>('');
  const [cfmPassword, setCfmPassword] = useState<password_T>('');
  const [inputIdState, setInputIdState] = useState<inputState_T>({
    error: false,
    messeage: '',
  });
  const [inputPasswordState, setInputPasswordState] = useState<inputState_T>({
    error: false,
    messeage: '',
  });
  const [inputCfmPasswordState, setInputCfmPasswordState] = useState<inputState_T>({
    error: false,
    messeage: '',
  });

  useEffect(() => {
    if (props.targetAccount) {
      setCurrentAccount(props.targetAccount);
    }
    if (props.idList) {
      setIdList(props.idList);
    }
    isOpen(props.open);
  }, [props.open]);

  function handleClose() {
    setId('');
    setPassword('');
    setCfmPassword('');
    setInputIdState({ error: false, messeage: '' });
    setInputPasswordState({ error: false, messeage: '' });
    setInputCfmPasswordState({ error: false, messeage: '' });
    isOpen(false);
    props.doClose();
  }

  function handleInput(event: any) {
    let error: boolean = true;
    let messeage: string = '';

    if (event.target.id == 'id') {
      const id: id_T = event.target.value;
      setId(id);
      if (id.length == 0) {
        messeage = '必須項目です！';
      } else if (!id.match(/^[A-Za-z0-9]+$/)) {
        messeage = '半角英数字のみ使用可能です！';
      } else if (idList.indexOf(id) !== -1) {
        messeage = 'このIDはすでに使われています！';
      } else {
        error = false;
      }
      setInputIdState({ error: error, messeage: messeage });
    } else if (event.target.id == 'password') {
      const password: password_T = event.target.value;
      setPassword(password);
      if (password.length == 0) {
        messeage = '必須項目です！';
      } else if (!password.match(/^[A-Za-z0-9]+$/)) {
        messeage = '半角英数字のみ使用可能です！';
      } else {
        error = false;
      }
      setInputPasswordState({ error: error, messeage: messeage });
      if (password == cfmPassword) {
        setInputCfmPasswordState({ error: false, messeage: '' });
      }
    } else if (event.target.id == 'cfmPassword') {
      const cfmPassword: password_T = event.target.value;
      setCfmPassword(cfmPassword);
      if (cfmPassword.length == 0) {
        messeage = '必須項目です！';
      } else if (!cfmPassword.match(/^[A-Za-z0-9]+$/)) {
        messeage = '半角英数字のみ使用可能です！';
      } else if (cfmPassword !== password) {
        messeage = 'パスワードが不一致です！';
      } else {
        error = false;
      }
      setInputCfmPasswordState({ error: error, messeage: messeage });
    } else {
    }
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
        .then((res) => {})
        .catch((error) => {
          window.alert('予期せぬエラーが発生しました！');
        });
      handleClose();
    }
  }

  async function handleEdit() {
    await apis
      .updateAnAccount(currentAccount.id, { id: currentAccount.id, password: password })
      .then((res) => {})
      .catch((error) => {
        window.alert('予期せぬエラーが発生しました！');
      });
    handleClose();
  }

  async function handleDelete() {
    await apis
      .deleteAnAccount(currentAccount.id)
      .then((res) => {})
      .catch((error) => {
        window.alert('予期せぬエラーが発生しました！');
      });

    handleClose();
  }

  if (props.formType == 'SignUp') {
    return (
      <Dialog open={open} onClose={() => handleClose()} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>新規作成</DialogTitle>
        <DialogContent>
          <DialogContentText>
            アカウントを新規作成します。
            <br />
            ID(半角英数字)とパスワード(半角英数字)を入力してください。
          </DialogContentText>
          <TextField
            margin='dense'
            id='id'
            value={id}
            onChange={handleInput}
            label='新しいID'
            type='text'
            error={inputIdState.error}
            helperText={inputIdState.messeage}
            fullWidth
          />
          <TextField
            margin='dense'
            id='password'
            value={password}
            onChange={handleInput}
            label='新しいパスワード'
            type='password'
            error={inputPasswordState.error}
            helperText={inputPasswordState.messeage}
            fullWidth
          />
          <TextField
            margin='dense'
            id='cfmPassword'
            value={cfmPassword}
            onChange={handleInput}
            label='新しいパスワード(確認)'
            type='password'
            error={inputCfmPasswordState.error}
            helperText={inputCfmPasswordState.messeage}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='inherit'>
            キャンセル
          </Button>
          <Button onClick={handleSignUp} color='primary'>
            新規登録
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else if (props.formType == 'Edit') {
    return (
      <Dialog open={open} onClose={() => handleClose()} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>編集</DialogTitle>
        <DialogContent>
          <DialogContentText>
            アカウントを編集します。
            <br />
            ID(半角英数字)とパスワード(半角英数字)を入力してください。
          </DialogContentText>
          <TextField
            margin='dense'
            id='currentId'
            value={currentAccount.id}
            disabled={true}
            label={'現在のID'}
            type='text'
            fullWidth
          />
          <TextField
            margin='dense'
            id='id'
            value={id}
            disabled={true}
            //onChange={handleInput}
            label='新しいID'
            type='text'
            error={inputIdState.error}
            helperText={inputIdState.messeage}
            fullWidth
          />
          <TextField
            margin='dense'
            id='currentPassword'
            value={currentAccount.password}
            disabled={true}
            label={'現在のパスワード'}
            type='text'
            fullWidth
          />
          <TextField
            margin='dense'
            id='password'
            value={password}
            onChange={handleInput}
            label='新しいパスワード'
            type='password'
            error={inputPasswordState.error}
            helperText={inputPasswordState.messeage}
            fullWidth
          />
          <TextField
            margin='dense'
            id='cfmPassword'
            value={cfmPassword}
            onChange={handleInput}
            label='新しいパスワード(確認)'
            type='password'
            error={inputCfmPasswordState.error}
            helperText={inputCfmPasswordState.messeage}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='inherit'>
            キャンセル
          </Button>
          <Button onClick={handleEdit} color='primary'>
            編集
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else if (props.formType == 'Delete') {
    return (
      <Dialog open={open} onClose={() => handleClose()} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>削除</DialogTitle>
        <DialogContent>
          <DialogContentText>
            アカウントを削除します。
            <br />
          </DialogContentText>
          <TextField
            margin='dense'
            id='currentId'
            value={currentAccount.id}
            disabled={true}
            label={'現在のID'}
            type='text'
            fullWidth
          />
          <TextField
            margin='dense'
            id='currentPassword'
            value={currentAccount.password}
            disabled={true}
            label={'現在のパスワード'}
            type='text'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='inherit'>
            キャンセル
          </Button>
          <Button onClick={handleDelete} color='secondary'>
            削除
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
}

// export const FormDialog: React.FC<Props> = ({ title, isOpen, ButtonText, doClose }) => {};
