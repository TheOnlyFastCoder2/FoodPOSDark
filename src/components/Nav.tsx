import Logo from 'imgs/Logo.png'

import IconHome from 'lib/icons/Home';
import IconDiscount from 'lib/icons/Discount';
import IconDashboard from 'lib/icons/Dashboard';
import IconMessage from 'lib/icons/Message';
import IconNotification from 'lib/icons/Notification';
import IconSetting from 'lib/icons/Setting';

import IconLogOut from 'lib/icons/Log Out';

export default function () {
  return  (
    <nav className="Nav">
      <div className="Nav_logo">
          <img src={Logo}/>
      </div>
      <ul className="container">
        <li className="Nav_route">
          <a className="Nav_route_button"> <IconHome/> </a>
        </li>
        <li className="Nav_route">
          <a className="Nav_route_button"> <IconDiscount/> </a>
        </li>
        <li className="Nav_route">
          <a className="Nav_route_button"> <IconDashboard /> </a>
        </li>
        <li className="Nav_route">
          <a className="Nav_route_button"> <IconMessage /> </a>
        </li>
        <li className="Nav_route">
          <a className="Nav_route_button"> <IconNotification /> </a>
        </li>
        <li className="Nav_route">
          <a className="Nav_route_button"> <IconSetting /> </a>
        </li>
      </ul>
    </nav>
  )
}