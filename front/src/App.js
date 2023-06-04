import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/public/Home'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import DashLayout from './components/dash/DashLayout'
import Welcome from './features/auth/Welcome'
import UsersList from './features/users/UsersList'
import ProjectsList from './features/projects/ProjectsList'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditProject from './features/projects/EditProject'
import NewProject from './features/projects/NewProject'
import Prefetch from './features/auth/Prefetch'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route element={<Prefetch />}>
        <Route path='/dash' element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path='users'>
            <Route index element={<UsersList />} />
            <Route path=":id" element={<EditUser />} />
            <Route path="new" element={<NewUserForm />} />
          </Route>

          <Route path='projects'>
            <Route index element={<ProjectsList />} />
            <Route path=":id" element={<EditProject />} />
            <Route path="new" element={<NewProject />} />
          </Route>
        </Route>{/* end dash */}
      </Route>
    </Routes>
  )
}

export default App
