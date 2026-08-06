import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData(
        "intergalactic-ducky",
        "Intergalactic Ducky",
        "img/projects/intergalactic-ducky-icon.png",
        `
        <div class="paragraph">
            <strong>Intergalactic Ducky</strong> is a 3D isometric adventure game created in Godot during HACK.COMS '24.
            Players explore an alien planet and complete environmental challenges to recover missing ship parts and escape.
            The game was developed in only 24 hours and was awarded <strong>Goostavo's Favorite</strong>.
        </div>

        <div class="paragraph center">
            <iframe
                class="youtube"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>

        <div class="paragraph">
            <h2>Project Snapshot</h2>
            <ul>
                <li><strong>Role:</strong> Game Designer and Main Level Designer</li>
                <li><strong>Engine:</strong> Godot</li>
                <li><strong>Development Time:</strong> 24 Hours</li>
                <li><strong>Team Size:</strong> 5 Developers</li>
                <li><strong>Platform:</strong> PC and Controller</li>
                <li><strong>Award:</strong> Goostavo's Favorite — HACK.COMS '24</li>
            </ul>
        </div>

        <div class="paragraph">
            <h2>My Role</h2>
            I served as the sole game designer and main level designer on the team.
            I helped define the overall direction of the game, manage the project's scope,
            and design the major challenges the player encounters throughout the level.
        </div>

        <div class="paragraph">
            <h2>Project Direction and Scope</h2>
            Our initial idea was to include as many hackathon categories as possible in an effort
            to increase our chances of winning. This quickly made our ideas too limited and difficult
            to execute within the 24-hour deadline.
            <br/><br/>
            Drawing from my previous game jam experience, I guided the team toward reducing the scope
            and focusing on a more cohesive experience. I proposed ducks as the central theme, giving
            the team a clear creative direction and allowing us to build outward from one strong idea.
        </div>

        <div class="paragraph">
            <h2>Level Design</h2>
            I designed three primary challenges, each built around the game's isometric perspective,
            movement mechanics, and environmental interactions.
        </div>

        <div class="paragraph">
            <h3>Introducing the Transparency Mechanic</h3>
            The first challenge introduced the player to Cosmo, a helper character located inside a building.
            Because the isometric camera could cause walls to obstruct the player's view, the team implemented
            a transparency system that allowed the player to remain visible through nearby geometry.
            <br/><br/>
            After meeting Cosmo, the player could explore behind the building and discover the first ship part.
            This section taught the player how the camera and transparency system worked through exploration
            instead of relying on a direct tutorial.
        </div>

        <div class="paragraph">
            <h3>Low-Gravity Platforming</h3>
            The second challenge required the player to jump across floating meteors while navigating reduced gravity.
            Players had to carefully time their jumps and account for the increased jump height.
            <br/><br/>
            The isometric perspective made judging depth and landing positions more difficult, which increased the
            challenge and made reaching the ship part at the end feel earned.
        </div>

        <div class="paragraph">
            <h3>The Invisible Maze</h3>
            A traditional maze would have been too easy because the isometric perspective and transparency mechanic
            allowed the player to see through walls and identify the correct path.
            <br/><br/>
            To solve this, I inverted the mechanic by making the maze's walls and roof transparent.
            The player could see the goal but could not clearly see the route leading toward it.
            They had to navigate through trial and error, remember the correct path, and retrace their steps
            after collecting the final ship part.
        </div>

        <div class="paragraph">
            <h2>Environment Design</h2>
            We chose a science-fiction space theme to support the crashed-ship premise.
            I helped establish the visual direction of the alien planet and selected a background that made the
            environment feel larger and more planetary.
            <br/><br/>
            I collaborated with another teammate who helped expand the terrain, create the mountainous borders,
            and reinforce the boundaries of the playable area.
        </div>

        <div class="paragraph">
            <h2>Challenges</h2>
            The largest challenge was the 24-hour development window.
            Every team member was using Godot for the first time, and we also chose to build a 3D game,
            which increased the technical and production risk.
            <br/><br/>
            Keeping the project achievable required constant prioritization, communication, and scope control.
        </div>

        <div class="paragraph">
            <h2>Reflection</h2>
            Intergalactic Ducky taught me that strong game design is not about including the greatest number of ideas.
            It is about identifying which ideas are achievable, communicating a clear direction, and polishing the
            features that have the greatest impact on the player experience.
            <br/><br/>
            The project also showed me that I could lead a team through uncertainty, learn a new engine under pressure,
            and still help deliver an award-winning game within a strict deadline.
        </div>

        <div class="paragraph">
            <div class="notice">
                Awarded <strong>Goostavo's Favorite</strong> at HACK.COMS '24.
            </div>
        </div>

        <div class="paragraph center">
            <img
                class="pc-screenshot"
                src="img/projects/intergalactic-ducky/screenshot-1.png"
                alt="Intergalactic Ducky gameplay screenshot"
            />

            <img
                class="pc-screenshot"
                src="img/projects/intergalactic-ducky/screenshot-2.png"
                alt="Intergalactic Ducky level screenshot"
            />

            <img
                class="pc-screenshot"
                src="img/projects/intergalactic-ducky/screenshot-3.png"
                alt="Intergalactic Ducky maze screenshot"
            />
        </div>
        `,
        "#4f78c4",
        true
    ),

    new ProjectData("project-2", "Singing Addict", "img/projects/project-2-icon.png", `
        <div class="paragraph">
            Placeholder project.
        </div>
    `, "#5a78af")
];