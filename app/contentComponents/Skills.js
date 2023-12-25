import '../styles/skills.css'
import * as languagesData from '../json/languages.json';
const languageString = JSON.stringify(languagesData);
const languages = JSON.parse(languageString).languages;

import * as frameworksData from '../json/frameworks.json';
const frameworkString = JSON.stringify(frameworksData);
const frameworks = JSON.parse(frameworkString).frameworks;

import * as librariesData from '../json/libraries.json';
const libraryString = JSON.stringify(librariesData);
const libraries = JSON.parse(libraryString).libraries;

import * as developerToolsData from '../json/developer_tools.json';
const developerToolString = JSON.stringify(developerToolsData);
const developerTools = JSON.parse(developerToolString).developer_tools;

const LanguageSection = ({ iconClass, language }) => (
    <section>
      <i className={iconClass}></i>
      <h3 className={language.length > 9 ? "small-font" : ""}>{language}</h3>
    </section>
);

const FrameworkSection = ({ iconClass, framework }) => (
    <section>
      <i className={iconClass}></i>
      <h3 className={framework.length > 10 ? "small-font" : ""}>{framework}</h3>
    </section>
);

const LibrarySection = ({ iconClass, library }) => (
    <section>
      <i className={iconClass}></i>
      <h3 className={library.length > 10 ? "small-font" : ""}>{library}</h3>
    </section>
);

const DeveloperToolSection = ({ iconClass, tool }) => (
    <section>
      <i className={iconClass}></i>
      <h3 className={tool.length > 10 ? "small-font" : ""}>{tool}</h3>
    </section>
);

const Skills = () => {
    return(
        <>
            {/* https://devicon.dev/ */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
          
            <div className="skills-container" id="skills">
                <section className="skills-section">
                    <h1 className="text-purple-900">Skills</h1>
                    <section className="skills-grid md:grid md:grid-cols-4 md:gap-1">
                        {/*  Languages */}
                        <section className="skills-card">
                            <h2>Languages</h2>
                            <section className="grid grid-cols-3">
                                {languages.map((language, index) => (
                                    <LanguageSection key={index} {...language} />
                                ))}
                                {/* FORTRAN */}
                            </section>
                        </section>

                        {/* Frameworks */}
                        <section className="skills-card">
                            <h2>Frameworks</h2>
                            <section className="grid grid-cols-3">
                                {frameworks.map((framework, index) => (
                                    <FrameworkSection key={index} {...framework} />
                                ))}
                            </section>
                        </section>

                        {/* Libraries */}
                        <section className="skills-card">
                            <h2>Libraries</h2>
                            <section className="grid grid-cols-3">
                                {libraries.map((library, index) => (
                                    <LibrarySection key={index} {...library} />
                                ))}
                                {/* matplotlib BeautifulSoup PIL pomegranate, (eventually) tensorflow*/}
                            </section>
                        </section>

                        {/* Developer Tools */}
                        <section className="skills-card">
                            <h2>Developer Tools</h2>
                            <section className="grid grid-cols-3">
                                {developerTools.map((tool, index) => (
                                    <DeveloperToolSection key={index} {...tool} />
                                ))}
                                {/* Appian Vercel Supabase */}
                            </section>
                        </section>
                    </section>
                </section>
            </div>
        </>
    );
}

// 

export default Skills