import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData(
    "intergalactic-ducky",
    "Intergalactic Ducky",
    "img/projects/intergalactic-ducky/ducky-icon.jpg",
    `
    <div class="paragraph">
        <strong>Intergalactic Ducky</strong> is a 3D isometric adventure game
        created in Godot during HACK.COMS '24.
        <br/><br/>

        After crash-landing on an alien planet, the player must explore the
        environment and complete three different challenges to recover their
        missing <strong>fuel, tools, and radio</strong>. Once all three ship
        parts have been recovered, the player can return to their crashed ship
        and escape the planet.
        <br/><br/>

        I served as the game's <strong>sole game designer and main level designer</strong>,
        helping establish the project's direction, control its scope, and design
        the primary challenges that structured the player's journey.
        <br/><br/>

        The game was created in only <strong>24 hours</strong> and received the
        <strong>Goostavo's Favorite</strong> award at HACK.COMS '24.
    </div>


    <!-- GAMEPLAY VIDEO -->
    <div class="paragraph center">
        <iframe
            class="youtube"
            src="https://www.youtube.com/embed/vo88JMvw5Os"
            title="Intergalactic Ducky Gameplay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>


    <!-- SOURCE CODE -->
    <div class="paragraph">
        <div class="notice">
            <strong>View Intergalactic Ducky:</strong>
            <br/><br/>

            <a
                href="https://github.com/AJSGOTTHEWAY/Hackathon2024"
                target="_blank"
                rel="noopener noreferrer">
                View the Project on GitHub
            </a>
        </div>
    </div>


    <!-- PROJECT SNAPSHOT -->
    <div class="paragraph">
        <h2>Project Snapshot</h2>

        <ul>
            <li><strong>Role:</strong> Game Designer / Main Level Designer</li>
            <li><strong>Engine:</strong> Godot</li>
            <li><strong>Development Time:</strong> 24 Hours</li>
            <li><strong>Team Size:</strong> 5 Developers</li>
            <li><strong>Platform:</strong> PC / Controller</li>
            <li><strong>Genre:</strong> 3D Isometric Adventure</li>
            <li><strong>Focus:</strong> Level Design, Challenge Design, Scope & Project Direction</li>
            <li><strong>Award:</strong> Goostavo's Favorite — HACK.COMS '24</li>
        </ul>
    </div>


    <!-- GENERAL GAMEPLAY IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-ship.png"
            alt="Intergalactic Ducky crashed ship and alien planet"
        />
    </div>


    <!-- MY ROLE -->
    <div class="paragraph">
        <h2>My Role</h2>

        I served as the sole game designer and main level designer for
        Intergalactic Ducky.
        <br/><br/>

        My responsibilities included helping establish the overall concept,
        controlling the scope of the game, designing the major challenges,
        determining how the player would progress through the environment,
        and working with the mechanics being developed by the rest of the team
        to turn them into playable challenges.
        <br/><br/>

        Because we had only 24 hours, design decisions needed to be made quickly.
        I could not approach the project by continuously adding new ideas.
        I needed to understand what our programmers and artists could realistically
        produce and design around those constraints.
    </div>


    <!-- ====================================================== -->
    <!-- SCOPE & PROJECT DIRECTION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Finding the Game</h2>

        Our original approach was to try incorporating as many hackathon categories
        as possible in an attempt to increase our chances of winning.
        <br/><br/>

        It quickly became clear that this was hurting the project. Instead of
        giving us more possibilities, the growing list of requirements was making
        our ideas increasingly complicated and difficult to execute within the
        24-hour deadline.
        <br/><br/>

        Drawing from my previous game-jam experience, I pushed the team toward
        reducing the scope and finding one central idea we could build around.
        I proposed using <strong>ducks</strong> as the theme.
        <br/><br/>

        That simple decision gave us something concrete to work from. Combined
        with the crashed-ship premise and science-fiction setting, we could stop
        designing around a checklist and start building a cohesive game.
    </div>


    <!-- ====================================================== -->
    <!-- CORE OBJECTIVE -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Designing the Core Objective</h2>

        Once the basic concept was established, the player's objective became
        recovering three components needed to escape the planet:
        <strong>fuel, tools, and a radio</strong>.
        <br/><br/>

        Rather than placing all three objects around the environment as simple
        collectibles, I used each one as the reward for a different challenge.
        <br/><br/>

        This gave the game a straightforward structure:
        <br/><br/>

        <strong>
            Explore the planet → Discover a challenge → Recover a ship part →
            Complete all three challenges → Return to the ship → Escape
        </strong>
        <br/><br/>

        The objective was intentionally simple enough for players to understand
        quickly while still giving us room to create different experiences around
        each collectible.
    </div>


    <!-- ====================================================== -->
    <!-- ISOMETRIC CAMERA -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Designing Around the Isometric Camera</h2>

        One of the biggest influences on the level design was the game's fixed
        isometric perspective.
        <br/><br/>

        The camera gave the game a distinct visual identity, but it also created
        an immediate problem: walls, ceilings, and other geometry could easily
        block the player's view.
        <br/><br/>

        The team developed transparency and geometry-hiding behavior to keep the
        player visible when moving behind parts of the environment.
        <br/><br/>

        Rather than treating that system purely as a technical solution, I began
        designing challenges around the way it changed what the player could and
        could not see.
    </div>


    <!-- ====================================================== -->
    <!-- CHALLENGE 1 -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Challenge 1 — Teaching Through Exploration</h2>

        The first challenge introduced the player to <strong>Cosmo</strong>,
        a helper character located inside a building.
        <br/><br/>

        Entering the structure naturally exposed the player to the game's
        transparency behavior. As walls moved between the camera and player,
        they became transparent so the player could continue navigating the space.
        <br/><br/>

        After meeting Cosmo, players could continue exploring around and behind
        the building to discover one of the missing ship parts.
        <br/><br/>

        The goal was to teach the player how the camera and visibility systems
        behaved without stopping the game for a dedicated tutorial explaining them.
        The player learned by encountering the mechanic naturally while exploring.
    </div>


    <!--
    ADD COSMO / BUILDING IMAGE HERE IF YOU HAVE ONE

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-cosmo.png"
            alt="Cosmo and the transparency challenge in Intergalactic Ducky"
        />
    </div>
    -->


    <!-- ====================================================== -->
    <!-- CHALLENGE 2 -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Challenge 2 — Low-Gravity Platforming</h2>

        The second challenge changed the player's movement problem entirely.
        <br/><br/>

        The player needed to cross a series of floating meteors while navigating
        the planet's reduced gravity. The lower gravity increased jump height and
        airtime, requiring players to think more carefully about when and where
        they jumped.
        <br/><br/>

        The isometric camera added another layer to the challenge because depth
        and landing positions were more difficult to judge from the fixed angle.
        <br/><br/>

        I used those limitations intentionally. Instead of trying to make the
        platforming behave exactly like a traditional side-scrolling platformer,
        the challenge asked players to learn how movement felt specifically within
        our isometric environment.
        <br/><br/>

        Successfully crossing the meteors rewarded the player with another
        component needed to repair the ship.
    </div>


    <!--
    ADD METEOR IMAGE HERE IF YOU HAVE ONE

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-meteors.png"
            alt="Low-gravity meteor platforming in Intergalactic Ducky"
        />
    </div>
    -->


    <!-- ====================================================== -->
    <!-- CHALLENGE 3 -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Challenge 3 — The Invisible Maze</h2>

        The third challenge created an unusual design problem.
        <br/><br/>

        I initially wanted to create a maze, but a normal maze did not work well
        with our existing mechanics. Because the game used an isometric camera
        and could make obstructing geometry transparent, the player could potentially
        see through the maze walls and identify the correct route.
        <br/><br/>

        Instead of fighting against the transparency system, I decided to
        <strong>invert it</strong>.
        <br/><br/>

        The maze's walls and roof were made transparent. The player could clearly
        see the goal but could not clearly see the barriers creating the path
        toward it.
        <br/><br/>

        Navigation became a process of trial, error, and memory. Players needed
        to feel their way through the invisible structure, remember which routes
        worked, reach the ship part, and then navigate back out.
    </div>


    <!-- INVISIBLE MAZE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-invisible-maze.png"
            alt="Invisible maze challenge in Intergalactic Ducky"
        />
    </div>


    <!-- ====================================================== -->
    <!-- DESIGN ITERATION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Turning a Limitation Into a Mechanic</h2>

        The invisible maze became one of my favorite design decisions from the
        project because it came directly from understanding a limitation of the
        game.
        <br/><br/>

        The transparency system existed because the isometric camera could obscure
        the player. That same solution initially seemed to make a maze impossible
        because players could see information that would normally be hidden.
        <br/><br/>

        By reversing the relationship, the system stopped being a problem and
        became the challenge itself.
        <br/><br/>

        That experience reinforced an approach to design that I have continued
        using in later projects: before adding another mechanic to solve a problem,
        look at the systems already available and ask whether the problem itself
        can become part of the gameplay.
    </div>


    <!-- ====================================================== -->
    <!-- ENVIRONMENT DESIGN -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Environment & World Design</h2>

        We chose a science-fiction setting to support the crashed-ship premise
        and give the three challenges a shared context.
        <br/><br/>

        I helped establish the visual direction of the alien planet and selected
        a background that made the relatively small playable environment feel
        like part of a much larger world.
        <br/><br/>

        I collaborated with another teammate who helped expand the terrain,
        create the mountainous borders, and reinforce the boundaries surrounding
        the playable area.
        <br/><br/>

        Because development time was extremely limited, the environment needed
        to communicate where players could travel without requiring complicated
        additional systems.
    </div>


    <!-- ENVIRONMENT IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-environment.png"
            alt="Alien planet environment in Intergalactic Ducky"
        />
    </div>


    <!-- ====================================================== -->
    <!-- FINAL OBJECTIVE -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Completing the Loop</h2>

        The three challenges ultimately reconnect at the crashed ship.
        <br/><br/>

        As players explore, the game tracks the components they have recovered.
        Once the fuel, tools, and radio have all been collected, the player can
        return to the ship and complete the objective.
        <br/><br/>

        Giving every challenge the same larger purpose helped keep the experience
        understandable despite each section using a different style of gameplay.
        <br/><br/>

        The platforming challenge, exploration challenge, and invisible maze were
        not disconnected minigames; they were three different obstacles standing
        between the player and the same goal:
        <strong>getting off the planet.</strong>
    </div>


    <!-- ====================================================== -->
    <!-- DEVELOPMENT CONSTRAINT -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Designing in 24 Hours</h2>

        The largest constraint throughout development was time.
        <br/><br/>

        Every member of the team was using Godot for the first time, and we also
        chose to create a 3D game, increasing the technical and production risk.
        <br/><br/>

        There was no time to fully explore every idea or polish every mechanic.
        Design decisions had to account for what could realistically be implemented
        by the rest of the team before the deadline.
        <br/><br/>

        This made communication between design and programming especially important.
        As mechanics became available, I needed to understand what they could do
        and quickly determine how they could support the level.
        <br/><br/>

        Keeping the project achievable required constant prioritization and a
        willingness to abandon ideas that were not essential to the experience.
    </div>


    <!-- ====================================================== -->
    <!-- AWARD -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <div class="notice">
            Awarded <strong>Goostavo's Favorite</strong> at HACK.COMS '24.
        </div>
    </div>


    <!-- ====================================================== -->
    <!-- REFLECTION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Reflection</h2>

        Intergalactic Ducky taught me that strong game design is not about
        including the greatest number of ideas.
        <br/><br/>

        It is about identifying the ideas that best support the experience,
        understanding what the team can realistically build, and using the
        mechanics available to create something cohesive.
        <br/><br/>

        The invisible maze was probably the clearest example of that lesson.
        A system that initially appeared to undermine one of my level ideas
        ultimately became the foundation for the challenge once I approached
        the problem differently.
        <br/><br/>

        The project also gave me experience guiding a team through uncertainty.
        We entered the hackathon using an unfamiliar engine, attempted a 3D game,
        changed our original direction, and still delivered a complete experience
        within 24 hours.
        <br/><br/>

        Winning Goostavo's Favorite was exciting, but my biggest takeaway was
        learning how much can be accomplished when a team establishes a clear
        direction, controls its scope, and designs around the strengths of the
        systems it can actually build.
    </div>
    `,
    "#55c878",
    true
),
   new ProjectData(
    "bionaut",
    "Bionaut",
    "img/projects/bionaut/bionaut-icon.png",
    `
    <div class="paragraph">
        <strong>Bionaut</strong> is a 2D top-down space exploration game developed
        in Unity. Stranded in an unknown part of the galaxy, the player explores
        alien planets, encounters unusual wildlife, collects ship parts and items,
        and uses a variety of tools while searching for a way home.
        <br/><br/>

        I worked as a <strong>project lead, level designer, and programmer</strong>,
        contributing to the structure of the planets, tutorial progression,
        scene and planet integration, UI, debugging, and the process of bringing
        the team's independently developed systems together into playable builds.
    </div>


    <!-- GAMEPLAY VIDEO -->
    <div class="paragraph center">
        <iframe
            class="youtube"
            src="https://www.youtube.com/embed/htTkVyBFb4M"
            title="Bionaut Gameplay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>


    <!-- PLAY THE GAME -->
    <div class="paragraph">
        <div class="notice">
            <strong>Play Bionaut:</strong>
            <br/><br/>

            <a
                href="https://ajsgottheway.itch.io/bionaut"
                target="_blank"
                rel="noopener noreferrer">
                Play Bionaut on itch.io
            </a>
        </div>
    </div>


    <!-- PROJECT SNAPSHOT -->
    <div class="paragraph">
        <h2>Project Snapshot</h2>

        <ul>
            <li><strong>Role:</strong> Project Lead / Level Designer / Programmer</li>
            <li><strong>Engine:</strong> Unity</li>
            <li><strong>Language:</strong> C#</li>
            <li><strong>Team Size:</strong> 5 Developers</li>
            <li><strong>Genre:</strong> 2D Top-Down Space Exploration</li>
            <li><strong>Core Pillars:</strong> Exploration, Curiosity, Companionship</li>
            <li><strong>Focus:</strong> Tutorial Design, Planet Design, Scene Integration, UI, Builds & Debugging</li>
        </ul>
    </div>


    <div class="paragraph">
        <div class="notice">
            <strong>Find wildlife, repair your spaceship, navigate the unknown.</strong>
        </div>
    </div>


    <!-- MY ROLE -->
    <div class="paragraph">
        <h2>My Role</h2>

        My responsibilities on Bionaut grew throughout the semester.
        I began primarily working on the game's levels and environments, but over
        time I also became involved in programming, scene integration, UI work,
        debugging, build preparation, and coordinating the team's development.
        <br/><br/>

        As project lead, I needed to think beyond whether my individual task was
        complete. I had to understand what everyone was building, help establish
        priorities for upcoming playtests, communicate when something was blocking
        development, and make sure our separately developed systems eventually
        worked together inside the same build.
        <br/><br/>

        That combination of design, implementation, and integration made Bionaut
        one of my first projects where I regularly moved between different areas
        depending on what the game needed.
    </div>


    <!-- ====================================================== -->
    <!-- PROJECT LEADERSHIP -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Project Leadership</h2>

        Bionaut was one of my first experiences taking a larger leadership role
        throughout an entire game-development cycle.
        <br/><br/>

        Early in development, I took initiative by creating a basic playable
        starting point before much of the final game had been implemented.
        Giving the team something concrete to build around helped us establish
        direction and provided a common environment where new systems could
        eventually be integrated.
        <br/><br/>

        Throughout the semester, I helped keep the team focused around sprint
        deadlines and playtests while still contributing directly to development.
        I learned that leading a game project was not simply about assigning tasks.
        It meant helping people communicate, recognizing when our process was
        failing, and being willing to take responsibility for getting the project
        into a playable state.
    </div>


    <!-- DEVELOPMENT / TASK IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-task-board.png"
            alt="Bionaut development task board"
        />
    </div>


    <!-- ====================================================== -->
    <!-- TUTORIAL LEVEL -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Tutorial Planet Design</h2>

        A major part of my level-design work focused on the first planet,
        <strong>Silva</strong>, which served as the player's introduction to Bionaut.
        <br/><br/>

        The challenge was that exploration was one of the game's core ideas, but
        early playtests showed that giving players too much freedom immediately
        could leave them unsure about what they were supposed to do.
        <br/><br/>

        We iterated on the planet several times to create a more controlled opening.
        The player could gradually become familiar with movement, interactions,
        tools, wildlife, and the pod before being expected to understand the larger
        exploration loop.
        <br/><br/>

        This taught me that a game about discovery still needs strong onboarding.
        Giving the player structure early can actually make later exploration feel
        more rewarding because they understand the rules of the world they are
        experimenting with.
    </div>


    <!-- TUTORIAL IMAGES -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-tutorial.png"
            alt="Bionaut tutorial planet"
        />

        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-pod.png"
            alt="Bionaut tutorial pod"
        />
    </div>


    <!-- ====================================================== -->
    <!-- TILEMAP / PLANET DESIGN -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Building the Planets</h2>

        I worked extensively with Unity's Tilemap system to construct and refine
        the playable planets.
        <br/><br/>

        My work included building the tutorial layout, adjusting collisions,
        updating the map as new art and gameplay systems were introduced, and
        adding environmental details such as transparent objects and hidden
        easter eggs that rewarded players for exploring.
        <br/><br/>

        Because Bionaut's worlds were designed to feel like small planets rather
        than traditional rectangular maps, the environment also needed to support
        the game's looping world behavior.
    </div>


    <!-- WORLD / CRITTER IMAGES -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-critter-capture.png"
            alt="Exploring and interacting with wildlife in Bionaut"
        />

        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-critters.png"
            alt="Critters within Bionaut's environment"
        />
    </div>


    <!-- ====================================================== -->
    <!-- LOOPING PLANET -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>The Looping World</h2>

        One of Bionaut's more unusual environment systems allows the player to
        travel around the edge of a map and continue from the opposite side,
        helping a relatively small 2D space feel more like traveling around
        the surface of a tiny planet.
        <br/><br/>

        As we expanded the maps, this system created additional level-design and
        integration challenges. Collisions, environmental objects, and new map
        elements all needed to behave correctly near the boundaries.
        <br/><br/>

        I contributed to debugging issues with the looping tilemap and adjusting
        the level as new content was introduced. This was a good example of how
        level design and technical implementation can affect one another: changing
        the environment could expose problems in the systems responsible for
        making that environment work.
    </div>


    <!-- ====================================================== -->
    <!-- GAMEPLAY LOOP -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Supporting the Exploration Loop</h2>

        The completed game brings several team-developed systems together around
        a central exploration loop.
        <br/><br/>

        Players leave the pod, explore a planet, interact with its wildlife and
        environment, collect items and ship parts, and use different tools depending
        on what they encounter.
        <br/><br/>

        My level work needed to provide spaces where those systems could actually
        be discovered and used. That meant thinking about where the player would
        encounter critters, objectives, interactable objects, environmental
        boundaries, and routes back toward the pod.
        <br/><br/>

        Even when I was not the programmer responsible for an individual gameplay
        system, I needed to understand how that system affected the spaces and
        progression I was designing around it.
    </div>


    <!-- ====================================================== -->
    <!-- POD / PLANET TRANSITION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Connecting the Planets</h2>

        Expanding Bionaut beyond a single planet required more than creating
        another map. The new world needed to fit into the game's existing travel
        flow.
        <br/><br/>

        The player's journey between levels is structured around the pod:
        the player enters the ship from a planet, accesses the planet map,
        selects a destination, returns to the pod, and then exits into the
        selected planet.
        <br/><br/>

        I worked on integrating the second planet into this flow and added logic
        needed to keep track of the relevant scene as the player moved between
        different parts of the game.
        <br/><br/>

        In the final project, the planet map stores the selected planet scene,
        returns the player to the pod, and the pod door loads the selected
        destination. Working with this transition helped me better understand
        how separate Unity scenes could be connected into a larger gameplay loop.
    </div>


    <!-- ====================================================== -->
    <!-- SECOND PLANET -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Expanding to a Second Planet</h2>

        Later in development, I helped expand Bionaut with a second playable
        planet: <strong>Ardus</strong>, a desert environment that contrasted
        with the greener tutorial world.
        <br/><br/>

        I worked on creating and integrating the new level, connecting it to the
        existing planet-transition flow, and adding presentation details that helped
        distinguish it from Silva.
        <br/><br/>

        I also implemented critter behavior animations within the environment
        and added a sand overlay effect to reinforce the harsher atmosphere of
        the desert planet.
        <br/><br/>

        Reaching a second playable planet was an important milestone because it
        demonstrated that the structure we had built could support the original
        concept of traveling between distinct worlds rather than functioning only
        as a single-level prototype.
    </div>


    <!-- ====================================================== -->
    <!-- MAIN MENU -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Main Menu & Interface Work</h2>

        During a later polish sprint, I created Bionaut's main menu system and
        interface.
        <br/><br/>

        This came at a point where the team deliberately shifted away from
        continuously adding new features and instead focused on improving the
        stability, usability, and presentation of the game we already had.
        <br/><br/>

        Playtesting had repeatedly shown us that interface clarity mattered.
        Players enjoyed moving around and interacting with the world, but confusion
        around menus, objectives, and available actions could make it difficult
        for them to understand the experience.
        <br/><br/>

        That reinforced for me that UI is not separate from gameplay design.
        Even a strong mechanic can become frustrating if the player cannot
        understand how to access or use it.
    </div>


    <!-- EXISTING GAME UI -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-toolbelt.png"
            alt="Bionaut tool selection interface"
        />

        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-inventory.png"
            alt="Bionaut inventory interface"
        />

        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-critter-menu.png"
            alt="Bionaut critter collection interface"
        />

        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-damage.png"
            alt="Bionaut health and damage feedback"
        />
    </div>


    <!-- ====================================================== -->
    <!-- INTEGRATION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Build Integration & Debugging</h2>

        As my responsibilities grew, I also became involved in integrating work
        from multiple team members and preparing demo builds for our playtests.
        <br/><br/>

        This became especially important because each developer was working on
        different systems and Git branches. Individual features could work correctly
        on their own and still create problems once everything was brought together.
        <br/><br/>

        During one sprint, we integrated several major changes too close to the
        playtest deadline. The resulting build contained numerous visible bugs,
        including issues with newly introduced environment elements and systems
        interacting incorrectly.
        <br/><br/>

        I helped merge our changes and prepare the demo build, which made the
        consequences of late integration very obvious.
    </div>


    <!-- ====================================================== -->
    <!-- PROCESS ITERATION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Changing Our Development Process</h2>

        Rather than treating the problematic build as only a collection of bugs,
        we changed the way we approached the following sprint.
        <br/><br/>

        We began setting an earlier internal deadline for feature work so that
        the final day before a playtest could be dedicated specifically to
        merging, building, debugging, and testing.
        <br/><br/>

        That change resulted in a much smoother integration process and fewer
        new problems in the following build.
        <br/><br/>

        Bionaut taught me that development process directly affects game quality.
        Giving a team enough time to integrate and test work can be just as
        important as the amount of content produced during the sprint.
    </div>


    <!-- ====================================================== -->
    <!-- PLAYTESTING -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Designing Through Playtesting</h2>

        Bionaut was repeatedly tested throughout the semester, and those sessions
        had a major influence on how the game evolved.
        <br/><br/>

        One of the most consistent lessons was the balance between
        <strong>guidance and discovery</strong>.
        <br/><br/>

        Players generally enjoyed exploring the planets and interacting with the
        critters, but early versions sometimes provided so little direction that
        players did not understand their immediate objective.
        <br/><br/>

        Instead of abandoning exploration as a core pillar, we adjusted the
        onboarding and progression around it. The opening became more structured
        so the player could understand the game's basic language before being
        given greater freedom.
        <br/><br/>

        That experience changed the way I think about player freedom. Giving the
        player options is valuable, but those options only become meaningful once
        the player understands the systems available to them.
    </div>


    <!-- ====================================================== -->
    <!-- SCOPE -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Managing Scope</h2>

        Our original vision was much larger than the game we ultimately shipped.
        We initially imagined several different planets, each containing unique
        environments, critters, interactions, and progression.
        <br/><br/>

        As development continued, it became clear that creating three to six
        complete planets within a semester would spread our time across too many
        unfinished environments.
        <br/><br/>

        We ultimately focused on building two playable planets and strengthening
        the systems that supported them. Other planned features, including a more
        complete process for rebuilding the player's ship, were reduced or cut.
        <br/><br/>

        That decision reinforced a lesson I had encountered in shorter game jams:
        protecting the core experience is more valuable than keeping every idea
        simply because it was part of the original plan.
    </div>


    <!-- ====================================================== -->
    <!-- LEADERSHIP REFLECTION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Learning to Lead a Team</h2>

        Taking on a project-lead position meant accepting responsibility beyond
        my own individual contribution.
        <br/><br/>

        I learned that keeping a team moving requires more than knowing what
        everyone is supposed to build. Interpersonal conflicts happen, people
        encounter unexpected problems, workloads change, and sometimes the plan
        for a sprint simply does not work.
        <br/><br/>

        Keeping a cool head and making sure everyone had an opportunity to
        communicate became increasingly important as development continued.
        I also learned that a leader has to set an example. If something needed
        to be integrated, tested, organized, or prepared for a build, I wanted
        my teammates to know that I was willing to step in and help get it done.
        <br/><br/>

        It was not always easy, but it gave me a much better understanding of
        what leadership means inside a collaborative development environment.
    </div>


    <!-- ====================================================== -->
    <!-- REFLECTION -->
    <!-- ====================================================== -->

    <div class="paragraph">
        <h2>Reflection</h2>

        Bionaut was one of the projects that helped me grow the most because
        I experienced much more than one development discipline while making it.
        <br/><br/>

        Level design taught me how onboarding, environment layout, and player
        direction interact with systems built by the rest of the team.
        Programming and scene integration gave me experience connecting separate
        pieces of the game into a larger structure. Build preparation showed me
        how quickly individually functional features can fail when integrated
        without enough testing.
        <br/><br/>

        Most importantly, leading the project taught me to think about the health
        of the entire team and game rather than judging success only by the work
        I personally completed.
        <br/><br/>

        I came away from Bionaut as a stronger designer and developer, but also
        with a much better understanding of collaboration, scope, iteration,
        communication, and the responsibility involved in helping guide a game
        from an early prototype toward a finished experience.
    </div>
    `,
    "#55c878",
    true
),
new ProjectData(
    "twelve-mage",
    "Twelve Mage",
    "img/projects/twelve-mage/twelve-mage-icon.png",
    `
    <div class="paragraph">
        <strong>Twelve Mage</strong> is a 2D top-down horde shooter built in C#
        using MonoGame. Players control a mage armed with a shotgun and magical
        abilities while fighting increasingly difficult waves of enemies.
        The goal is to survive as long as possible and achieve the highest score.
        <br/><br/>

        I worked primarily as a gameplay programmer and mechanics designer,
        contributing to the underlying combat systems and helping establish
        foundations that other members of the team continued to expand.
    </div>


    <!-- GAMEPLAY VIDEO -->
    <div class="paragraph center">
        <iframe
            class="youtube"
            src="https://www.youtube.com/embed/hmDvSnZqxbs"
            title="Twelve Mage Gameplay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>


    <!-- PLAY THE GAME -->
    <div class="paragraph">
        <div class="notice">
            <strong>Play Twelve Mage:</strong>
            <br/><br/>

            <a
                href="https://lmendrick.itch.io/twelve-mage"
                target="_blank"
                rel="noopener noreferrer">
                Play Twelve Mage on itch.io
            </a>
        </div>
    </div>


    <!-- PROJECT SNAPSHOT -->
    <div class="paragraph">
        <h2>Project Snapshot</h2>

        <ul>
            <li><strong>Role:</strong> Gameplay Programmer / Mechanics Designer</li>
            <li><strong>Framework:</strong> MonoGame</li>
            <li><strong>Language:</strong> C#</li>
            <li><strong>Team Size:</strong> 4 Developers</li>
            <li><strong>Genre:</strong> 2D Top-Down Horde Shooter</li>
            <li><strong>Development:</strong> Fall 2023</li>
            <li><strong>Focus:</strong> Projectiles, Combat Logic, Damage Systems, Weapon Prototyping, Game-State Foundations</li>
        </ul>
    </div>


    <!-- MY ROLE -->
    <div class="paragraph">
        <h2>My Role</h2>

        I worked primarily as a gameplay programmer and mechanics designer on
        Twelve Mage. My contributions focused on establishing several of the
        systems needed for the game's combat.
        <br/><br/>

        I developed the original projectile system, worked on collision and
        player-damage behavior, prototyped the game's gun class, contributed
        foundations that were later expanded by other members of the team, and
        returned during the final sprint to help with additional polish and
        interface functionality.
        <br/><br/>

        Because Twelve Mage was developed directly with MonoGame rather than a
        full game engine, much of this functionality had to be structured and
        implemented directly in C#.
    </div>


    <!-- GENERAL GAMEPLAY -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/twelve-mage/twelve-mage-gameplay.png"
            alt="Twelve Mage gameplay"
        />
    </div>


    <!-- PROJECTILE SYSTEM -->
    <div class="paragraph">
        <h2>Projectile System</h2>

        One of my primary contributions was creating the projectile class used
        as a foundation for the player's ranged combat.
        <br/><br/>

        Rather than treating a projectile as only an image moving across the
        screen, the class was responsible for tracking several pieces of its
        gameplay behavior, including movement, lifetime, distance traveled,
        and how many targets it could hit.
        <br/><br/>

        Projectiles track their starting position and displacement as they move,
        allowing them to be removed after exceeding their intended range.
        They also have a limited lifetime so projectiles cannot continue existing
        indefinitely after leaving the relevant play space.
        <br/><br/>

        The system also supports a hit limit, providing a foundation for
        projectiles that can penetrate or interact with multiple targets before
        being removed.
    </div>


    <!-- PROJECTILE IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/twelve-mage/twelve-mage-fireball.png"
            alt="Projectile combat in Twelve Mage"
        />
    </div>


    <!-- PROJECTILE MANAGEMENT -->
    <div class="paragraph">
        <h2>Managing Active Projectiles</h2>

        Creating projectiles also meant managing their complete lifecycle within
        the game loop.
        <br/><br/>

        Active projectiles needed to be updated as the game ran and removed when
        they were no longer relevant. This included checking conditions such as
        projectile lifetime, travel distance, collisions, and hit limits.
        <br/><br/>

        Working on this system gave me experience thinking about gameplay objects
        beyond their initial creation. I needed to consider how they were updated,
        how their state changed over time, and when they should be safely removed
        from the game.
    </div>


    <!-- COLLISION -->
    <div class="paragraph">
        <h2>Collision and Damage</h2>

        I also worked on combat collision and damage behavior connecting the
        player, enemies, and projectiles.
        <br/><br/>

        One challenge was that projectile collisions and player-enemy collisions
        behave differently. A projectile is a temporary object that can be removed
        after completing its interaction, while the player and an enemy may remain
        in contact across multiple updates.
        <br/><br/>

        This required additional logic around player damage so continuous collision
        would not simply reduce health uncontrollably every frame.
    </div>


    <!-- ENEMY WAVE IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/twelve-mage/twelve-mage-wave.jpg"
            alt="Enemy wave and combat in Twelve Mage"
        />
    </div>


    <!-- PLAYER DAMAGE -->
    <div class="paragraph">
        <h2>Player Damage & Invulnerability</h2>

        I contributed to the player's damage behavior, including logic surrounding
        temporary invulnerability after taking damage.
        <br/><br/>

        This helped control repeated enemy collisions by introducing a period where
        the player could not immediately take another hit. Without that protection,
        remaining in contact with an enemy could cause health to disappear almost
        instantly because collision checks occur continuously during the game loop.
        <br/><br/>

        I also worked on connecting the player's remaining health to the game-over
        condition, helping complete the basic loop between enemy contact, player
        damage, survival, and failure.
    </div>


    <!-- WEAPON PROTOTYPE -->
    <div class="paragraph">
        <h2>Weapon Prototype</h2>

        I created the original version of a separate gun class intended to visually
        represent the player's weapon independently from the player sprite.
        <br/><br/>

        Early versions exposed problems with positioning and orientation. The gun
        could intersect with the player or appear incorrectly as the player aimed
        in different directions.
        <br/><br/>

        This became a collaborative system as development continued. I established
        the initial class and prototype, while another teammate later expanded the
        implementation with additional update and drawing behavior used to rotate
        and position the weapon around the player.
        <br/><br/>

        This was useful experience in building code that did not remain exclusively
        mine. The class became a foundation another developer could modify and
        expand as the game's needs changed.
    </div>


    <!-- COLLABORATIVE DEVELOPMENT -->
    <div class="paragraph">
        <h2>Collaborative Development</h2>

        Twelve Mage was a team project, and several systems changed ownership or
        were expanded by different developers throughout production.
        <br/><br/>

        Some of the classes I initially worked on became foundations that teammates
        later extended with additional functionality. This required working within
        shared code rather than treating every system as something owned by a
        single programmer from beginning to end.
        <br/><br/>

        That experience helped me become more comfortable with the idea that
        gameplay code is part of a larger project architecture and needs to remain
        understandable and usable by other developers.
    </div>


    <!-- GAME STATE -->
    <div class="paragraph">
        <h2>Game-State Foundation</h2>

        I also created an early template for the game's state architecture within
        the main game class.
        <br/><br/>

        The goal was to establish a way for the game to distinguish between
        different modes rather than treating everything as one continuous gameplay
        state.
        <br/><br/>

        Another teammate later expanded this foundation into the final state system,
        which supported states such as the main menu, gameplay, pause, credits,
        and game over.
    </div>


    <!-- FINAL POLISH -->
    <div class="paragraph">
        <h2>Final Polish</h2>

        During the final sprint, I returned to different parts of the project for
        additional refactoring and polish.
        <br/><br/>

        I contributed menu-button functionality and smaller gameplay and interface
        adjustments while helping prepare the project for its final build.
        <br/><br/>

        I also experimented with fullscreen functionality. After testing the
        implementation, I decided against forcing an unfinished feature into the
        final build. That process reinforced that removing or postponing a feature
        can sometimes be a better decision than shipping something that does not
        meet the quality of the rest of the project.
    </div>


    <!-- WORKING WITHOUT A FULL ENGINE -->
    <div class="paragraph">
        <h2>Working Directly in MonoGame</h2>

        One of the most valuable parts of Twelve Mage was working with MonoGame
        instead of a full game engine.
        <br/><br/>

        In engines such as Unity, Godot, or Unreal, many common systems already
        have established components, editors, and workflows. MonoGame required us
        to work much closer to the underlying C# implementation.
        <br/><br/>

        Systems such as projectile management, collision behavior, state changes,
        drawing, and object updates had to be connected directly to the game's
        update and draw loops.
        <br/><br/>

        That gave me a better understanding of what game engines are doing for
        developers behind the scenes and made later engine-based development
        easier for me to reason about.
    </div>


    <!-- REFLECTION -->
    <div class="paragraph">
        <h2>Reflection</h2>

        Twelve Mage gave me experience building gameplay systems at a lower level
        than I had previously been accustomed to.
        <br/><br/>

        Creating the projectile system taught me to think about the complete
        lifecycle of a gameplay object: how it is created, updated, moved,
        interacts with other objects, tracks its own state, and eventually gets
        removed.
        <br/><br/>

        Working on collision and player damage showed me how seemingly simple
        mechanics can create unexpected problems when they operate continuously
        inside a game loop. The solution was not simply detecting a collision,
        but controlling how frequently that collision should affect gameplay.
        <br/><br/>

        The project also gave me experience creating foundations that other
        programmers later expanded. Seeing systems change through collaboration
        reinforced the importance of writing code as part of a team rather than
        thinking only about my own implementation.
        <br/><br/>

        Overall, Twelve Mage strengthened my understanding of C#, gameplay
        architecture, debugging, iteration, and the lower-level systems beneath
        the tools I would later use in Unity, Godot, and Unreal Engine.
    </div>
    `,
    "#55c878"
),

   new ProjectData(
    "hardline-vr",
    "Hardline VR",
    "img/projects/hardline-vr/hardline-icon.png",
    `
    <div class="paragraph">
        <strong>Hardline VR</strong> is a fast-paced first-person VR hack-and-slash
        developed in Godot. Inspired by games such as <em>Hotline Miami</em> and
        <em>SUPERHOT</em>, the project focuses on physical combat, environmental
        interaction, and giving the player different ways to fight through encounters.
        <br/><br/>

        Hardline originally began as a two-person semester project before I continued
        development independently after the course ended. My interest in VR development
        pushed me to keep experimenting with the project, expand its combat systems,
        and explore what I could build using Godot's XR tools.
    </div>


    <!-- GAMEPLAY VIDEO -->
    <div class="paragraph center">
        <iframe
            class="youtube"
            src="https://www.youtube.com/embed/5BUZLXEioRo"
            title="Hardline VR Gameplay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>


    <!-- PLAY THE GAME -->
    <div class="paragraph">
        <div class="notice">
            <strong>Play Hardline VR:</strong>
            <br/><br/>

            <a
                href="https://ajsgottheway.itch.io/hardline-vr"
                target="_blank"
                rel="noopener noreferrer">
                Play Hardline VR on itch.io
            </a>
        </div>
    </div>


    <!-- PROJECT SNAPSHOT -->
    <div class="paragraph">
        <h2>Project Snapshot</h2>

        <ul>
            <li><strong>Role:</strong> VR Developer / Combat Designer</li>
            <li><strong>Engine:</strong> Godot 4.4</li>
            <li><strong>Language:</strong> GDScript</li>
            <li><strong>Platform:</strong> Meta Quest 3S</li>
            <li><strong>Genre:</strong> First-Person VR Hack-and-Slash</li>
            <li><strong>Origin:</strong> Two-person semester project</li>
            <li><strong>Continued Development:</strong> Independent development after the course</li>
        </ul>
    </div>


    <!-- PROJECT GOALS -->
    <div class="paragraph">
        <h2>Project Goals</h2>

        The original goal behind Hardline was to create a fast-paced action game
        that took advantage of the physical interactions possible in VR.
        Instead of relying entirely on traditional button-based combat, we wanted
        the player to physically grab weapons, swing objects, aim firearms, dodge
        attacks, and use the environment during encounters.
        <br/><br/>

        We intentionally kept the initial scope focused around creating a playable
        level where these ideas could be tested. This allowed us to prioritize the
        core combat experience rather than trying to build a much larger game before
        we knew whether the mechanics were fun.
    </div>


    <!-- MY ROLE -->
    <div class="paragraph">
        <h2>My Role</h2>

        During the original semester project, I worked primarily on the game's
        implementation, combat mechanics, environment, weapons, and VR interactions.
        The project required me to work between programming and design, figuring out
        both how an interaction should function technically and how it should feel
        when physically performed by the player.
        <br/><br/>

        I created the main playable level and layout, implemented combat and
        environmental interactions, worked on weapon functionality, and developed
        destructible elements such as enemies, windows, and environmental weapons.
        I also created the game's background music and assets for the gun and
        sledgehammer.
        <br/><br/>

        After the course ended, I received my teammate's blessing to continue
        developing Hardline independently. From that point forward, the project
        became an opportunity for me to explore VR development on my own and expand
        the systems beyond what we had completed for the class.
    </div>


    <!-- LEARNING XR -->
    <div class="paragraph">
        <h2>Learning Godot XR</h2>

        Before Hardline, I had experience creating 3D projects in Godot, but I had
        never developed for VR or worked with Godot's XR environment.
        <br/><br/>

        I initially relied on tutorials and documentation to understand the OpenXR
        workflow, XR plugins, VR controllers, and the fundamentals of interacting
        with objects using virtual hands.
        <br/><br/>

        My first major milestone was simply getting functional VR hands into the
        game and allowing the player to grab objects.
        <br/><br/>

        Once I understood those fundamentals, it became my responsibility to figure
        out how to turn them into the mechanics Hardline actually needed. Basic
        grabbing became the foundation for weapons, environmental interactions,
        melee combat, firearms, and destructible objects.
    </div>


    <!-- GENERAL XR / INTERACTION IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-combat-1.png"
            alt="Hardline VR gameplay and interaction"
        />
    </div>


    <!-- COMBAT DESIGN -->
    <div class="paragraph">
        <h2>Designing Combat for VR</h2>

        One of the biggest design questions I explored was how traditional
        first-person action mechanics should change when the player's physical
        movement becomes part of the controls.
        <br/><br/>

        Rather than pressing a button and watching an attack animation, the player
        physically performs many of Hardline's actions. They can grab a weapon,
        swing it at an enemy, aim a firearm, pick up objects in the environment,
        and move their body to react to incoming threats.
        <br/><br/>

        This meant that getting a mechanic technically functional was only the first
        step. Weapons needed to be responsive, objects needed to behave predictably
        when grabbed, and combat spaces needed enough room for the player to
        physically interact with enemies.
    </div>


    <!-- MELEE -->
    <div class="paragraph">
        <h2>Melee Combat</h2>

        Melee combat was built around allowing the player to physically use weapons
        and objects rather than relying on predetermined attack animations.
        <br/><br/>

        Weapons such as the sledgehammer can be picked up and swung using the VR
        controllers. The player's own movement determines how the weapon is used,
        making positioning and physical interaction an important part of combat.
        <br/><br/>

        The melee system uses collision areas on weapons to detect contact with
        enemies and apply damage. This allowed the player's physical swing to
        become the attack itself instead of triggering a traditional character
        animation.
        <br/><br/>

        I also experimented with environmental weapons so combat was not restricted
        to traditional equipment. Objects such as chairs could become temporary
        weapons, reinforcing the idea that the environment itself could be part
        of the player's combat toolkit.
    </div>


    <!-- MELEE IMAGES -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-melee.png"
            alt="Hardline VR melee combat"
        />

        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-sledgehammer.png"
            alt="Using the sledgehammer in Hardline VR"
        />
    </div>


    <!-- FIREARMS -->
    <div class="paragraph">
        <h2>VR Firearm System</h2>

        As I continued Hardline independently after the course, one area I wanted
        to expand was ranged combat.
        <br/><br/>

        I developed a firearm system that connects the physical XR interaction
        with the weapon's gameplay behavior. The gun detects which VR controller
        is holding it and listens for the controller's trigger input while the
        weapon is being held.
        <br/><br/>

        Firing creates a projectile from a designated muzzle position. The projectile
        receives its direction from the weapon, travels forward at a configurable
        speed, detects collisions, applies damage to enemies, and removes itself
        after impact or once its lifetime expires.
        <br/><br/>

        Developing the system helped me move beyond simply making objects grabbable
        in VR. I was taking the foundational XR interactions I had learned earlier
        and connecting them to my own combat mechanics.
    </div>


    <!-- FIREARM IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-combat-2.png"
            alt="Gun combat in Hardline VR"
        />
    </div>


    <!-- ENEMIES -->
    <div class="paragraph">
        <h2>Enemy Combat and Destruction</h2>

        Enemies were designed to give the player targets that worked with both
        physical melee attacks and ranged weapons.
        <br/><br/>

        During combat, enemies can move toward the player and receive damage from
        the player's weapons. I wanted defeating an enemy to provide stronger
        physical feedback than simply playing an animation or removing the enemy
        from the scene.
        <br/><br/>

        When an enemy is defeated, the active enemy is replaced by a physics-based
        broken version. The body separates into individual pieces that react to
        physics and remain temporarily within the environment.
        <br/><br/>

        This gave successful attacks a more immediate visual and physical response
        while complementing the exaggerated nature of Hardline's combat.
    </div>


    <!-- ENEMY DESTRUCTION -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-enemy-destruction-1.png"
            alt="Destructible enemy system in Hardline VR"
        />
    </div>


    <!-- ENVIRONMENTAL COMBAT -->
    <div class="paragraph">
        <h2>Environmental Weapons</h2>

        One of the ideas I wanted to explore was allowing the environment itself
        to become part of combat.
        <br/><br/>

        The chair is an example of this approach. Rather than existing only as
        decoration, the player can physically grab the chair and swing it at an
        enemy as a temporary melee weapon.
        <br/><br/>

        When the chair successfully strikes an enemy, it applies damage and then
        replaces itself with a broken version made from separate physics-driven
        pieces.
        <br/><br/>

        This creates a complete physical interaction:
        <strong>grab the chair, swing it, hit an enemy, deal damage, and break
        the weapon.</strong>
        <br/><br/>

        Giving environmental objects temporary combat value helped support the
        improvised and aggressive style I wanted Hardline's encounters to encourage.
    </div>


    <!-- ENVIRONMENTAL DESTRUCTION -->
    <div class="paragraph">
        <h2>Environmental Destruction</h2>

        Destruction was not limited to enemies and weapons. I also developed
        breakable environmental elements to make the level react to the player's
        actions.
        <br/><br/>

        Windows track damage and can be replaced by shattered versions once they
        break. Combined with breakable objects such as chairs and destructible
        enemies, these interactions prevent the environment from feeling like
        a completely static backdrop.
        <br/><br/>

        This supported one of the ideas behind Hardline from the beginning:
        the player should be able to look at their surroundings and think about
        how the objects around them could be used during a fight.
    </div>


    <!-- GLASS IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-glass-destruction.png"
            alt="Breakable glass in Hardline VR"
        />
    </div>


    <!-- LEVEL DESIGN -->
    <div class="paragraph">
        <h2>Level and Environment Design</h2>

        I created the primary playable environment with the combat mechanics
        in mind. Because Hardline is a VR game, the level needed to support
        physical movement while still controlling the pacing of encounters.
        <br/><br/>

        Spaces needed enough room for players to swing weapons and react to
        enemies without making encounters feel empty. Weapon and environmental
        object placement also helped give players options when entering a fight.
        <br/><br/>

        The layout also needed to support the ability to quickly move between
        enemies and interact with objects without constantly interrupting the
        pace of combat.
        <br/><br/>

        The level became the space where the different systems I developed could
        work together: movement, grabbing, melee combat, firearms, enemies,
        destruction, and environmental interaction.
    </div>


    <!-- LEVEL / ENCOUNTER IMAGES -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-combat-3.png"
            alt="Hardline VR combat environment"
        />

        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-enemies.png"
            alt="Enemies within the Hardline VR level"
        />
    </div>


    <!-- MOVEMENT -->
    <div class="paragraph">
        <h2>Continuous VR Locomotion</h2>

        Hardline uses controller-based continuous locomotion rather than
        teleportation. I wanted movement to support the fast pace of the combat
        and allow the player to quickly reposition themselves during encounters.
        <br/><br/>

        Developing around continuous movement also affected how I approached the
        environment and combat. The player needed room to move between enemies,
        approach weapons, retreat from danger, and navigate the level without
        constantly interrupting the action.
    </div>


    <!-- PLAYER DAMAGE -->
    <div class="paragraph">
        <h2>Player Damage and Game State</h2>

        I also implemented player health and damage feedback to complete the basic
        combat loop.
        <br/><br/>

        Enemy attacks reduce the player's health, providing a consequence for
        allowing enemies to get too close during encounters. When the player's
        health reaches zero, the game transitions into a game-over state.
        <br/><br/>

        Although simple, this system was important for connecting the individual
        combat mechanics into a complete encounter loop: the player can attack
        enemies, enemies can threaten the player, and either side can lose the fight.
    </div>


    <!-- DEATH SCREEN -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-deathscreen.png"
            alt="Hardline VR death screen"
        />
    </div>


    <!-- AUDIO / ASSETS -->
    <div class="paragraph">
        <h2>Audio and Presentation</h2>

        I also worked on parts of Hardline outside of programming and level
        development.
        <br/><br/>

        I created the background music used in the game and created assets for
        weapons including the gun and sledgehammer.
        <br/><br/>

        Working across these different areas helped me shape the project toward
        a more consistent action-focused experience instead of treating each
        system as an isolated feature.
    </div>


    <!-- INDEPENDENT DEVELOPMENT -->
    <div class="paragraph">
        <h2>From Class Project to Independent Development</h2>

        One of the most important parts of Hardline's development happened after
        the semester ended.
        <br/><br/>

        I had become genuinely interested in VR development while making the
        original project and did not want my experience with it to end when the
        class did. With my teammate's blessing, I continued developing Hardline
        independently.
        <br/><br/>

        This changed how I approached the project. Without a class deadline or
        assignment determining what needed to be implemented, I could choose
        systems based on what I wanted to learn and what I believed would improve
        the game.
        <br/><br/>

        Expanding the firearm system and continuing to experiment with combat,
        destruction, and interaction became examples of this later independent
        development.
    </div>


    <!-- CHALLENGES -->
    <div class="paragraph">
        <h2>Challenges and Iteration</h2>

        Hardline presented a different set of challenges from my previous
        projects because I was learning VR development while simultaneously
        trying to design a VR game.
        <br/><br/>

        Early development involved a significant amount of experimentation.
        Systems that would be straightforward in a traditional first-person
        game had to account for tracked hands, physical player movement,
        grabbing, collisions, and the unpredictability that comes from giving
        players direct control over objects.
        <br/><br/>

        The original class project also taught me lessons about time management,
        communication, and prioritizing game feel. As development continued,
        I became more aware that a mechanic simply working was not enough.
        Interactions needed to communicate their results clearly and feel
        responsive when performed in VR.
    </div>


    <!-- REFLECTION -->
    <div class="paragraph">
        <h2>Reflection</h2>

        Hardline became more than a semester project for me. It was my introduction
        to developing specifically for VR and one of the projects that pushed me
        to become more comfortable learning unfamiliar technology independently.
        <br/><br/>

        I began by following tutorials just to understand how to create VR hands
        and grab an object. From there, I learned how to take those individual
        concepts and apply them to problems that did not have a step-by-step
        solution: melee weapons, firearms, destructible enemies, breakable
        environments, combat encounters, and reusable gameplay systems.
        <br/><br/>

        Continuing Hardline after the course ended was also important to me.
        I continued because I was interested in VR and wanted to see how much
        further I could take what I had learned.
        <br/><br/>

        The project reinforced the way I like to approach game development:
        learn the fundamentals, break larger mechanics into smaller problems,
        experiment with solutions, and then bring those systems together into
        something the player can actually experience.
    </div>


    <!-- PRODUCTION NOTE -->
    <div class="paragraph">
        <div class="notice">
            <strong>Production Note:</strong>
            Hardline VR began as a two-person academic project and was later
            continued independently by me after the course ended.
        </div>
    </div>
    `,
    "#55c878",
    true
),

