import React from 'react'
import { Link } from 'react-router-dom'
import './header.css' 
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
   avatar: {
     backgroundColor: theme.palette.info.dark
   },
 }));

const Header = () => {
   const classes = useStyles();
   return (
      <div className = "header">
         <div className = "header__container container">
            <ul className = 'header__list'>
               <li>
                  <Link className = "header__link" to = '/'>Город  для  жизни</Link>
               </li>
               <li>
                  <Link to = '/login/'>
                     <Avatar className={classes.avatar}>
                        <VpnKeyIcon/>
                     </Avatar>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   )
}


export default Header;

