import Home from './contentComponents/Home'

const Content = () => {
    return (
        <>
            <div className='content'>
                <Home />

                <div class='home-container h-screen' id="home">
                    <p class="text-3xl font-bold tracking-wide bg-center text-center text-purple-900">
                        Riya Dev
                    </p>
                </div>

                <div class='about-container' id="about">
                    <p class="text-3xl font-bold tracking-wide text-center text-black">
                        Riya Dev
                    </p>
                </div>

                <div className='education-container' id='education'>
                    <h2 className='text-2xl font-bold text-center text-purple-900'>
                    Education
                    </h2>
                    <p className='text-lg text-center text-black'>
                    University of Michigan College of Engineering
                    </p>
                    <p className='text-lg text-center text-black'>
                    GPA: 3.92/4.00. Computer Science, Bachelor of Science in Engineering
                    </p>
                    {/* Add other education details here */}
                </div>

                {/* Skills Section */}
                <div className='skills-container' id='skills'>
                    <h2 className='text-2xl font-bold text-center text-purple-900'>
                    Skills
                    </h2>
                    <p className='text-lg text-center text-black'>
                    Computer Languages: C++, Java, Python, SQL (MySQL), JavaScript, HTML/CSS, FORTRAN
                    </p>
                    <p className='text-lg text-center text-black'>
                    Frameworks: Next.js, React, Tailwind CSS
                    </p>
                    <p className='text-lg text-center text-black'>
                    Developer Tools: Appian, Supabase, MariaDB, Git, VS Code, XCode, Android Studio
                    </p>
                    {/* Add other skills details here */}
                </div>

                {/* Projects Section */}
                <div className='projects-container' id='projects'>
                    <h2 className='text-2xl font-bold text-center text-purple-900'>
                    Projects
                    </h2>
                    {/* Add project details here */}
                </div>



            </div>
      </>
    );
  };

  export default Content;