import React from 'react'
import Container from '../components/Container'

const Home = () => {
  return (
    <Container>
      <div>

        <span className='pt-20'>Hello i,m</span>

        <h1>Md <span>Sohel Rana</span></h1>

        <h2>Web Developer</h2>

        <p class="desc">
          I'm a passionate <strong>web developer</strong> who loves to build
          modern and responsive websites. I enjoy turning ideas into real
          products using clean code and creative design.
        </p>

        <div class="btns">
          <a href="#projects" class="btn primary">View My Projects →</a>
          <a href="#contact" class="btn outline">Contact Me</a>
        </div>

      </div>
    </Container>
  )
}

export default Home