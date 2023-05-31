import Top from "../Top";
const About = () => {
    return (

<section id='about' className="bg-gradient-to-b from-blue-100 to-blue-300  dark:from-gray-900 py-6">
    <div className="mx-6 text-center ">
    <h2 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About me</h2>
    <div className="py-8 px-4 mx-auto max-w-screen-xl max-h-[12rem] text-center lg:py-16 overflow-y-scroll">
        <p className="text-justify tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 py-2">I am a highly adaptable software developer with extensive industry experience. My ability to adapt to different environments has been strengthened through my personal experience of moving countries and immersing myself in diverse cultures. These experiences have allowed me to develop an open mind and a unique ability to work effectively in multicultural and diverse teams. </p>

        <p className="text-justify tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 py-2">My primary focus is on web application development using PHP and MySQL. I have gained extensive knowledge and experience in designing, developing and maintaining systems using these languages and technologies. However, my passion for continuous learning has led me to explore other programming languages such as JavaScript and Rust, as well as non-relational databases.</p>

        <p className="text-justify tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 py-2">In addition to my technical expertise, I have also successfully led projects. My ability to coordinate teams, set clear goals and provide guidance has proven to be critical in achieving outstanding results. I pride myself on my ability to communicate effectively with team members, stakeholders and clients, ensuring a constant flow of information and efficient collaboration.</p>

        <p className="text-justify tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 py-2">My passion for technology and programming drives me to always stay current with the latest trends and advancements in the field. I am constantly looking for opportunities to expand my knowledge and skills, whether through courses, conferences or personal projects. I firmly believe that continuous learning is essential to stay relevant in this ever-evolving industry.</p>

        <p className="text-justify tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 py-2">My unique combination of technical skills, leadership experience and adaptability makes me a versatile software developer capable of meeting any challenge. I am excited to continue to grow professionally and contribute my expertise to innovative and exciting projects.</p>
    </div>
    </div>
    <Top />
</section>

    )
}
export default About