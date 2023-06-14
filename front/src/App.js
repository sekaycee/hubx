import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Layout from './components/Layout'
import DashLayout from './components/dash/Layout'

import Home from './pages/home'
import Blog from './pages/insights/blog'
import * as sv from './pages/services/index'

import Welcome from './components/dash/Welcome'

import Login from './features/auth/Login'
import Prefetch from './features/auth/Prefetch'
import Register from './features/auth/Register'
import EditUser from './features/users/EditUser'
import UsersList from './features/users/UsersList'
import NewUserForm from './features/users/NewUserForm'
import NewProject from './features/projects/NewProject'
import EditProject from './features/projects/EditProject'
import ProjectsList from './features/projects/ProjectsList'

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        <Route path='services/'>
          <Route index element={<sv.Service />} />
          <Route path='writing' element={<sv.Writing />} />
          <Route path='translation' element={<sv.Translation />} />
          <Route path='proofreading' element={<sv.Proofreading />} />
          <Route path='cv-check' element={<sv.CVCheck />} />
          <Route path='academic' element={<sv.Academic />} />
          <Route path='career' element={<sv.Career />} />
          <Route path='accommodation' element={<sv.Accommodation />} />
          <Route path='conciarge' element={<sv.Conciarge />} />
          <Route path='consultation' element={<sv.Consultation />} />
          <Route path='design' element={<sv.Design />} />
          <Route path='digital-marketing' element={<sv.DigitalMarketing />} />
          <Route path='photography' element={<sv.Photography />} />
          <Route path='programming' element={<sv.Programming />} />
          <Route path='mentorship' element={<sv.Mentorship />} />
        </Route>

        <Route path='blog/'>
          <Route index element={<Blog />} />
        </Route>
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
