import {Redirect} from 'react-router-dom'
import {Cookies} from 'js-cookie'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    return <Redirect to="/login" />
  }
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
      />
      <div>
        <h1>Home</h1>
        <h1>Jobs</h1>
      </div>
      <button type="button" onClick={onClickLogOut}>
        Logout
      </button>
    </div>
  )
}
export default Header
