import {Field, reduxForm} from 'redux-form'
import {maxLengthText, required, validateEmail} from '../../utils/validators'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import LoginWithGoogle from './AuthWithGoogle/loginWithGoogle';
import Link from '@material-ui/core/Link';
import Element from '../../formControl/formControl';

const maxLength = maxLengthText (20)
const input = Element(TextField)

let LoginForm = ({handleSubmit, setUserData}) => {
   return (
      <form 
         className="wrapper__form"
         onSubmit = {handleSubmit}>
            <div>
               <Field
               component = {input}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               id="email"
               label="Ваш e-mail"
               name="email"  
               autoComplete="email"
               validate = {[required, maxLength, validateEmail]}
             />
            </div>
            <div>
               <Field
               component = {input}
               variant="outlined"
               margin="normal"
               required
               fullWidth
               name="password"
               label="Пароль"
               type="password"
               id="password"
               autoComplete="current-password"
               validate = {[required, maxLength]}
            />
            </div>
        
           <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className='wrapper__submit'
           >
             Войти
           </Button>
           <LoginWithGoogle setUserData = {setUserData}/>
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
   )
}


   LoginForm = reduxForm({
      form: 'login'
   })(LoginForm)

   export default LoginForm