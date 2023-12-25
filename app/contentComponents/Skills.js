import '../styles/skills.css'
import Image from 'next/image'          

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
                                <section>
                                    <i class="icon-large devicon-cplusplus-plain-wordmark"></i>
                                    <h3>C++</h3>
                                </section>
                                <section>
                                    <i class="icon-large devicon-java-plain"></i>
                                    <h3>Java</h3>
                                </section>
                                <i class="icon-large devicon-python-plain"></i>
                                <i class="icon-large devicon-javascript-plain"></i>
                                <i class="icon-large devicon-html5-plain"></i>
                                <i class="icon-large devicon-css3-plain"></i>
                                <i class="icon-large devicon-mysql-plain"></i>
                                {/* fortran */}
                                <i class="icon-large devicon-dart-plain"></i>
                                <i class="icon-large devicon-julia-plain"></i>

                            </section>
                        </section>

                        {/* Frameworks */}
                        <section className="skills-card">
                            <h2>Frameworks</h2>
                            <section className="grid grid-cols-3">
                                <i class="icon-large devicon-react-original"></i>
                                <i class="icon-large devicon-nextjs-original"></i>
                                <i class="icon-large devicon-tailwindcss-plain"></i>
                                <i class="icon-large devicon-flutter-plain"></i>
                            </section>
                        </section>

                        {/* Libraries */}
                        <section className="skills-card">
                            <h2>Libraries</h2>
                            <section className="grid grid-cols-3">
                                <i class="icon-large devicon-opencv-plain"></i>
                                <i class="icon-large devicon-numpy-original"></i>
                                <i class="icon-large devicon-pandas-original"></i>
                                <i class="icon-large devicon-pytorch-original"></i>
                                {/* (eventually) tensorflow */}
                                {/* matplotlib */}
                                {/* beautifulsoup */}
                                {/* PIL */}
                                {/* Pomegranate */}
                            </section>
                        </section>

                        {/* Developer Tools */}
                        <section className="skills-card">
                            <h2>Developer Tools</h2>
                            <section className="grid grid-cols-3">
                                {/* appian */}
                                <i class="icon-large devicon-git-plain"></i>
                                <i class="icon-large devicon-github-original"></i>
                                <i class="icon-large devicon-vscode-plain"></i>
                                <i class="icon-large devicon-matlab-plain"></i>
                                <i class="icon-large devicon-anaconda-original"></i>
                                <i class="icon-large devicon-photoshop-plain"></i>
                                {/* vercel */}
                                {/* supabase */}
                                <i class="icon-large devicon-androidstudio-plain"></i>
                                <i class="icon-large devicon-xcode-plain"></i>
                                <i class="icon-large devicon-pycharm-plain"></i>
                                <i class="icon-large devicon-blender-original"></i>
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