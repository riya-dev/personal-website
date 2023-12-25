import '../styles/education.css'
import Image from 'next/image'
import umich from '/public/static/images/umich.png'
import tjhsst from '/public/static/images/tjhsst.png'

const Education = () => {
    return(
        <>
            <div className="education-container" id="education">
                <section className="education-section">
                    <h1 className="text-purple-900 text-center">Education</h1>
                    
                    <section className="md:grid md:grid-cols-2 md:gap-1">
                        <div>
                            <h2 className="text-purple-900">University of Michigan College of Engineering</h2>
                            <section className="education-box rounded-3xl grid grid-cols-4">
                                <a href="https://cse.engin.umich.edu/news/">
                                    <Image
                                        src={umich}
                                        alt="University of Michigan emblem"
                                        draggable="false"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        className="object-none col-span-1 justify-center object-center hover:scale-110
                                                transition-all duration-500 cursor-pointer p-1" />
                                                {/* w-80 h-80 */}
                                </a>
                                <section className="col-span-3 whitespace-normal self-center justify-center p-1">
                                    <h3 className=" text-purple-400">Computer Science BSE, minor in Business</h3>
                                    {/* <h3 className=" text-purple-400 self-center justify-center p-1 text-normal"></h3> */}
                                    {/* <h3 className=" text-purple-400">Data Structures + Algorithms, Foundations of CS, 
                                        Discrete Math, Web Systems (Planned), Intro to Computer Organization (Planned), 
                                        Computational Linear Algebra, Multivariable Calculus III, Robotics Mechanisms</h3> */}
                                </section>
                            </section>
                        </div>

                        <div>
                            <h2 className="text-purple-900">Thomas Jefferson High School for Science and Technology</h2>
                            <section className="education-box rounded-3xl grid grid-cols-4">
                                <a href="https://www.usnews.com/education/best-high-schools/virginia/districts/fairfax-county-public-schools/thomas-jefferson-high-school-for-science-and-technology-20461">
                                    <Image src={tjhsst}
                                        alt="TJHSST emblem"
                                        draggable="false"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        className="object-none col-span-1 justify-center hover:scale-110
                                                transition-all duration-500 cursor-pointer p-1" />
                                </a>
                                <section className="col-span-3 whitespace-normal self-center justify-center p-1">
                                    {/* w-36 h-36  */}
                                    <h3 className=" text-purple-400">#1 High School in USA National Rankings </h3>
                                    {/* <h3 className=" text-purple-400">Artificial Intelligence I & II, Computer Vision I & II, Mobile/Web Application Development Research Lab, AP Computer Science + Data Structures, Spanish I,II,III</h3> */}
                                </section>
                            </section>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Education