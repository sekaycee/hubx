import { HouseFill } from 'react-bootstrap-icons'
import { useNavigate, useLocation } from 'react-router-dom'

const DashFooter = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onGoHomeClicked = () => navigate('/dash')

  let goHomeBtn = null
  if (pathname !== '/dash') {
    goHomeBtn = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <HouseFill size={16} />
      </button>
    )
  }

  const content = (
    <footer>
      {goHomeBtn}
      <p>Current User:</p>
      <p>Status:</p>
    </footer>
  )
  return content
}

export default DashFooter