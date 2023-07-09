import { Link, Outlet } from "react-router-dom"
import  { default as CrownLogo}  from "../../assets/crown.svg"
import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "../../contextApi/contextApi"
import { signOutUser } from "../../utils/firebase.utils"

const NavigationBar = ()=>{
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  
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
          {
            currentUser?(
              <span className="navigation_link" onClick={signOutUser}> SIGN OUT</span>
            ):(
              <Link className="navigation_link" to={'/auth'}>
                Sign In
              </Link>
            )
          }
        </div>
      </div>
        <Outlet />
    </>
  )
}

export default NavigationBar