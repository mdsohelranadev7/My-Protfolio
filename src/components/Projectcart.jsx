import ProjectCard from './ProjectCard'

/**
 * Projectcart adapter component for backward compatibility
 */
const Projectcart = (props) => {
  // If invoked with legacy props:
  if (props.prductname || props.producttitle || props.productimg) {
    const project = {
      id: props.prductname,
      title: props.prductname,
      description: props.producttitle,
      image: props.productimg,
      category: 'React JS',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveLink: props.livelink,
      githubLink: 'https://github.com/mdsohelranadev7',
    }
    return <ProjectCard project={project} />
  }

  return <ProjectCard {...props} />
}

export default Projectcart
export { ProjectCard }
