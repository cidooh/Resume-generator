import React from 'react'
import Nav2 from '../comps/Nav2'

const Layout2 = ({children}) => {
  return (
    <div>
        <Nav2/>
        <main>{children}</main>
        

    </div>
  )
}

export default Layout2