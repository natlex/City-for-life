import { Link } from 'react-router-dom'
import './Header.scss' 
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import LogoutWithGoogle from '../LogInPage/AuthWithGoogle/logoutWithGoogle';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuList, Paper } from '@material-ui/core';
import userIcon from '../../images/user-icon.png'

const Header = ({isAuth, imageUrl, userName, email}) => {

   return (
      <div className = "header">
         <div className = "header__container container">
            <ul className = 'header__list'>
               <li>
                  <Link className = "header__link" to = '/'>Город  для  жизни</Link>
               </li>
               <li>
               {isAuth 
               ? 
               <div  className = 'header__user user-header'>
                  <img 
                     className = 'user-header__image' 
                     src={imageUrl ? imageUrl: userIcon}/>
                  <Paper className= 'user-header__menu'>
                     <MenuList
                        id="fade-menu"
                        keepMounted
                        open={true}
                        >
                        <MenuItem><span className = 'user-header__name'>{userName ? userName : 'Нет имени'}</span></MenuItem>
                        <MenuItem>
                           <span className = 'user-header__email'>{email}</span>
                        </MenuItem>
                        <MenuItem><LogoutWithGoogle/></MenuItem>
                     </MenuList>
                  </Paper>
                  
               </div>
               : 
               <Link to = '/login/'><Avatar className='header__avatar'> <VpnKeyIcon/> </Avatar></Link>}
               </li>
            </ul>
         </div>
      </div>
   )
}


const mapStateToProps = (state) => {
   return {
      isAuth: state.loginPage.isAuth,
      imageUrl: state.loginPage.img,
      userName: state.loginPage.userName,
      email: state.loginPage.email
   }
} 

export default connect(mapStateToProps)(Header);

