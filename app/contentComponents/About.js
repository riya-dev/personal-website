import '../styles/about.css'

const About = () => {
    return (
        <>
            <div class="about-container" id="about">
                <section class="about-section">
                    <h1 class="text-purple-900 overscroll-behavior:contain">About Me</h1>
                    <div class="about-description">
                        <p class="tracking-wider">I am Riya Dev.</p>
                        <p class="text-purple-200 tracking-tight font-normal">
                            I've been coding since the age of 9 when I wrote my first JavaScript program — a Samsung 
                            Galaxy S4 clone.
                            Intrigued by the boundless possibilities of code, I pursued an 
                            Artificial Intelligence course in high school, where I built games like Othello
                            and Connect 4 and their solvers, and utilized tools like Pomegranate for neural networks and 
                            Pillow for image analysis. Venturing into the realm of image-based AI, I 
                            later explored Computer Vision. 

                            I've also undertaken several internships over the past few years. In the field of 
                            Systems Biology, I developed algorithms to simulate calcium ion concentrations
                            for Alzheimer's Detection. Within the telecommunications realm, I developed a 
                            new service center with full-stack development.
                            
                            Forever a builder, I continuously expand my technological toolkit
                            to kickstart more projects and build impactful innovations.
                        </p>
                        <p class="tracking-tight font-normal">When I'm not 
                            coding, you can find me singing to Adele, gushing over the latest  
                            fashion shows, listening to my favorite podcasts (Crime Junkies and How I Built This 
                            with Guy Raz are my favorites), or solving expert-level Sudoku puzzles.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;