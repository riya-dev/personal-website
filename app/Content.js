import Home from './contentComponents/Home'
import About from './contentComponents/About'
import Education from './contentComponents/Education'
import Projects from './contentComponents/Projects'
import Skills from './contentComponents/Skills'
import Links from './contentComponents/Links'

const Content = () => {
    return (
        <>
            <div className='content'>
                <Home />
                <About />
                <Education />
                <Projects />
                <Skills />
                <Links />
            </div>
      </>
    );
  };

  export default Content;