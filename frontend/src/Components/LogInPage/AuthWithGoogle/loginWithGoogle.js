import {useGoogleLogin} from 'react-google-login';
import {refreshTokenSetup} from '../../../utils/refreshToken'
import googleIcon from '../../../images/google_icon.png'
import { Button } from '@material-ui/core';
import '../LogInPage.scss'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const LoginWithGoogle = ({setUserData}) => {
   const onSuccess = (res) => {
      setUserData(res.profileObj.email, res.profileObj.givenName, res.profileObj.imageUrl, true)

      refreshTokenSetup(res)
   }
   const onFailure = (res) => {
      console.log('Login failed:', res);
   }

   const {signIn} = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: 'offline'
   })

   return (
      <Button 
         onClick = {signIn} 
         className = 'button-google' 
         variant="outlined" 
         color="primary">
         <div className = 'button-google__wrapper'>
               <img className = 'button-google__icon'  src={googleIcon}/>
               <div className = 'button-google__text' >
                  <span>Войти с помощью Google</span>
               </div>
         </div>
      </Button>
   )
}

export default LoginWithGoogle