import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Layout from './components/Layout'
import DashLayout from './components/dash/Layout'

import Home from './pages/home'
import Blog from './pages/insights/blog'
import * as sv from './pages/services/index'
import Jobs from './pages/company/jobs'
import Team from './pages/company/team'
import Contact from './pages/about/contact'
import Intro from './pages/about/intro'
import Press from './pages/about/press'
import Impact from './pages/about/impact'
import HowTos from './pages/about/howTos'
import Podcast from './pages/company/podcast'
import Investors from './pages/company/investors'
import Affiliates from './pages/company/affiliates'
import Terms from './pages/legal/terms'
import Cookies from './pages/legal/cookies'
import Privacy from './pages/legal/privacy'
import Licensing from './pages/legal/licensing'
import Help from './pages/support/help'
import FAQs from './pages/support/faqs'
import Trust from './pages/support/trust'
import Inquiries from './pages/support/inquiries'

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
      {/* Public routes */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={<Contact />} />
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

        <Route path='about'>
          <Route index />
          <Route path='us' element={<Intro />} />
          <Route path='press' element={<Press />} />
          <Route path='how-tos' element={<HowTos />} />
          <Route path='impact' element={<Impact />} />
        </Route>

        <Route path='company'>
          <Route index />
          <Route path='jobs' element={<Jobs />} />
          <Route path='team' element={<Team />} />
          <Route path='podcast' element={<Podcast />} />
          <Route path='investors' element={<Investors />} />
          <Route path='affiliates' element={<Affiliates />} />
        </Route>

        <Route path='legal'>
          <Route index />
          <Route path='terms' element={<Terms />} />
          <Route path='cookies' element={<Cookies />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='licensing' element={<Licensing />} />
        </Route>

        <Route path='support'>
          <Route index />
          <Route path='help' element={<Help />} />
          <Route path='faqs' element={<FAQs />} />
          <Route path='trust' element={<Trust />} />
          <Route path='inquiries' element={<Inquiries />} />
        </Route>
      </Route>

      {/* Dash routes */}
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
        </Route>
      </Route>
    </Routes>
  )
}

export default App
