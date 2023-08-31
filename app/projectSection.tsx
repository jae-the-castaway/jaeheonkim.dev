import Image from '@/components/Image'
import ArrowUpRight from '../public/static/images/arrow-up-right.svg'

function HeroSection() {
  return (
    <>
      {/* Seenit - simple Reddit clone app */}
      <section className=" relative mx-auto my-10 px-4 ">
        <div className=" mx-auto min-h-[500px] max-w-5xl rounded-2xl bg-gray-900">
          <div className="group flex min-h-[500px]  flex-col lg:flex-row">
            <div className=" group/title grow-0 cursor-pointer px-6 pt-8 pb-6 lg:max-w-sm lg:pl-12">
              <a href="https://seenit-reddit-clone.netlify.app" target="_blank">
                <h2 className="text-2xl font-bold text-gray-100">
                  Seenit - Simple Reddit clone app
                </h2>
                <p className="py-6 text-gray-400">
                  Type your favorite subreddit! Simple Reddit clone app only fetching images and
                  videos from any subreddit. <br /> It's built with React and Tailwind.
                </p>
                <div className=" btn-center group-hover/title:btn-project-hover inline py-4 pl-1 font-bold text-emerald-300">
                  Check out the app
                </div>
                <ArrowUpRight
                  width={16}
                  className="  ml-2 inline duration-500 ease-in-out group-hover/title:translate-x-1"
                />
              </a>
            </div>
            <div className="flex   flex-col justify-end overflow-hidden rounded-b-2xl md:rounded-2xl">
              <Image
                className="relative origin-bottom-right translate-x-8 scale-95 rounded-2xl bg-contain transition-all duration-700 ease-in-out group-hover:scale-100 md:scale-95 md:group-hover:scale-100 lg:scale-100 lg:group-hover:scale-105"
                src="/static/images/seenit.png"
                alt="Capture of an website, Seenit"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>
      {/* IP locator */}
      <section className=" relative mx-auto my-10 px-4 ">
        <div className=" mx-auto min-h-[500px] max-w-5xl rounded-2xl bg-gray-900">
          <div className="group flex min-h-[500px]  flex-col lg:flex-row">
            <div className=" group/title grow-0 cursor-pointer px-6 pt-8 pb-6 lg:max-w-sm lg:pl-12">
              <a href="https://jae-the-castaway-ip-tracker.netlify.app" target="_blank">
                <h2 className="text-2xl font-bold text-gray-100">Responsive IP address tracker</h2>
                <p className="py-6 text-gray-400">
                  Search for any IP addresses and see the key information and location. <br />
                  It's built with React and Styled Components.
                </p>
                <div className=" btn-center group-hover/title:btn-project-hover inline py-4 pl-1 font-bold text-emerald-300">
                  Check out the app
                </div>
                <ArrowUpRight
                  width={16}
                  className="  ml-2 inline duration-500 ease-in-out group-hover/title:translate-x-1"
                />
              </a>
            </div>
            <div className="flex   flex-col justify-end overflow-hidden rounded-b-2xl md:rounded-2xl">
              <Image
                className="relative origin-bottom-right translate-x-8 scale-95 rounded-2xl bg-contain transition-all duration-700 ease-in-out group-hover:scale-100 md:scale-95 md:group-hover:scale-100 lg:scale-100 lg:group-hover:scale-105"
                src="/static/images/ip-tracker.png"
                alt="Capture of an website, Seenit"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>
      {/* calculator */}
      <section className=" relative mx-auto my-10 px-4 ">
        <div className=" mx-auto min-h-[500px] max-w-5xl rounded-2xl bg-gray-900">
          <div className="group flex min-h-[500px]  flex-col lg:flex-row">
            <div className=" group/title grow-0 cursor-pointer px-6 pt-8 pb-6 lg:max-w-sm lg:pl-12">
              <a href="https://jaeheonkim-calculator.netlify.app" target="_blank">
                <h2 className="text-2xl font-bold text-gray-100">
                  Responsive Calculator with Multiple Themes
                </h2>
                <p className="py-6 text-gray-400">
                  It's a calculator app with multiple themes using pure CSS and JavaScript.
                </p>
                <div className=" btn-center group-hover/title:btn-project-hover inline py-4 pl-1 font-bold text-emerald-300">
                  Check out the app
                </div>
                <ArrowUpRight
                  width={16}
                  className="  ml-2 inline duration-500 ease-in-out group-hover/title:translate-x-1"
                />
              </a>
            </div>
            <div className="flex   flex-col justify-end overflow-hidden rounded-b-2xl md:rounded-2xl">
              <Image
                className="relative origin-bottom-right translate-x-8 scale-95 rounded-2xl bg-contain drop-shadow-md transition-all duration-700 ease-in-out group-hover:scale-100 md:scale-95 md:group-hover:scale-100 lg:scale-100 lg:group-hover:scale-105 "
                src="/static/images/calculator.png"
                alt="Capture of an website, Seenit"
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

export default HeroSection