// new ProjectData(
//     "gateway",
//     "The GATEWAY Project",
//     "img/projects/gateway/gateway-icon.png",
//     `
//     <div class="paragraph">
//         <strong>The GATEWAY Project</strong> is a multi-level game developed in Unity
//         that transitions between genres as the player progresses. The experience begins
//         as a 2D top-down puzzle game before eventually transitioning into a 3D
//         first-person shooter.
//         <br/><br/>

//         My primary completed work on the project has focused on the 2D portion, where
//         I was responsible for the level's narrative as well as the integration and UI
//         of its Ink-based dialogue system. I am currently working on the combat mechanics,
//         design, and feel of the upcoming 3D first-person shooter portion.
//     </div>


//     <!-- PROJECT SNAPSHOT -->
//     <div class="paragraph">
//         <h2>Project Snapshot</h2>

//         <ul>
//             <li><strong>Role:</strong> Technical Designer / Gameplay Programmer</li>
//             <li><strong>Engine:</strong> Unity</li>
//             <li><strong>Language:</strong> C#</li>
//             <li><strong>Narrative System:</strong> Ink</li>
//             <li><strong>Genres:</strong> 2D Top-Down Puzzle / 3D First-Person Shooter</li>
//             <li><strong>Status:</strong> In Development</li>
//             <li><strong>Focus:</strong> Narrative Design, Dialogue Systems, UI, Gameplay & Combat Design</li>
//         </ul>
//     </div>


