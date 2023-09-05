import Link from '@/components/Link'
import Image from '@/components/Image'
import ArrowUpRight from 'public/static/images/arrow-up-right.svg'

const ProjectCard = ({ title, description, imgSrc, href }) => {
  return (
    <>
      <section className=" relative mx-auto my-10 px-4 ">
        <div className=" mx-auto min-h-[500px] max-w-5xl rounded-2xl bg-gray-900">
          <div className="group flex min-h-[500px]  flex-col lg:flex-row">
            <div className=" group/title grow-0 cursor-pointer px-6 pt-8 pb-6 lg:max-w-sm lg:pl-12">
              <Link href={href} aria-label={`Link to ${title}`}>
                <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
                <div className="py-6 text-gray-400">
                  {description.map((data, index) => (
                    <p key={index} className="pb-1">
                      {data}
                    </p>
                  ))}
                </div>
                <div className=" btn-center group-hover/title:btn-project-hover inline py-4 pl-1 font-bold text-emerald-300">
                  Check out the app
                </div>
                <ArrowUpRight
                  width={16}
                  className="  ml-2 inline duration-500 ease-in-out group-hover/title:translate-x-1"
                />
              </Link>
            </div>
            <div className="flex   flex-col justify-end overflow-hidden rounded-b-2xl md:rounded-2xl">
              <Image
                className="relative origin-bottom-right translate-x-8 scale-95 rounded-2xl bg-contain transition-all duration-700 ease-in-out group-hover:scale-100 md:scale-95 md:group-hover:scale-100 lg:scale-100 lg:group-hover:scale-105"
                src={imgSrc}
                alt={`screenshot of ${title}`}
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectCard
