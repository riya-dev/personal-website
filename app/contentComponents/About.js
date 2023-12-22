import '../styles/about.css'

const About = () => {
    return (
        <>
            <div class="about-container" id="about">
                <section class="about-section">
                    <h1 class="text-purple-900 overscroll-behavior:contain">About Me</h1>
                    <div class="about-description">
                        <p class="text-purple-200 mb-4 tracking-wide">Thanks for stopping by! I am Riya Dev.</p>
                        <p class="text-purple-200 mt-4 tracking-wide font-normal">When I'm not playing around with 
                            code, you can find me singing to Adele, gushing over the latest  
                            fashion shows, listening to my favorite podcasts (Crime Junkies and How I Built This 
                            with Guy Raz are my favs!), or solving Expert Sudoku puzzles.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;