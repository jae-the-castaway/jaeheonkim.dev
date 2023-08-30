import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import PhotoCollage from './photo-collage'
import OnTheSide from './on-the-side'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <PhotoCollage />
      <div className="divider-vertical md:mt-64 lg:mt-32 "></div>
      <div className="mx-4 flex">
        <div className=" mx-auto flex h-36 border-l-4 border-emerald-700">
          <div className="justify-cente mb-6 flex flex-col px-4">
            <h3 className=" mb-4 mt-4 text-3xl font-bold text-gray-700">
              Simplicity is the ultimate sophistication.
            </h3>
            <p className="px-4 text-2xl italic text-gray-500  ">- Leonardo da Vinci</p>
          </div>
        </div>
      </div>
      <OnTheSide />
    </>
  )
}
