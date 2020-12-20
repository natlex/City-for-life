import React from 'react';
import { Link } from 'react-router-dom';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import './Header.scss';

const Header = ({value, res}) => {
   return (
      <div className = "header">
         <div className = "header__container container">
            <ul className = 'header__list'>
               <li>
                  <Link className = "header__link" to = '/'>Город  для  жизни</Link>
               </li>
               {value 
               ? 
               <li>{res}</li> 
               :
               <li> 
               <Link to = '/login/'><Avatar className='header__avatar'> <VpnKeyIcon/> </Avatar></Link>
               </li>}
            </ul>
         </div>
      </div>
   )
}


const mapStateToProps = (state) => {
   return {
      value: state.boolean,
      res: state.data
   }
} 

export default connect(mapStateToProps)(Header);

