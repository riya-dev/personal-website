import '../styles/education.css'
import Image from 'next/image'
import umich from '/public/static/images/umich.png'
import tjhsst from '/public/static/images/tjhsst.png'

const Education = () => {
    return (
      <div
        className="education-container bg-gradient-to-b from-purple-100 to-white flex items-center justify-center min-h-screen"
        id="education"
      >
        <section className="education-section max-w-6xl mx-auto px-6 text-center mb-20">
          <h1 className="text-purple-900 text-4xl font-bold text-center mb-3">
            Education
          </h1>

          {/* Education grid */}
          <div className="grid md:grid-cols-2 gap-12 justify-items-center">
            {/* University of Michigan Card */}
            <div className="education-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-purple-100 p-6 flex items-center justify-center">
                <a
                  href="https://cse.engin.umich.edu/news/"
                  alt="Riya Dev University of Michigan College of Engineering"
                  className="relative"
                >
                  <Image
                    src={umich}
                    alt="Riya Dev University of Michigan student emblem"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white shadow-md"
                  />
                </a>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-purple-900 text-2xl font-bold mb-4">
                  University of Michigan College of Engineering
                </h2>
                <h3 className="text-xl text-gray-800 mb-2">
                  Computer Science B.S.E.
                </h3>
                <p className="text-gray-600 mb-2">
                  Minors in Statistics and Business
                </p>
                <p className="text-purple-600 font-semibold">
                  #6 Undergraduate Engineering (2023)
                </p>
              </div>
            </div>

            {/* TJHSST Card */}
            <div className="education-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-purple-100 p-6 flex items-center justify-center">
                <a
                  href="https://en.wikipedia.org/wiki/Thomas_Jefferson_High_School_for_Science_and_Technology"
                  alt="Riya Dev Thomas Jefferson High School for Science and Technology (TJHSST) Alum"
                  className="relative"
                >
                  <Image
                    src={tjhsst}
                    alt="Riya Dev TJHSST emblem"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white shadow-md"
                  />
                </a>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-purple-900 text-2xl font-bold mb-4">
                  Thomas Jefferson High School for Science and Technology
                </h2>
                <h3 className="text-xl text-gray-800 mb-2">
                  #1 High School in National Rankings
                </h3>
                <p className="text-gray-600">
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