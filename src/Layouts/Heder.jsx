import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'

export const Heder = () => {
    return (
        <Container>
            <Flex className={"justify-between"}>
                <div className="">
                    <h3>sohel rana</h3>
                </div>

                <div className="">
                    <ul className='flex items-center gap-x-10'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/service"}>Service</Link></li>
                        <li><Link to={"/project"}>Project</Link></li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
            </Flex>

        </Container>
    )
}
