import { Link, Outlet } from "react-router-dom"
import  { default as CrownLogo}  from "../../assets/crown.svg"
import './navigation.styles.scss'

const NavigationBar = ()=>{
  return(
    <>
      <div className="navigation">
        <Link className="navigation_logo_link" to={'/'}>
          <img alt='logo' src={CrownLogo} className='navigation_logo' />
          {/* <CrownLogo /> */}
        </Link>
        <div className="navigation_links">
          <Link className="navigation_link" to={'/shop'}>
            shop
          </Link>
          <Link className="navigation_link" to={'/sign-in'}>
            Sign In
          </Link>
        </div>
      </div>
        <Outlet />
    </>
  )
}

export default NavigationBar