import Link from "next/link";

const Projects = async () => {
    const { CLIENT_ID,SECRET_ID } = process.env
    const revalidatedData = await fetch(`https://api.github.com/users/gilberto9312/repos?per_page=10&sort=created:asc&client_id=${CLIENT_ID}&cliente_secret=${SECRET_ID}`, {
        next: { revalidate: 1 },
    });
    const jsonData = await revalidatedData.json();
    return (
            <section id="projects" className=" text-center  bg-white">
            <h2 className="pb-6 pt-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:bg-gray-900 dark:text-white">Projects</h2>
            <div className="grid max-h-[20rem] border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 overflow-y-scroll">
                
                {
                    jsonData.map((element: any) => (
                        <figure className="flex flex-col items-center justify-center  text-center bg-white border-b border-gray-200  md:rounded-t-none  md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="max-w-2xl mx-auto  text-gray-500  dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{element.name}</h3>
                            <div className="flex items-center">
                                <p className="my-2"> Main tecnology:  </p>
                                <span className="ml-1 inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-100">
                                    {(element.language) ? element.language : `too old to update` }
                                </span>
                            </div>
                        </blockquote>
                        <figcaption className="flex items-center justify-center space-x-3">
                            <div className="mb-1 space-y-0.5 font-medium dark:text-white text-left">
                                <Link href={element.html_url} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Repository</Link>
                            </div>
                            </figcaption>    
                        </figure>
                ))
                }
                
                
            </div>
            </section> 
    )
}
export default Projects