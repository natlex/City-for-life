import {useGoogleLogout} from 'react-google-login';
import { connect } from 'react-redux';
import { setUserData } from '../../../redux/loginReducer';
import '../LogInPage.scss'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

const LogoutWithGoogle = ({setUserData}) => {
   const onLogoutSuccess = () => {
      setUserData(null, null, null, false)
   }
   const onFailure = () => {
      console.log('Handle failure cases');
   }

   const {signOut} = useGoogleLogout({
      onLogoutSuccess,
      onFailure,
      clientId
   })

   return (
      <span className = 'button-logout' onClick = {signOut}>
         Выйти
      </span>
   )
}

export default connect(null, {setUserData}) (LogoutWithGoogle)