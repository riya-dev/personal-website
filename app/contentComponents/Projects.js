import '../styles/projects.css'
import Image from 'next/image'
import this_website from '/public/static/images/projects/this_website.png'
import fitted from '/public/static/images/projects/fitted.png'

const Projects = () => {
    return(
        <>
            <div class="projects-container" id="projects">
                <section class="projects-section">
                    <h1 class="text-purple-900">Projects</h1>

                    <section class="projects-grid">
                        <section class="project-card">
                            <h2>This Website!</h2>
                            <Image src={this_website}></Image>
                            <h3>Next.js • React • Tailwind CSS • HTML • CSS • Vercel</h3>
                        </section>

                        <section class="project-card">
                            <h2>FITTED</h2>
                            <Image src={fitted}></Image>
                            <h3>Python • BeautifulSoup Library • Supabase • Next.js • React • HTML • CSS • Figma • Vercel </h3>
                        </section>

                        <section class="project-card">
                            <h1>AI</h1>
                        </section>

                        <section class="project-card">
                            <h1>CV</h1>
                        </section>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Projects