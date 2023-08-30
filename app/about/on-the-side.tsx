import Image from '@/components/Image'

function OnTheSide() {
  return (
    <div className=" mx-4 my-20">
      <div className=" my-32 mx-auto flex max-w-xl flex-col items-center px-4 md:max-w-2xl lg:max-w-5xl lg:flex-row">
        <div className="pr-6 lg:w-1/2">
          <p className="inline text-2xl text-gray-500">On the side: </p>
          <h3 className="inline text-3xl font-bold text-gray-700">YouTube Channel</h3>
          <p className=" mt-10 mb-4 text-xl text-gray-500">
            In 2018, my girlfriend(my wife now!) and I started a&nbsp;
            <a
              href="https://www.youtube.com/@MaleeaandJae/videos"
              target="_blank"
              className="font-bold text-emerald-700"
            >
              YouTube channel
            </a>
            &nbsp; called "Maleea and Jae", and we have been consistently uploading content ever
            since. This experience has allowed me to learn video editing and videography by watching
            online tutorials, which has improved my content creation skills.
          </p>
          <p className=" mb-4 text-xl text-gray-500">
            As a co-creator of a successful YouTube channel with over 52,000 subscribers, I am
            responsible for managing all aspects of video production, including filming and editing
            all content and creating attractive thumbnails to increase viewer engagement.
          </p>
        </div>
        <div className=" aspect-square w-full flex-auto overflow-hidden rounded-3xl lg:w-1/2  ">
          <Image
            src="/static/images/about-me/youtube-channel.jpg"
            className=" w-full bg-cover"
            alt="Maleea and Jae with plants on a porch"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className=" my-32 mx-auto flex max-w-xl flex-col items-center px-4 md:max-w-2xl lg:max-w-5xl lg:flex-row">
        {' '}
        <div className="pr-6 lg:w-1/2">
          <p className="inline text-2xl text-gray-500">On the side:</p>
          <h3 className="inline text-3xl font-bold text-gray-700"> Walking</h3>
          <p className=" mt-10 mb-4 text-xl text-gray-500">
            Walking is one of my favorite hobby. in fact, I loved it so much that we decided to move
            to Chicago and even sold our car since I didn't really need it anymore.
          </p>
          <p className=" mb-4 text-xl text-gray-500">
            It's a great way to stay active and healthy. But beyond the physical benefits, I also
            love walking beacause it allows me to explore my city in a way that I never could when I
            was driving. I feel like I'm doing my part to contribute to a more sustainable and
            livable city by choosing to walk instead of drive whenever possible.
          </p>
        </div>
        <div className=" aspect-square w-full flex-auto overflow-hidden rounded-3xl lg:w-1/2  ">
          <Image
            src="/static/images/about-me/walking.png"
            className=" w-full bg-cover"
            alt="a book, Walkable City"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className=" my-32 mx-auto flex max-w-xl flex-col items-center px-4 md:max-w-2xl lg:max-w-5xl lg:flex-row">
        <div className="pr-6 lg:w-1/2">
          <p className="inline text-2xl text-gray-500">On the side:</p>
          <h3 className="inline text-3xl font-bold text-gray-700"> Hiking</h3>
          <p className=" mt-10 mb-4 text-xl text-gray-500">
            Did you know South Korea is covered by mountains by 70%? It's a great country to go
            hiking with beautiful four seasons.
          </p>
          <p className=" mb-4 text-xl text-gray-500">
            I make sure to hit the trails at least once a month, with a car-sharing service, Zipcar
            and a delicious stash of trail mix as my trusty sidekicks.
          </p>
        </div>
        <div className=" aspect-square w-full flex-auto overflow-hidden rounded-3xl lg:w-1/2  ">
          <Image
            src="/static/images/about-me/hiking.jpeg"
            className=" relative -top-[150px] w-full bg-cover"
            alt="Maleea and Jae in Red River Gorge"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className=" my-32 mx-auto flex max-w-xl flex-col items-center px-4 md:max-w-2xl lg:max-w-5xl lg:flex-row">
        <div className="pr-6 lg:w-1/2">
          <p className="inline text-2xl text-gray-500">On the side:</p>
          <h3 className="inline text-3xl font-bold text-gray-700"> Playing video games</h3>
          <p className=" mt-10 mb-4 text-xl text-gray-500">
            As an avid gamer, I'm always on the lookout for new titles that offer engaging gameplay
            and interesting storylines. While I enjoy many different types of games.
          </p>
          <p className=" mb-4 text-xl text-gray-500">
            I'm also a discerning critic who appreiciate effort and creativity that goes into making
            games. I also appreciate games that offer unique or innovative mechanics, and that push
            the boundaries of what's possible within the medium.
          </p>
        </div>
        <div className=" aspect-square w-full flex-auto overflow-hidden rounded-3xl lg:w-1/2  ">
          <Image
            src="/static/images/about-me/playing-video-games.jpg"
            className=" w-full bg-cover"
            alt="a picture of PlayStation 5 and Nintendo Switch"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default OnTheSide
