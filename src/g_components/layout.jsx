import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>
            
            <div className="px-2 sm:px-24">
                <NavBar />
                {children}
            </div>

        </>
    )
}

export default Layout