//     <!-- MY ROLE -->
//     <div class="paragraph">
//         <h2>My Role</h2>

//         My responsibilities on GATEWAY have evolved alongside the project.
//         <br/><br/>

//         For the 2D level, I worked between narrative design and technical implementation.
//         I wrote the narrative for the level and developed the systems needed to integrate
//         and present that narrative within the game.
//         <br/><br/>

//         This included working with Ink, integrating dialogue into Unity, developing
//         the narrative UI, supporting branching player choices, and creating
//         character-specific dialogue presentations.
//         <br/><br/>

//         With development now moving toward the 3D first-person shooter portion,
//         my current focus is shifting toward gameplay programming and combat design.
//     </div>


//     <!-- ====================================================== -->
//     <!-- 2D NARRATIVE SECTION -->
//     <!-- ====================================================== -->

//     <div class="paragraph">
//         <h2>2D Level — Narrative Design</h2>

//         For the 2D portion of GATEWAY, I was responsible for writing the narrative
//         content for the level and determining how that story would be delivered
//         as the player progressed.
//         <br/><br/>

//         Because the level combines narrative with top-down puzzle gameplay, I wanted
//         the story to feel connected to the player's progression rather than exist
//         separately from it. Narrative moments needed to work alongside exploration
//         and puzzle solving without constantly interrupting the player.
//         <br/><br/>

