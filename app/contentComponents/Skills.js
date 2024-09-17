import "../styles/skills.css";
import languagesData from "../json/languages.json";
import frameworksData from "../json/frameworks.json";
import librariesData from "../json/libraries.json";
import developerToolsData from "../json/developer_tools.json";

const languages = languagesData.languages;
const frameworks = frameworksData.frameworks;
const libraries = librariesData.libraries;
const developerTools = developerToolsData.developer_tools;

const SkillSection = ({ iconClass, name }) => (
  <div className="skill-item">
    <i className={iconClass} />
    <h3 className={name.length > 10 ? "small-font" : ""}>{name}</h3>
  </div>
);

const Skills = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <div
        className="skills-container bg-gradient-to-b from-purple-100 to-white"
        id="skills"
      >
        <section className="skills-section">
          <h1 className="text-purple-900">Skills</h1>
          <section className="skills-grid md:grid md:grid-cols-4 md:gap-4">
            {/* Languages */}
            <section className="skills-card transition-transform duration-300 hover:scale-105">
              <h2>Languages</h2>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((language, index) => (
                  <SkillSection
                    key={index}
                    iconClass={language.iconClass}
                    name={language.name}
                  />
                ))}
              </div>
            </section>

            {/* Frameworks */}
            <section className="skills-card transition-transform duration-300 hover:scale-105">
              <h2>Frameworks</h2>
              <div className="grid grid-cols-3 gap-2">
                {frameworks.map((framework, index) => (
                  <SkillSection
                    key={index}
                    iconClass={framework.iconClass}
                    name={framework.name}
                  />
                ))}
              </div>
            </section>

            {/* Libraries */}
            <section className="skills-card transition-transform duration-300 hover:scale-105">
              <h2>Libraries</h2>
              <div className="grid grid-cols-3 gap-2">
                {libraries.map((library, index) => (
                  <SkillSection
                    key={index}
                    iconClass={library.iconClass}
                    name={library.name}
                  />
                ))}
              </div>
            </section>

            {/* Developer Tools */}
            <section className="skills-card transition-transform duration-300 hover:scale-105">
              <h2>Developer Tools</h2>
              <div className="grid grid-cols-3 gap-2">
                {developerTools.map((tool, index) => (
                  <SkillSection
                    key={index}
                    iconClass={tool.iconClass}
                    name={tool.name}
                  />
                ))}
              </div>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Skills;
