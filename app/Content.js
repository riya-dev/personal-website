import Home from './contentComponents/Home'
import About from './contentComponents/About'
import Education from './contentComponents/Education'
import Projects from './contentComponents/Projects'
import Skills from './contentComponents/Skills'

const Content = () => {
    return (
        <>
            <div className='content'>
                <Home />
                <About />
                <Education />
                <Projects />
                <Skills />
            </div>
      </>
    );
  };

  export default Content;