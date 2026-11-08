import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import hero from '../assets/hero.png'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'




const aboutus = [
  { Locations: "Dhaka, Bangladesh" },
  { gmails: "mdsohelrana.dev7@gmail.com" },
  { Learns: "Learning & Growing" },

]



const About = () => {
  return (
    <div className="pt-15">
      <Container>
        <Flex className={"justify-between"}>
          <Image srcimg={hero} srcalt={hero.png} />
          <div className="">
            <h3 className='text-2xl pb-5'>__About Me</h3>
            <h4 className='text-5xl'>Who I am</h4>
            <p className='py-3'>
              I'm Md Sohel Rana, a web developer from Bangladesh. I build responsive <br />
              and user-friendly websites using HTML, CSS, JavaScript, React and <br />
              Tailwind CSS. I enjoy turning ideas into clean, working products, and I <br />
              keep improving my skills by building real projects like an e-commerce <br />
              site and my own portfolio. I'm open to freelance work and new
              opportunities.
            </p>

            <div className="flex  justify-center">

              <div className=" flex items-center gap-x-3   ">
                <IoLocationSharp className='text-4xl' />
                {aboutus.map((item) => {

                  const icon = item.icon

                  return (
                    <div className="" key={"item.Locations"}>

                      
                    </div>
                  )

                })}

              </div>

              <div className=" flex items-center gap-x-3  mx-10 px-10 border-l border-r">
                <MdOutlineEmail className='text-4xl' />
                <span>mdsohelrana.dev7@gmail.com</span>
              </div>

              <div className=" flex items-center gap-x-3">
                <FaGraduationCap className='text-4xl' />
                <span>Learning & <br /> Growing</span>

              </div>

            </div>
          </div>
        </Flex>
      </Container>

    </div>
  )
}

export default About