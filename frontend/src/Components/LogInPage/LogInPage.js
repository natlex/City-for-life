import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { useEffect } from 'react';
import './LogInPage.scss'
 

 const LoginPage = () => {   
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailDirty, setEmailDirty] = useState(false);
   const [passwordDirty, setPasswordDirty] = useState(false);
   const [emailError, setEmailError] = useState('E-mail не может быть пустым');
   const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
   const [formValid, setFormValid] = useState(false)


   useEffect( () => {
      if (emailError || passwordError) {
         setFormValid (false)
      }  else {
         setFormValid (true)
      }  
   }, [emailError, passwordError])


   const emailHandler = (e) => {
      setEmail(e.target.value)
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(String(e.target.value).toLowerCase())) {
         setEmailError('Некорректный e-mail')
         if (!e.target.value) {
            setEmailError ('Пароль не может быть пустым')
         }
      }  else {
         setEmailError('')
      }
   }

   const passwordHandler = (e) => {
      setPassword(e.target.value)
      if (e.target.value.length < 4) {
         setPasswordError('Пароль должен быть больше 4 символов')
         if (!e.target.value) {
            setPasswordError ('Пароль не может быть пустым')
         }
      } else {
         setPasswordError('')
      }  
   }


   const blurHandler = (e) => {
      switch (e.target.name) {
         case 'email':
            setEmailDirty (true);
         break;
         case 'password':
            setPasswordDirty (true);
         break;
         default: 
      }
   }

   return (
     <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div className="wrapper">
         <Avatar className="wrapper__avatar">
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Войти
         </Typography>
         <form className="wrapper__form">
            {(emailDirty && emailError) && <div className='wrapper__error'>{emailError}</div>}
           <TextField
             value = {email}
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="email"
             label="Ваш e-mail"
             name="email"  
             autoComplete="email"
             autoFocus
             onChange = {e => emailHandler(e)}
             onBlur = {e => blurHandler(e)}
           />
           {(passwordDirty && passwordError) && <div className='wrapper__error'>{passwordError}</div>}
           <TextField
             value = {password}
             variant="outlined"
             margin="normal"
             required
             fullWidth
             name="password"
             label="Пароль"
             type="password"
             id="password"
             autoComplete="current-password"
             onChange = {e => passwordHandler(e)}
             onBlur = {e => blurHandler(e)}
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className='wrapper__submit'
             disabled = {!formValid}
           >
             Войти
           </Button>
           <Grid container>
             <Grid item xs className= "left">
               <Link href="#" variant="body2">
                 Забыли пароль?
               </Link>
             </Grid>
             <Grid item>
               <Link href="#" variant="body2">
                 {"Зарегистрироваться"}
               </Link>
             </Grid>
           </Grid>
         </form>
       </div>
     </Container>
   );
 }

export default LoginPage;