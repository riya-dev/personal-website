import '../styles/education.css'
import Image from 'next/image'
import umich from '/public/static/images/umich.png'
import tjhsst from '/public/static/images/tjhsst.png'

const Education = () => {
    return(
        <>
            <div class="education-container" id="education">
                <section class="education-section">
                    <h1 class="text-purple-900">Education</h1>

                    <h2 class="text-purple-900">University of Michigan College of Engineering</h2>
                    <section class="education-box rounded-3xl grid grid-cols-4">
                        <Image
                            src={umich} 
                            alt="University of Michigan emblem"
                            href="#https://cse.engin.umich.edu/news/"
                            draggable="false"
                            style={{width: 'auto', height: 'auto' }}
                            className="object-none col-span-1 justify-center object-center
                                    transition-all duration-500 cursor-pointer p-1" />
                                    {/* w-80 h-80 */}
                        <section class="col-span-3 whitespace-normal self-center justify-center p-1">
                            <h3 class=" text-purple-400 text-bold">Computer Science BSE, minor in Business</h3>
                            <h3 class=" text-purple-400">GPA: 3.92/4.00</h3>
                            <h3 class=" text-purple-400">Data Structures + Algorithms, Foundations of CS, 
                                Discrete Math, Web Systems (Planned), Intro to Computer Organization (Planned), 
                                Computational Linear Algebra, Multivariable Calculus III, Robotics Mechanisms</h3>
                        </section>
                    </section>

                    <h2 class="text-purple-900">TJHSST</h2>
                    <section class="education-box rounded-3xl grid grid-cols-4">
                        <Image src={tjhsst}
                            alt="TJHSST emblem"
                            href="#https://www.usnews.com/education/best-high-schools/virginia/districts/fairfax-county-public-schools/thomas-jefferson-high-school-for-science-and-technology-20461"
                            draggable="false"
                            style={{width: 'auto', height: 'auto' }}
                            className="object-none col-span-1 justify-center
                                    transition-all duration-500 cursor-pointer p-1" />
                        <section class="col-span-3 whitespace-normal">
                            {/* w-36 h-36  */}
                            <h3 class=" text-purple-400">#1 High School in USA National Rankings </h3>
                            <h3 class=" text-purple-400">Artificial Intelligence I & II, Computer Vision I & II, Mobile/Web Application Development Research Lab, AP Computer Science + Data Structures, Spanish I,II,III</h3>
                        </section>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Education