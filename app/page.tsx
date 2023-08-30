import HeroSection from './hero'
import ProjectSection from './projectSection'

export default async function Page() {
  return (
    <main className="bg-white text-gray-900 ">
      <HeroSection />
      <ProjectSection />
    </main>
  )
}

// const sortedPosts = sortPosts(allBlogs)
// const posts = allCoreContent(sortedPosts)
// return <Main posts={posts} />
