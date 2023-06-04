import { store } from '../../app/store'
import { projectsApiSlice } from '../projects/projectsApiSlice'
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
  useEffect(() => {
    console.log('subscribing')
    const projects = store.dispatch(projectsApiSlice.endpoints.getProjects.initiate())
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    return () => {
      console.log('unsubscribing')
      projects.unsubscribe()
      users.unsubscribe()
    }
  }, [])
  return <Outlet />
}

export default Prefetch