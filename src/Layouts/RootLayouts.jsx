import React from 'react'
import { Heder } from './Heder'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

const RootLayouts = () => {
    return (
        <>
            <Heder />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayouts