import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div>
      <h1>help navbar</h1>
      <NavLink to="helpfaq"></NavLink>
      <NavLink to="helpcontact"></NavLink>

      <Outlet/>
    </div>
  )
}
