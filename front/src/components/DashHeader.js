import { Link } from 'react-router-dom'

const DashHeader = () => {
  const content = (
    <header className="dash-header">
      <div className="dash-header__container">
        <Link to="/dash/projects">
          <h1 className="dash-header__title">HubX Consulting</h1>
        </Link>
        <nav className="dash-header__nav"></nav>
      </div>
    </header>
  )
  return content
}

export default DashHeader