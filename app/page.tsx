import HeroSection from './hero'
import Projects from './projects'

export default async function Page() {
  return (
    <main className="">
      <HeroSection />
      <Projects />
    </main>
  )
}

// const sortedPosts = sortPosts(allBlogs)
// const posts = allCoreContent(sortedPosts)
// return <Main posts={posts} />
