import '../styles/projects.css'
import Image from 'next/image'
import this_website from '/public/static/images/projects/this_website.png'
import fitted from '/public/static/images/projects/fitted.png'
import othello from '/public/static/images/projects/othello.gif'
import othello_runner from '/public/static/images/projects/othello_runner.png'
import rotating_platonic_solid from '/public/static/images/projects/rotating_platonic_solid.gif'
import coin_detection_bw from '/public/static/images/projects/coin_detection/bw.png'
import coin_detection_identification from '/public/static/images/projects/coin_detection/identification.png'
import coin_detection_results from '/public/static/images/projects/coin_detection/results.png'
import shortest_path_railroad from '/public/static/images/projects/shortest_path_railroad.png'
import shortest_path_railroad_blue from '/public/static/images/projects/shortest_path_railroad_blue.png'
import shortest_path_railroad_orange from '/public/static/images/projects/shortest_path_railroad_orange.png'
import shortest_path_railroad_pink from '/public/static/images/projects/shortest_path_railroad_pink.png'
import assip from '/public/static/images/projects/assip.gif'
import sudoku from '/public/static/images/projects/sudoku.gif'
import janus_load from '/public/static/images/projects/janus/1_load.png'
import janus_login from '/public/static/images/projects/janus/2_login.png'
import janus_group from '/public/static/images/projects/janus/3_group.png'
import janus_profile from '/public/static/images/projects/janus/4_profile.png'
import movie_match from '/public/static/images/projects/movie_match.gif'
import frat_app from '/public/static/images/projects/frat_app.gif'

const Projects = () => {
    return(
        <>
            <div className="projects-container" id="projects">
                <section className="projects-section">
                    <h1 className="text-purple-900">Projects</h1>
                    <h2 className="text-purple-900 font-bold opacity-75 mb-2">
                        (These are just some of my favorite projects. Find more on {" "}
                        <a href="https://github.com/riya-dev"
                            className="text-purple-900 hover:text-blue-800 underline decoration-dotted"
                            target="_blank"
                            rel="noopener noreferrer">
                            GitHub
                        </a>
                        .)
                    </h2>

                    <section className="projects-grid md:grid md:grid-cols-2 md:gap-5">

                        <section className="project-card">
                            <h2>Othello Game + AI Bot</h2>
                            <section className="grid grid-cols-2">
                                <Image src={othello_runner}></Image>
                                <Image src={othello}></Image>
                            </section>
                            <h3>Python • Minimax • Alpha-beta pruning • Game trees</h3>
                        </section>

                        <section className="project-card">
                            <h2>AI Shortest Railroad Path</h2>
                            <section className="grid grid-cols-2">
                                <Image src={shortest_path_railroad}></Image>
                                <Image src={shortest_path_railroad_blue}></Image>
                                <Image src={shortest_path_railroad_orange}></Image>
                                <Image src={shortest_path_railroad_pink}></Image>
                            </section>
                            <h3>Python • BFS • A* Algorithm</h3>
                        </section>

                        <section className="project-card">
                            <h2>Movie Match (Currently Building)</h2>
                            <Image src={movie_match}
                                style={{ width: '100%', height: 'auto' }}></Image>
                            <h3>Python • Flask • APIs • Next.js • React • SASS • TypeScript • CSS • Vercel</h3>
                        </section>

                        <section className="project-card">
                            <h2 className="text-sm leading-9">Researching Progression of Alzheimer's Disease with Calcium Ion Concentration Algorithms</h2>
                            <Image src={assip}
                                style={{ width: '60%', height: 'auto' }}></Image>
                            <h3>Java • Python (NumPy • Pandas • Matplotlib) • MATLAB • Spyder • Anaconda • FORTRAN</h3>
                        </section>

                        <section className="project-card">
                            <h2>CV Coin Detection</h2>
                            <section className="grid grid-cols-10">
                                <div className='col-span-4'>
                                    <Image src={coin_detection_bw}></Image>
                                </div>
                                <div className='col-span-6'>
                                    <Image src={coin_detection_identification}></Image>
                                </div>
                            </section>
                            <Image src={coin_detection_results}></Image>
                            <h3>OpenCV • C++ • Hysterisis • Double Threshold • Intensity Gradients</h3>
                        </section>

                        <section className="project-card">
                            <h2>Tech Fraternity Mobile App</h2>
                            <Image src={frat_app}
                                style={{ width: '60%', height: 'auto' }}></Image>
                            <h3>Dart • Flutter • Firebase</h3>
                        </section>

                        <section className="project-card">
                            <h2>CV 3D Platonic Rotating Solid</h2>
                            <Image src={rotating_platonic_solid}
                                style={{ width: '70%', height: 'auto' }}></Image>
                            <h3>OpenCV • C++ • HighGUI Module </h3>
                        </section>

                        <section className="project-card">
                            <h2>FITTED</h2>
                            <Image src={fitted}></Image>
                            <h3>Python • BeautifulSoup Library • Supabase • Next.js • React • HTML • CSS • Figma • Vercel </h3>
                        </section>

                        <section className="project-card">
                            <h2>AI Sudoku Solver</h2>
                            <Image src={sudoku}></Image>
                            <h3>Python • Recursive Backtracking • CSP</h3>
                        </section>

                        <section className="project-card">
                            <h2>Janus Social Media Application</h2>
                            <section className="grid grid-cols-4">
                                <Image src={janus_load}></Image>
                                <Image src={janus_login}></Image>
                                <Image src={janus_group}></Image>
                                <Image src={janus_profile}></Image>
                            </section>
                            <h3>Java • Android Studio • Adobe XD • MySQL</h3>
                        </section>

                        <section className="project-card">
                            <h2>This Website</h2>
                            <Image src={this_website}></Image>
                            <h3>Next.js • React • Tailwind CSS • HTML • CSS • Vercel</h3>
                        </section>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Projects