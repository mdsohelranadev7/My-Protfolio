import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Home from '../Pages/Home'
import About from '../Pages/About'

export const Heder = () => {
    return (
        <>
            <div className="bg-[#333] border-b ">
                <Container>
                    <Flex className={"justify-between py-3"}>

                        <div className="text-white">
                            <h3>sohel rana</h3>
                        </div>

                        <div className="">
                            <ul className='flex items-center gap-x-10 text-white'>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to={"/service"}>Service</Link></li>
                                <li><Link to={"/project"}>Project</Link></li>
                                <li><Link to={"/blog"}>Blog</Link></li>
                                <li><Link to={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="text-blue-500">
                            Download Cv
                        </div>

                    </Flex>

                </Container>
             


            </div>

        </>


    )
}
