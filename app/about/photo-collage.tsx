import Image from '@/components/Image'

function PhotoCollage() {
  return (
    <div className="mx-auto mb-60 mt-60 px-4 md:mt-56 lg:mb-10 lg:mt-24 ">
      <div className="">
        <div className="mx-auto flex h-[900px] max-w-7xl flex-col justify-center gap-3 md:mt-10 lg:mt-0 lg:flex-row">
          <div className="flex flex-col  justify-center gap-3">
            <div className=" h-80 w-full overflow-hidden rounded-t-3xl md:h-80 lg:h-auto  lg:rounded-tr-none">
              <Image
                className=" relative -top-[100px] w-full origin-bottom-right object-cover lg:-top-[0px] "
                src={'/static/images/about/airforce.jpg'}
                alt="profile photo in air force"
                width={200}
                height={200}
              />
            </div>
            <div className="h-80 overflow-hidden  sm:h-80 lg:h-auto lg:rounded-bl-3xl">
              <Image
                className=" relative  top-[0px] w-full object-cover"
                src={'/static/images/about/soldering.jpeg'}
                alt="Jaeheon soldering"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 lg:h-auto">
            <div className=" h-80 overflow-hidden sm:h-80  lg:rounded-tr-3xl">
              <Image
                className=" relative -top-[180px] w-full object-cover sm:-top-[350px] md:-top-[450px] lg:-top-[350px] "
                src={'/static/images/about/couple.jpeg'}
                alt="Maleea and Jae in a forest"
                width={1000}
                height={1000}
              />
            </div>{' '}
            <div className="h-80 overflow-hidden rounded-b-3xl sm:h-80 lg:h-auto lg:rounded-bl-none ">
              <Image
                className="relative -top-[130px] w-full object-cover sm:-top-[350px]  md:-top-[450px] lg:-top-[0px] "
                src={'/static/images/about/hiking-with-camera.jpeg'}
                alt="Jaeheon with a camera sitting in a rock"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoCollage
