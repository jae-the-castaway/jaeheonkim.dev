import Image from '@/components/Image'
import ArrowRightSolid from '../public/static/images/arrow-right-solid.svg'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className=" container relative mx-auto max-w-xl px-4 md:max-w-2xl lg:max-w-4xl    ">
      <div className=" mx-auto flex flex-col justify-between md:flex-row">
        <div className="mr-2 pb-5  lg:mr-4">
          <h6 className="subheader margin-bottom-8 text-xs font-semibold text-gray-700 dark:text-gray-300">
            Hi, nice to meet you!
          </h6>
          <h1 className="mb-4 text-4xl font-bold">I'm Jaeheon Kim</h1>
          <h4 className="text-xl leading-8 text-gray-700 dark:text-gray-300 ">
            Web developer from South Korea creating beautiful, responsive websites for a better user
            experience.
          </h4>
          <h4 className="mb-4 text-xl leading-8 text-gray-700 dark:text-gray-300">
            I am currently learning back-end web development.
          </h4>
          <Link
            className="btn-primary group py-4 font-bold text-xl text-primary-700 dark:text-primary-300"
            href={'/about'}
          >
            
            Get to know me
          </Link>
        </div>
        <div className=" flex flex-col justify-center md:max-w-[50%]">
          <Image
            src={'/static/images/profile.jpg'}
            width={1000}
            height={0}
            className=" max-w-full rounded-2xl"
            alt="picture of Jaeheon kim"
          />
        </div>
      </div>
      <div className="divider-vertical"></div>
    </section>
  )
}

export default HeroSection