//         This required thinking about when information should be presented, how much
//         information the player should receive at once, and how dialogue could support
//         the pacing and progression of the level.
//     </div>


//     <!-- 2D LEVEL IMAGE -->
//     <div class="paragraph center">
//         <img
//             class="pc-screenshot"
//             src="img/projects/gateway/gateway-2d-level.png"
//             alt="GATEWAY 2D top-down puzzle level"
//         />
//     </div>


//     <!-- INK SYSTEM -->
//     <div class="paragraph">
//         <h2>Ink Dialogue System</h2>

//         I developed the project's dialogue functionality in Unity using
//         <strong>Ink</strong> as the foundation for writing and controlling
//         conversations.
//         <br/><br/>

//         The system connects Ink narrative content with Unity's gameplay and UI,
//         allowing conversations to progress while supporting different speakers
//         and branching player choices.
//         <br/><br/>

//         Building the system required me to work between narrative design and
//         programming. I needed to consider not only how conversations were written,
//         but also how Ink, Unity, the interface, and gameplay progression would
//         communicate with one another.
//     </div>


//     <!-- DIALOGUE IMAGE -->
//     <div class="paragraph center">
//         <img
//             class="pc-screenshot"
//             src="img/projects/gateway/gateway-dialogue.png"
//             alt="GATEWAY Ink dialogue system"
//         />
//     </div>


