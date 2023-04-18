import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profileImg from '../public/shibaprofile.png'
import AnimatedText from '@/components/AnimatedText'


export default function Home() {
  return (
      <>
      <Head>
        <title>profile</title>
       <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className=' flex items-center justify-between w-full'>
              <div className='w-1/2'>
                <Image src={profileImg} alt='tk'className='w-full h-auto' />
              </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text='Bringing Vision To Life With Code And Ideas.' className='!text-6xl !text-left'/>
            <p className=' my-4 text-base font-medium'>
            I&apos;m Takeru, a software engineer who loves tackling complex problems and creating innovative solutions through code.
            </p>
          </div>
        </div>
        </Layout>
      </main>
      </>
  )
}
