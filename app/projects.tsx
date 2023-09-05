import Image from '@/components/Image'
import ArrowUpRight from '../public/static/images/arrow-up-right.svg'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
  return (
    <>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <ProjectCard
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