//     <!-- BRANCHING CHOICES -->
//     <div class="paragraph">
//         <h2>Branching Player Choices</h2>

//         The dialogue system supports choices authored through Ink. When the player
//         reaches a decision during a conversation, the available responses are
//         presented through the Unity UI.
//         <br/><br/>

//         The player's selection is then passed back into the Ink story, allowing
//         the conversation to continue along the appropriate branch.
//         <br/><br/>

//         This separation between narrative content and presentation allowed me to
//         write branching conversations while continuing to use the same underlying
//         dialogue system throughout the level.
//     </div>


//     <!-- CHOICE IMAGE -->
//     <div class="paragraph center">
//         <img
//             class="pc-screenshot"
//             src="img/projects/gateway/gateway-choices.png"
//             alt="Branching player choices in GATEWAY"
//         />
//     </div>


//     <!-- SPEAKER UI -->
//     <div class="paragraph">
//         <h2>Speaker-Specific Dialogue UI</h2>

//         As the narrative system expanded, I wanted different characters to have
//         distinct presentations instead of displaying every conversation through
//         the same static layout.
//         <br/><br/>

//         I expanded the system so speaker information could determine elements such
//         as character portraits, dialogue positioning, text presentation, colors,
//         and the placement of player choices.
//         <br/><br/>

