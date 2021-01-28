import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';
import { Redirect } from "react-router"
import './LogInPage.scss'
import { setUserData } from '../../redux/loginReducer';
import LoginForm from './LogInForm';


   const Login = ({setUserData, isAuth}) => {   
      
   const onSubmit = ({email}) => {
      setUserData(email, null, null, true)
   }

   if (isAuth) {
      return <Redirect push to="/" />
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
         <LoginForm onSubmit = {onSubmit} setUserData = {setUserData}/>
       </div> 
       
     </Container>
   );
 }



 const mapStateToProps = (state) => {
   return {
      isAuth: state.loginPage.isAuth
   }
} 



export default connect(mapStateToProps, {setUserData})(Login);

