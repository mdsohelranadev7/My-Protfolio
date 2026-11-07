import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

export const Heder = () => {
    return (
        <Container>
            <div className="">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/service"}>Service</Link></li>
                    <li><Link to={"/project"}>Project</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>

        </Container>
    )
}