//         One challenge came from characters whose portraits appeared on different
//         sides of the screen. Simply moving the portrait was not enough. The dialogue
//         text and player choices also needed to move so they would not overlap the
//         character artwork or create awkward compositions.
//     </div>


//     <!-- SPEAKER LAYOUT IMAGES -->
//     <div class="paragraph center">
//         <img
//             class="pc-screenshot"
//             src="img/projects/gateway/gateway-dialogue-left.png"
//             alt="GATEWAY dialogue layout with a character portrait on the left"
//         />

//         <img
//             class="pc-screenshot"
//             src="img/projects/gateway/gateway-dialogue-right.png"
//             alt="GATEWAY dialogue layout with a character portrait on the right"
//         />
//     </div>


//     <!-- ADAPTIVE UI -->
//     <div class="paragraph">
//         <h2>Adaptive Dialogue Layouts</h2>

//         Rather than treating portraits, dialogue text, and player choices as
//         unrelated UI elements, I worked toward layouts that could adapt the entire
//         dialogue presentation around the active speaker.
//         <br/><br/>

//         The system allows character information to control the position and size
//         of different interface elements so conversations can use different
//         compositions while continuing to rely on the same core dialogue functionality.
//         <br/><br/>

//         This made it easier to introduce different speakers without rebuilding
//         the dialogue interface for every character.
//     </div>


