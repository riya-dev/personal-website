import '../styles/education.css'
import Image from 'next/image'
import umich from '/public/static/images/umich.png'
import tjhsst from '/public/static/images/tjhsst.png'

const Education = () => {
    return (
      <div
        // className="education-container bg-gradient-to-b from-purple-100 to-white flex align-middle justify-center items-center min-h-screen m-0 auto"
        className="bg-gradient-to-b from-purple-100 to-white flex justify-center items-center min-h-[90vh] sm:min-h-screen m-0"
        id="education"
      >
        <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-purple-900 text-5xl font-bold mb-12 auto">
            Education
          </h1>
          {/* Education grid */}
          <div className="grid md:grid-cols-2 gap-12 justify-items-center">
            {/* University of Michigan Card */}
            <div className="education-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-purple-200 p-6 flex items-center justify-center">
                <a
                  href="https://cse.engin.umich.edu/news/"
                  alt="Riya Dev University of Michigan College of Engineering"
                  className="relative"
                >
                  <Image
                    src={umich}
                    alt="Riya Dev University of Michigan student emblem"
                    width={135}
                    height={135}
                    className="rounded-full border-4 border-white shadow-md"
                  />
                </a>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-purple-900 text-2xl font-bold mb-6 m-auto">
                  University of Michigan College of Engineering
                </h2>
                <h3 className="text-xl text-gray-800 font-semibold">
                  Computer Science B.S.E.
                </h3>
                <p className="text-xl text-gray-600 mb-4 font-medium">
                  Minors in Statistics and Business
                </p>
                <p className="text-purple-600 font-semibold">
                  #6 Undergraduate Engineering (2023) <br />
                  #4 Undergraduate Business (2024)
                </p>
              </div>
            </div>

            {/* TJHSST Card */}
            <div className="education-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-purple-200 p-6 flex items-center justify-center">
                <a
                  href="https://en.wikipedia.org/wiki/Thomas_Jefferson_High_School_for_Science_and_Technology"
                  alt="Riya Dev Thomas Jefferson High School for Science and Technology (TJHSST) Alum"
                  className="relative"
                >
                  <Image
                    src={tjhsst}
                    alt="Riya Dev TJHSST emblem"
                    width={135}
                    height={135}
                    className="rounded-full border-4 border-white shadow-md"
                  />
                </a>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-purple-900 text-2xl font-bold mb-6 m-auto">
                  Thomas Jefferson HS for Science and Technology
                </h2>
                {/* <h3 className="text-xl text-gray-800 mb-4">
                  Artificial Intelligence, Computer Vision, Web + Mobile
                  Research
                </h3> */}
                <p className="text-purple-600 font-semibold">
                  #1 High School in National Rankings
                </p>
                {/* <h3 className="text-purple-600 font-semibold">
                  #1 High School in National Rankings
                </h3> */}
                <p className="text-gray-600 font-medium">
                  by U.S. News & World Report, Newsweek, and Business Insider at
                  time of attendance
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Education