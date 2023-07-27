import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { HomePagePayload } from 'types'

export function HomePage({ data }: { data: HomePagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview, showcaseProjects, title, hero } = data

  return (
    <div className="space-y-20">
      <h3>SANDBOX -----------------------</h3>
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      
      {/* Show Hero */}
      {hero && (
        <div className="w-full flex px-4 md:px-16 lg:px-32">
          <div className="w-1/2 flex flex-col justify-center items-start p-6">
            <h1 className='text-3xl font-extrabold tracking-tight md:text-5xl mb-3'>{hero.heading}</h1>
            <p className='block text-md tracking-normal md:text-md text-gray-600'>{hero.subHeading}</p>
            <div>
              <button className='bg-orange-400 text-white px-4 py-2 rounded-md mt-4'>Get Started</button>
              <button className='text-gray-900 px-4 py-2 rounded-md mt-4'>Read more</button>
            </div>
          </div>
          <div className="w-1/2">
          <ImageBox
            image={hero.featureImage}
            alt={`Cover image for ${hero.heading}`}
            classesWrapper="relative aspect-[16/9] shadow-lg rounded-md"
          />
          </div>
        </div>
      )}

      {/* List out sections */}
      <div className='w-full bg-gray-50'>
        <div className='w-full flex px-4 md:px-16 lg:px-32 py-6'>
          <p>Section here....</p>
        </div>
      </div>
      
      {/* Showcase projects */}
      {/* {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )} */}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