//     <!-- REUSABILITY -->
//     <div class="paragraph">
//         <h2>Building for Reusability</h2>

//         The narrative system began as a more limited implementation, but its
//         requirements grew as additional characters, choices, and presentation
//         styles were introduced.
//         <br/><br/>

//         I continued restructuring the system so new speakers and conversations
//         could be added without rewriting the underlying dialogue functionality.
//         Speaker data could define the visual information needed by the interface
//         while Ink remained responsible for the narrative flow.
//         <br/><br/>

//         This changed the problem from simply making an individual conversation
//         work to developing a narrative framework capable of supporting the rest
//         of the level.
//     </div>


//     <!-- ====================================================== -->
//     <!-- 3D FPS - CURRENT DEVELOPMENT -->
//     <!-- ====================================================== -->

//     <div class="paragraph">
//         <h2>Currently Developing — 3D FPS Combat</h2>

//         GATEWAY's next major transition takes the player from the 2D top-down
//         experience into a fully 3D first-person shooter.
//         <br/><br/>

//         I am currently working on the combat mechanics, feel, and design of this
//         portion of the game in Unity using C#. Because the FPS is still in active
//         development, these systems are continuing to change as I prototype and
//         iterate on the direction of the combat.
//         <br/><br/>

//         One of my references during this process is <em>Forgive Me Father</em>.
//         I have been studying games like it while thinking about elements such as
//         weapon responsiveness, feedback, pacing, and the overall rhythm of
//         first-person combat.
//         <br/><br/>

//         As this portion of GATEWAY develops further, I plan to continue documenting
//         the combat systems and the design decisions behind them.
//     </div>


//     <!-- OPTIONAL: ONE CURRENT FPS DEVELOPMENT IMAGE -->
//     <div class="paragraph center">
//         <img
//             class="pc-screenshot"
//             src="img/projects/gateway/gateway-fps-development.png"
//             alt="GATEWAY first-person shooter currently in development"
//         />
//     </div>


//     <!-- REFLECTION -->
//     <div class="paragraph">
//         <h2>Reflection</h2>

//         GATEWAY has given me the opportunity to work between narrative design and
//         technical implementation within a larger project.
//         <br/><br/>

//         Developing the 2D portion challenged me to connect narrative writing,
//         Ink, C#, branching choices, UI design, and gameplay progression into a
//         system that could support multiple conversations and characters rather
//         than treating each interaction independently.
//         <br/><br/>

//         As the project moves into its 3D portion, I am now applying that same
//         iterative approach to a different problem: designing and developing
//         first-person combat.
//     </div>
//     `,
//     "#55c878"
// ),

// new ProjectData(
//     "changeling",
//     "Changeling",
//     "img/projects/changeling/Changeling.png",
//     `
//     <div class="paragraph">
//         <strong>Changeling</strong> is a first-person VR narrative mystery developed
//         in Unreal Engine. Players take the role of private detective Aurelia Walker,
//         who possesses the ability to dream-walk through the memories of anyone she
//         touches.
//         <br/><br/>

//         I contributed to the project as a level designer, narrative designer, and
//         game developer. My work focused primarily on an early iteration of the
//         Toddler Level, where I developed level and puzzle concepts, while also
//         collaborating on narrative development for the larger Aurelia and Nyx
//         storyline.
//     </div>


//     <!-- PLAY THE GAME -->
//     <div class="paragraph">
//         <div class="notice">
//             <strong>Explore Changeling VR:</strong>
//             <br/><br/>

//             <a
//                 href="https://changelingvr.vercel.app/download"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 Visit the Official Changeling VR Website
//             </a>

//             <br/>

//             <a
//                 href="https://store.steampowered.com/app/3182270/Changeling_VR/"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 Play Changeling VR on Steam
//             </a>
//         </div>
//     </div>


//     <!-- PROJECT SNAPSHOT -->
//     <div class="paragraph">
//         <h2>Project Snapshot</h2>

