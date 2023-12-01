import React from 'react'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Layout