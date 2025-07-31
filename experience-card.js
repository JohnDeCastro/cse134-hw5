class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                .card {
                    border: 2px solid #ccc;
                    border-radius: 8px;
                    padding: 1rem;
                    margin: 1.5rem 0;
                    background-color: #f3f3f3;
                    box-shadow: none;
                    max-width: 600px;
                }
                
                h2 {
                    margin: 0 0 0.5rem;
                    font-size: 1.25rem;
                }

                img {
                    width: 100%;
                    max-width: 300px;
                    border-radius: 8px;
                }

                .description {
                    margin: 0.5rem 0;
                }

                a {
                    color: var(--primary-color, #1e3a8a);
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }
            </style>

            <div class="card">
                <h2>Sergeant of Marines - United States Marine Corps</h2>
                <picture>
                    <img src="images/marines.webp" alt="Marine Corps Uniform Photo" />
                </picture>
                <p class="description">
                Served Honorably from 2014 - 2019, leading and mentoring junior Marines in both training and operation readiness.
                Developed discipline, leadership, and mission essential problem-solving skills.</p>
                <a href="assets/resume.pdf" target="_blank">See Resume</a>
            </div>
        `;
    }
}

customElements.define('experience-card', ExperienceCard);