//         <ul>
//             <li><strong>Role:</strong> Level Designer / Narrative Designer / Game Developer</li>
//             <li><strong>Engine:</strong> Unreal Engine</li>
//             <li><strong>Programming:</strong> C++ / Blueprints</li>
//             <li><strong>Platform:</strong> VR</li>
//             <li><strong>Genre:</strong> Narrative Mystery / Puzzle</li>
//             <li><strong>Focus:</strong> Level Design, Puzzle Design, Narrative Design, Unreal Prototyping</li>
//         </ul>
//     </div>


//     <!-- MY ROLE -->
//     <div class="paragraph">
//         <h2>My Role</h2>

//         My work on Changeling was split primarily between
//         <strong>level design and narrative design</strong>.
//         <br/><br/>

//         On the level design side, I contributed to the development of an early
//         iteration of the Toddler Level, centered around Kirsten and her memories.
//         I developed level and puzzle concepts while learning to work within an
//         established Unreal Engine VR project using C++ and Blueprints.
//         <br/><br/>

//         On the narrative side, I collaborated with co-writer
//         <strong>Ben Sultzer</strong> on dialogue and story development. This work
//         extended beyond the Toddler Level and contributed to the larger narrative
//         surrounding Aurelia and Nyx.
//     </div>


//     <!-- ====================================================== -->
//     <!-- TODDLER LEVEL -->
//     <!-- ====================================================== -->

//     <div class="paragraph">
//         <h2>The Toddler Level</h2>

//         My primary level design work focused on an early version of the
//         Toddler Level, which takes place within Kirsten's memories.
//         <br/><br/>

//         One of my goals was to approach the environment from the perspective of
//         a young child's imagination. Rather than building another realistic space,
//         I explored the idea of transforming familiar toys and objects into a much
//         larger fantasy world.
//         <br/><br/>

//         This led to the concept of a kingdom constructed from children's building
//         blocks, where ordinary toys could become important objects, structures,
//         and landmarks within Kirsten's imagined world.
//     </div>


//     <!-- ADD TODDLER LEVEL / BLOCKOUT IMAGE HERE IF AVAILABLE -->
//     <!--
//     <div class="paragraph center">
//         <img
//             class="pc-screenshot"
//             src="img/projects/changeling/changeling-toddler-level.png"
//             alt="Early Toddler Level development in Changeling"
//         />
//     </div>
//     -->


//     <!-- BUILDING BLOCK PUZZLE -->
//     <div class="paragraph">
//         <h2>Building Block Puzzle Design</h2>

//         I developed the foundation for a puzzle structure where the player would
//         explore different sections of the block kingdom, locate missing pieces,
//         and assemble objects needed to continue.
//         <br/><br/>

//         Instead of simply collecting keys, the objects would have meaning within
//         the imaginary kingdom. Concepts included reconstructing a lever to interact
//         with the environment, assembling a sword and shield, and recovering a crown.
//         <br/><br/>

//         Each completed object would allow the player to progress farther into the
//         level while reinforcing the idea that they were navigating a world created
//         through Kirsten's imagination.
//     </div>


//     <!-- LEVEL PROGRESSION -->
//     <div class="paragraph">
//         <h2>Designing Progression</h2>

//         The puzzle structure was intended to gradually move the player through
//         different sections of the block kingdom rather than presenting every
//         challenge independently.
//         <br/><br/>

//         Exploration, object assembly, and environmental interaction would guide
//         the player toward the larger narrative purpose of the level: discovering
//         more about what was happening inside Kirsten's memories and eventually
//         encountering Nyx.
//         <br/><br/>

//         Designing the level this way helped me think about puzzles as part of a
//         larger progression loop. A puzzle needed to do more than provide an
//         obstacle; it could reinforce the environment's theme, encourage exploration,
//         and contribute to the narrative at the same time.
//     </div>


//     <!-- ====================================================== -->
//     <!-- NARRATIVE -->
//     <!-- ====================================================== -->

//     <div class="paragraph">
//         <h2>Narrative Development</h2>

//         In addition to my level design work, I collaborated with co-writer
//         <strong>Ben Sultzer</strong> on narrative development for Changeling.
//         My writing contributions extended beyond the Toddler Level and included
//         work on the larger story surrounding Aurelia and Nyx.
//         <br/><br/>

//         We worked on dialogue and story beats that helped develop the relationship
//         between the two characters across the game. This meant thinking about how
//         information introduced earlier in the experience could establish questions
//         and ideas that would become more important as Aurelia uncovered the truth.
//         <br/><br/>

//         Working on narrative across multiple parts of the game challenged me to
//         think beyond an individual scene or level and consider how each interaction
//         contributed to the player's understanding of the larger story.
//     </div>


//     <!-- TODDLER NARRATIVE -->
//     <div class="paragraph">
//         <h2>Connecting the Toddler Level to the Larger Story</h2>

//         The Toddler Level was intended to serve an important narrative purpose
//         beyond its individual puzzles.
//         <br/><br/>

//         Kirsten's memory develops into one of Aurelia's more direct encounters
//         with Nyx. What initially appears to be part of a child's imagined world
//         becomes more threatening as Nyx begins interacting directly with Aurelia.
//         <br/><br/>

//         This allowed the level to contribute to the larger mystery surrounding
//         Nyx rather than existing as a completely isolated memory.
//     </div>


//     <!-- WRITING ACROSS GAME -->
//     <div class="paragraph">
//         <h2>Writing Across the Game</h2>

//         Collaborating on the Aurelia and Nyx storyline gave me experience thinking
//         about narrative continuity across multiple locations and stages of a game.
//         <br/><br/>

//         We had to consider what the player already knew, what information should
//         remain mysterious, and how earlier events could take on additional meaning
//         once the player gained more context.
//         <br/><br/>

//         The relationship gradually develops from hints that something is wrong
//         toward Aurelia confronting Nyx and learning more about Nyx's connection
//         to her past, her abilities, and the mystery she has been investigating.
//     </div>


//     <!-- ====================================================== -->
//     <!-- UNREAL -->
//     <!-- ====================================================== -->

//     <div class="paragraph">
//         <h2>Learning Unreal Engine</h2>

//         Changeling also gave me the opportunity to expand my experience with
//         <strong>Unreal Engine, C++, and Blueprints</strong> while contributing
//         to an existing VR production.
//         <br/><br/>

//         Working inside an established project was different from starting with
//         an empty scene. I needed to understand systems and workflows created by
//         other developers, learn how different parts of the project interacted,
//         and prototype ideas while working within the structure that was already
//         in place.
//         <br/><br/>

//         This strengthened my understanding of Unreal's Blueprint workflow and
//         gave me more experience moving between visual scripting, programming,
//         design, and level implementation.
//     </div>


//     <!-- ====================================================== -->
//     <!-- CUT CONTENT -->
//     <!-- ====================================================== -->

//     <div class="paragraph">
//         <h2>When a Level Gets Cut</h2>

//         The iteration of the Toddler Level that I worked on was ultimately cut
//         as the project's scope changed and the team worked within its remaining
//         development time.
//         <br/><br/>

//         That meant a significant amount of the level design work I had contributed
//         would not appear in the playable version of the game.
//         <br/><br/>

//         While disappointing, this became one of the most valuable production
//         lessons I took away from Changeling.
//         <br/><br/>

//         Games change throughout development. Mechanics, levels, and features can
//         be redesigned or removed because of scope, time, technical limitations,
//         or changes in the direction of the larger project. Learning to separate
//         myself from the work, understand why those decisions are sometimes
//         necessary, and continue contributing to the team was an important part
//         of the experience.
//     </div>


//     <div class="paragraph">
//         <div class="notice">
//             <strong>Production Note:</strong>
//             The Toddler Level described in this case study represents an earlier
//             iteration of Changeling's development. The specific level design and
//             puzzle concepts I worked on were cut as the project evolved.
//         </div>
//     </div>


//     <!-- ====================================================== -->
//     <!-- REFLECTION -->
//     <!-- ====================================================== -->

//     <div class="paragraph">
//         <h2>Reflection</h2>

//         Changeling taught me about much more than level design or learning another
//         game engine.
//         <br/><br/>

//         Designing the Toddler Level helped me think about how puzzle mechanics,
//         environmental storytelling, exploration, and narrative could reinforce
//         one another rather than being designed as completely separate parts of
//         the experience.
//         <br/><br/>

//         Collaborating on the narrative gave me experience considering story
//         continuity beyond a single level and working with another writer to develop
//         characters and story beats that needed to fit within a much larger game.
//         <br/><br/>

//         Working in Unreal expanded my experience with C++ and Blueprints while
//         teaching me how to contribute within systems created by other developers.
//         <br/><br/>

//         Most importantly, having a level I worked on ultimately be cut taught me
//         an important lesson about collaborative game development. Not every idea
//         or feature will survive production. Being able to accept those changes,
//         learn from the work, and continue moving the project forward is just as
//         important as creating the work in the first place.
//     </div>
//     `,
//     "#55c878"
//)
];