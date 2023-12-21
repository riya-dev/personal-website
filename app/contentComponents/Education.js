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

                    <section class="umich">
                        <Image src={umich} alt="University of Michigan emblem" href="#https://cse.engin.umich.edu/news/"
                            draggable="false"
                            className="object-none w-72 h-72 self-center justify-center object-center
                                    transition-all duration-500 cursor-pointer" /> 
                        <h3 class=" text-purple-400">Computer Science BSE, minor in Business </h3>
                        <h3 class=" text-purple-400">GPA: 3.92/4.00</h3>
                    </section>

                    <h2 class="text-purple-900">TJHSST</h2>
                    <section class="tjhsst"></section>
                        <Image src={tjhsst} alt="TJHSST emblem" href="#https://www.usnews.com/education/best-high-schools/virginia/districts/fairfax-county-public-schools/thomas-jefferson-high-school-for-science-and-technology-20461"
                            draggable="false"
                            className="object-left:1rem w-72 h-72 scale-115
                                    transition-all duration-500 cursor-pointer" /> 
                        <h3 class="">

                        </h3>
                </section>
            </div>
        </>
    );
}

export default Education