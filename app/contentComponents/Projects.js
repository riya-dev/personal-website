import '../styles/projects.css'
import Image from 'next/image'
import this_website from '/public/static/images/projects/this_website.png'
import fitted from '/public/static/images/projects/fitted.png'
import othello from '/public/static/images/projects/othello.gif'
import othello_runner from '/public/static/images/projects/othello_runner.png'
import rotating_platonic_solid from '/public/static/images/projects/rotating_platonic_solid.gif'
import coin_detection from '/public/static/images/projects/coin_detection.png'
import shortest_path_railroad from '/public/static/images/projects/shortest_path_railroad.png'
import shortest_path_railroad_blue from '/public/static/images/projects/shortest_path_railroad_blue.png'
import shortest_path_railroad_orange from '/public/static/images/projects/shortest_path_railroad_orange.png'
import shortest_path_railroad_pink from '/public/static/images/projects/shortest_path_railroad_pink.png'
import assip from '/public/static/images/projects/assip.gif'

const Projects = () => {
    return(
        <>
            <div class="projects-container" id="projects">
                <section class="projects-section">
                    <h1 class="text-purple-900">Projects</h1>

                    <section class="projects-grid md:grid md:grid-cols-2 md:gap-8">

                        <section class="project-card">
                            <h2>Othello Game + AI Bot</h2>
                            <section class="grid grid-cols-2">
                                <Image src={othello_runner}></Image>
                                <Image src={othello}></Image>
                            </section>
                            <h3>Python • Minimax • Alpha-beta pruning • Game trees</h3>
                        </section>

                        <section class="project-card">
                            <h2>AI Shortest Railroad Path</h2>
                            <section class="grid grid-cols-2">
                                <Image src={shortest_path_railroad}></Image>
                                <Image src={shortest_path_railroad_blue}></Image>
                                <Image src={shortest_path_railroad_orange}></Image>
                                <Image src={shortest_path_railroad_pink}></Image>
                            </section>
                            <h3>Python • BFS • A* Algorithm</h3>
                        </section>

                        <section class="project-card">
                            <h2>CV 3D Platonic Rotating Solid</h2>
                            <Image src={rotating_platonic_solid}></Image>
                            <h3>OpenCV • C++ • HighGUI Module </h3>
                        </section>

                        <section class="project-card">
                            <h2>GMU Systems Biology Lab Internship</h2>
                            <Image src={assip}></Image>
                            <h3>Java • Python • MATLAB • Anaconda • FORTRAN</h3>
                        </section>

                        <section class="project-card">
                            <h2>FITTED</h2>
                            <Image src={fitted}></Image>
                            <h3>Python • BeautifulSoup Library • Supabase • Next.js • React • HTML • CSS • Figma • Vercel </h3>
                        </section>

                        <section class="project-card">
                            <h2>CV Coin Detection</h2>
                            <Image src={coin_detection}></Image>
                            <h3>OpenCV • C++ • Hysterisis • Double Threshold • Intensity Gradients</h3>
                        </section>

                        <section class="project-card">
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