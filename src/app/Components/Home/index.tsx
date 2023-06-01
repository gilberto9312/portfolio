import Image from 'next/image';
import g from '../../../../public/gilberto-asuaje.png'

export default function Home() {
    return (

        <section id='home' className="bg-blue-200 dark:bg-gray-900">
            <div className="py-8  px-4 mx-auto max-w-screen-xl lg:py-16 flex items-center justify-between">
                <div className=" flex flex-col lg:ml-[10rem]">
                    <p className=" mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Hi i&apos;m</p>
                    <h1 className="ml-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">FullStack</h1>
                    <p className="ml-6 mb-8 text-lg text-gray-500 font-semibold lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Developer</p>
                </div>
                <div className='ml-6 '>
                    <Image alt='gilberto-asuaje' src={g} width={700} className="h-auto  rounded-lg dark:shadow-xl "/>
                </div>
            </div>
        </section>

    )
}