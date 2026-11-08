import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import hero from '../assets/hero.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import About from './About'
import Service from './Service'


const Home = () => {
  return (
    // bg-[#080F1B]
    <div className="">
      <div className="border-b">
        <Container>
          <Flex className={"justify-between"}>
            <div className='py-30 '>

              <span className='text-2xl text-blue-500'>Hello i,m</span>
              <h1 className='text-6xl my-3 '>Md <span className='text-blue-800'>Sohel Rana</span></h1>
              <h2 className='text-4xl'>Web Developer</h2>

              <p className='text-blue-400 my-4'>
                I'm a passionate <strong>web developer</strong> who loves to build <br />
                modern and responsive websites. I enjoy turning ideas <br /> into real
                products using clean code and creative design.
              </p>

              <div className='flex gap-x-6'>
                <button className='px-5 py-3 border rounded-4xl  bg-linear-to-r from-cyan-600 to-blue-400 text-white'>View My Projects</button>
                <button className='px-5 py-3  rounded-4xl border border-blue-400'>Contact Me</button>
              </div>


              <div className=" flex  gap-x-3 text-3xl mt-6">
                <Link to={"/"}><FaGithub /></Link>
                <Link to={"/"}><FaLinkedin /></Link>
                <Link to={"/"}><FaFacebook /></Link>
                <Link to={"/"}><FaYoutube /></Link>
              </div>

            </div>

            <div className="">
              <Image srcimg={hero} />

            </div>
          </Flex>
        </Container>
      </div>
      <About />
      <Service />
    </div>
  )
}

export default Home