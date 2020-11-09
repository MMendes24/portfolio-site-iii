import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'

const NavWrapper = () => {
    const [isSticky, setSticky] = useState(false)
    const ref = useRef(null)
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (
        <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
            <NavBar />
        </div>
    )
}

export default NavWrapper