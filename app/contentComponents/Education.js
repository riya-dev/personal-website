import '../styles/education.css'
import Image from 'next/image'
import umich from '/public/static/images/umich.png'
import tjhsst from '/public/static/images/tjhsst.png'

const Education = () => {
    return (
      <>
        <div className="education-container" id="education">
          <section className="education-section">
            <h1 className="text-purple-900 text-center">Education</h1>

            <section className="md:grid md:grid-cols-2 md:gap-1">
              <div>
                <h2 className="text-purple-900">
                  University of Michigan College of Engineering
                </h2>
                <section className="education-box rounded-3xl grid grid-cols-4">
                  <a
                    href="https://cse.engin.umich.edu/news/"
                    alt="Riya Dev University of Michigan College of Engineering"
                  >
                    <Image
                      src={umich}
                      alt="Riya Dev University of Michigan student emblem"
                      draggable="false"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      className="object-none col-span-1 justify-center object-center hover:scale-110
                                                transition-all duration-300 cursor-pointer p-1 shadow-xl rounded-full"
                    />
                    {/* w-80 h-80 */}
                  </a>
                  <section className="col-span-3 whitespace-normal self-center justify-center p-1">
                    <h3>Computer Science B.S.E., Minor in Business</h3>
                    <h3>#6 Undergraduate Engineering (2023)</h3>
                    {/* <h3 className=" text-purple-400 self-center justify-center p-1 text-normal"></h3> */}
                    {/* <h3 className=" text-purple-400">Data Structures + Algorithms, Foundations of CS, 
                                        Discrete Math, Web Systems (Planned), Intro to Computer Organization (Planned), 
                                        Computational Linear Algebra, Multivariable Calculus III, Robotics Mechanisms</h3> */}
                  </section>
                </section>
              </div>

              <div>
                <h2 className="text-purple-900">
                  Thomas Jefferson High School for Science and Technology
                </h2>
                <section className="education-box rounded-3xl grid grid-cols-4">
                  <a
                    href="https://en.wikipedia.org/wiki/Thomas_Jefferson_High_School_for_Science_and_Technology"
                    alt="Riya Dev Thomas Jefferson High School for Science and Technology (TJHSST) Alum"
                  >
                    <Image
                      src={tjhsst}
                      alt="Riya Dev TJHSST emblem"
                      draggable="false"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      className="object-none col-span-1 justify-center hover:scale-110 ease-linear
                                                transition-all duration-300 cursor-pointer p-1 shadow-xl rounded-full"
                    />
                  </a>
                  <section className="col-span-3 whitespace-normal self-center justify-center p-1">
                    {/* w-36 h-36  */}
                    <h3>
                      #1 High School in National Rankings
                      <div className="font-normal">
                        {" "}
                        by U.S. News & World Report, Newsweek, and Business
                        Insider at time of attendance
                      </div>
                    </h3>
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