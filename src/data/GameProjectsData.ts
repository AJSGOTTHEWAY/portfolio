import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData(
        "intergalactic-ducky",
        "Intergalactic Ducky",
        "img/projects/intergalactic-ducky/ducky-icon.jpg",
        `
        <div class="paragraph">
            <strong>Intergalactic Ducky</strong> is a 3D isometric adventure game created in Godot during HACK.COMS '24.
            Players explore an alien planet and complete environmental challenges to recover missing ship parts and escape.
            The game was developed in only 24 hours and was awarded <strong>Goostavo's Favorite</strong>.
        </div>

        <!-- GAMEPLAY VIDEO -->
        <div class="paragraph center">
            <iframe
                class="youtube"
                src="https://www.youtube.com/watch?v=vo88JMvw5Os"
                title="Intergalactic Ducky Gameplay"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <!-- HERO GAMEPLAY IMAGE -->
        <div class="paragraph center">
            <img
                class="pc-screenshot"
                src="img/projects/intergalactic-ducky/ducky-ship.png"
                alt="Intergalactic Ducky gameplay"
            />
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

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-cosmo.png"
            alt="Meeting Cosmo in Intergalactic Ducky"
        />

        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-ship-part.png"
            alt="Finding a ship part in Intergalactic Ducky"
        />
    </div>

    <div class="paragraph">
        <h3>Low-Gravity Platforming</h3>
        The second challenge required the player to jump across floating meteors while navigating reduced gravity.
        Players had to carefully time their jumps and account for the increased jump height.
        <br/><br/>
        The isometric perspective made judging depth and landing positions more difficult, which increased the
        challenge and made reaching the ship part at the end feel earned.
    </div>

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-meteor-platforming.png"
            alt="Low-gravity platforming challenge in Intergalactic Ducky"
        />
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

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-invisible-maze.png"
            alt="Invisible maze challenge in Intergalactic Ducky"
        />
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

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/intergalactic-ducky/ducky-final-dialogue.png"
            alt="Intergalactic Ducky final objective"
        />
    </div>

    <div class="paragraph">
        <div class="notice">
            Awarded <strong>Goostavo's Favorite</strong> at HACK.COMS '24.
        </div>
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
        <strong>Bionaut</strong> is a 2D top-down space exploration game developed in Unity.
        Stranded in an unknown part of the galaxy, the player must explore alien planets,
        discover and befriend wildlife, recover ship parts, and find a way home.
        Each planet introduces new environments and critters whose unique behaviors and
        abilities encourage the player to explore further.
    </div>

    <!-- GAMEPLAY VIDEO -->
    <div class="paragraph center">
        <iframe
            class="youtube"
            src="https://www.youtube.com/watch?v=htTkVyBFb4M"
            title="Bionaut Gameplay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>

    <div class="paragraph">
        <h2>Project Snapshot</h2>
        <ul>
            <li><strong>Role:</strong> Project Lead / Level Designer / Programmer</li>
            <li><strong>Engine:</strong> Unity</li>
            <li><strong>Language:</strong> C#</li>
            <li><strong>Team Size:</strong> 5 Developers</li>
            <li><strong>Genre:</strong> 2D Top-Down Space Exploration</li>
            <li><strong>Core Pillars:</strong> Exploration, Curiosity, Companionship</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
            <strong>Find wildlife, repair your spaceship, navigate the unknown.</strong>
        </div>
    </div>

    <div class="paragraph">
        <h2>My Role</h2>
        I worked as a <strong>project lead, level designer, and programmer</strong> on Bionaut.
        My responsibilities grew throughout development from designing and implementing
        environments to integrating features, preparing builds, fixing bugs, and helping
        coordinate the team's development process.
        <br/><br/>
        Taking on a leadership position meant thinking beyond my individual work. I needed
        to understand what everyone was working on, keep the team moving toward our sprint
        goals, help resolve problems, and make sure our independently developed systems
        came together into a playable build.
    </div>

    <div class="paragraph">
        <h2>Project Leadership</h2>
        Bionaut was one of my first experiences taking a larger leadership role throughout
        an entire game-development cycle. Early in development, I took initiative by creating
        a functional demo before much of the final game had been implemented. This gave the
        team a template to build from and helped us establish a common direction.
        <br/><br/>
        Throughout the semester, I helped organize our priorities around sprint deadlines
        and playtests while also contributing directly to the game. I learned that leading
        a team is not simply about assigning work. It requires communication, accountability,
        and being willing to step in when something needs to get done.
    </div>

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-task-board.png"
            alt="Bionaut development task board"
        />
    </div>

   <div class="paragraph">
    <h2>Tutorial Level Design</h2>
    I worked heavily on the design and implementation of the first planet, which served
    as the game's tutorial. The goal was to introduce movement, exploration, tools,
    interactions, and critters without overwhelming the player.
    <br/><br/>
    Early playtests showed that players enjoyed exploring the world but were sometimes
    unsure about what they were supposed to be doing. In response, we iterated on the
    tutorial several times and created a more structured opening that gradually introduced
    mechanics before giving the player greater freedom to explore.
    <br/><br/>
    This allowed us to preserve <strong>exploration</strong> as one of the game's core
    pillars without sacrificing clarity during the player's first few minutes.
</div>

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

    <div class="paragraph">
        <h2>Planet & Environment Design</h2>
        A major part of my work involved building and refining the environments the player
        explored. I worked with Unity's tilemap system to construct the tutorial planet,
        update its layout, resolve collision issues, and add environmental details such as
        transparent objects and hidden easter eggs that rewarded exploration.
        <br/><br/>
        The planets used a looping world system to create the feeling of traveling around a
        small spherical world. I helped troubleshoot issues with this system as additional
        environmental elements were introduced.
    </div>

    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-critter-capture.png"
            alt="Capturing and naming a critter in Bionaut"
        />

        <img
            class="pc-screenshot"
            src="img/projects/bionaut/bionaut-critters.png"
            alt="Critters in the Bionaut environment"
        />
    </div>

    <div class="paragraph">
        <h3>Expanding to a Second Planet</h3>
        Later in development, I helped expand the game by creating and implementing the
        second playable planet: a desert environment that provided a visual and gameplay
        contrast to the greener tutorial world.
        <br/><br/>
        I integrated the new level with the existing planet-transition system, added logic
        for tracking the previously visited scene, implemented critter behavior animations,
        and added a sand effect overlay to reinforce the planet's harsh environment.
        <br/><br/>
        Building the second planet was an important milestone because it demonstrated that
        the exploration structure we created could support multiple distinct worlds.
    </div>

    <div class="paragraph">
        <h2>Main Menu & UI</h2>
        During a later polish sprint, I created the game's main menu system and interface.
        This work came at a point where the team deliberately shifted our priorities away
        from continuously adding features and toward improving the usability and presentation
        of what we already had.
        <br/><br/>
        Playtesting throughout development reinforced how important clear UI and onboarding
        were for an exploration-focused game. Players needed enough information to understand
        their tools and objectives without removing the sense of discovery that defined Bionaut.
    </div>

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

    <div class="paragraph">
        <h2>Build Integration & Debugging</h2>
        As my responsibilities grew, I also took on integration work. I merged changes from
        multiple team members, resolved conflicts and bugs, and prepared demo builds for our
        playtests.
        <br/><br/>
        One sprint demonstrated how risky late integration could be. Several systems were
        merged close to the playtest deadline without enough time for testing, resulting in
        visible bugs in the final build.
        <br/><br/>
        We changed our process in response. Individual work was expected to be completed
        earlier, allowing us to dedicate the following day specifically to merging, building,
        debugging, and testing. The next playtest had significantly fewer new issues and gave
        testers more opportunity to evaluate the game itself instead of being distracted by bugs.
    </div>

    <div class="paragraph">
        <h2>Designing Through Playtesting</h2>
        Playtesting was an important part of Bionaut's development. Feedback influenced
        changes to the tutorial, controls, collisions, menus, critter interactions, and the
        amount of direction given to the player.
        <br/><br/>
        One of the biggest design challenges was finding the balance between
        <strong>guidance and discovery</strong>. We wanted players to feel as though they
        were exploring an unknown world, but too little direction caused confusion.
        Iterating on the tutorial taught me that giving players structure early can actually
        make later exploration feel more rewarding because they understand the systems they
        are experimenting with.
    </div>

    <div class="paragraph">
        <h2>Scope & Production Challenges</h2>
        Our original vision included several planets for the player to explore. As development
        continued, we realized that creating multiple complete planets with unique environments,
        critters, interactions, and progression was too ambitious for a single semester.
        <br/><br/>
        We ultimately focused on creating two playable planets rather than spreading our
        development time across several unfinished worlds. Some planned features, including
        a more complete ship-repair progression system, were also reduced or removed.
        <br/><br/>
        This experience taught me that protecting the core experience sometimes means
        cutting features. A smaller, functional game gives the team a much stronger foundation
        than a larger collection of unfinished ideas.
    </div>

    <div class="paragraph">
        <h2>Reflection</h2>
        Bionaut was one of the projects that helped me grow the most as both a developer
        and a team member. It was one of my first opportunities to take a real leadership
        position throughout a longer development cycle.
        <br/><br/>
        I learned that leadership carries responsibility. When something goes wrong, a leader
        cannot simply focus on their own contribution. I had to learn how to keep everyone
        moving forward, deal with interpersonal conflicts, maintain a cool head when problems
        appeared, and make sure everyone had an opportunity to communicate how they felt.
        <br/><br/>
        I also learned the importance of leading by example. Whether that meant creating an
        early demo to give the team a starting point, merging everyone's work into a playable
        build, fixing problems before a playtest, or taking responsibility when our process
        failed, I wanted my teammates to know that they could rely on me.
        <br/><br/>
        Bionaut was an experience I cherish because it changed how I approach collaborative
        development. I came away from the project as a stronger designer and programmer,
        but more importantly, with a much better understanding of what it takes to help
        lead a team through the challenges of making a game.
    </div>

    <div class="paragraph">
        <div class="notice">
            Play Bionaut on
            <a href="https://ajsgottheway.itch.io/bionaut" target="_blank">itch.io</a>
            or view the project on
            <a href="https://github.com/masterbbud/Bionaut" target="_blank">GitHub</a>.
        </div>
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
        <strong>Twelve Mage</strong> is a 2D top-down horde shooter built in C# using MonoGame.
        Players control a mage armed with a shotgun and several magical abilities while fighting
        increasingly difficult waves of enemies. The goal is to survive as long as possible and
        achieve the highest score you can.
    </div>

    <!-- GAMEPLAY VIDEO -->
    <div class="paragraph center">
        <iframe
            class="youtube"
            src="https://www.youtube.com/watch?v=hmDvSnZqxbs"
            title="Twelve Mage Gameplay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>

    <div class="paragraph">
        <h2>Project Snapshot</h2>
        <ul>
            <li><strong>Role:</strong> Gameplay Programmer / Mechanics Designer</li>
            <li><strong>Framework:</strong> MonoGame</li>
            <li><strong>Language:</strong> C#</li>
            <li><strong>Team Size:</strong> 4 Developers</li>
            <li><strong>Genre:</strong> 2D Top-Down Horde Shooter</li>
            <li><strong>Development:</strong> Fall 2023</li>
        </ul>
    </div>

    <div class="paragraph">
        <h2>My Role</h2>
        I worked primarily as a gameplay programmer and mechanics designer on Twelve Mage.
        My contributions focused on combat functionality, including projectile behavior,
        collision and damage handling, weapon prototyping, the early structure of the game-state
        system, and final polish.
    </div>

    <!-- GENERAL GAMEPLAY -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/twelve-mage/twelve-mage-gameplay.png"
            alt="Twelve Mage gameplay"
        />
    </div>

    <div class="paragraph">
        <h2>Projectile System</h2>
        I created the projectile class used as the foundation for the player's ranged combat.
        Each time the player fired, a new projectile was created and given a limited lifetime.
        I implemented a four-second timer so projectiles would automatically be removed instead
        of remaining active indefinitely after leaving the main play area.
    </div>

    <!-- PROJECTILE SYSTEM -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/twelve-mage/twelve-mage-fireball.png"
            alt="Projectile combat in Twelve Mage"
        />
    </div>

    <div class="paragraph">
        <h2>Collision and Damage</h2>
        I also worked on the collision system connecting projectiles, enemies, and player health.
        One challenge was handling repeated collisions correctly. Projectile damage worked naturally
        because every shot created a new projectile, while continuous player-enemy collisions required
        additional logic so health could be reduced correctly across repeated contacts.
    </div>

    <!-- ENEMY WAVES / COLLISION -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/twelve-mage/twelve-mage-wave.jpg"
            alt="Enemy wave and combat in Twelve Mage"
        />
    </div>

    <div class="paragraph">
        <h2>Weapon Prototype</h2>
        I prototyped a separate gun class to visually represent the player's weapon.
        Early versions revealed issues with positioning and orientation, including the gun
        intersecting the player's sprite or appearing incorrectly when aiming in different directions.
        Rather than forcing an unfinished feature into the build, I iterated on the concept while
        the team continued developing the core combat experience.
    </div>

    <div class="paragraph">
        <h2>Game-State Foundation</h2>
        I created an early template for the game's state architecture within the main game class.
        This provided a foundation that another teammate later expanded into the final state system,
        which supported the main menu, gameplay, pause, credits, and game-over states.
    </div>

    <div class="paragraph">
        <h2>Final Polish</h2>
        During the final sprint, I returned to the project for additional refactoring and polish.
        I added menu buttons, made smaller gameplay and interface adjustments, and experimented
        with fullscreen functionality before deciding not to include it in the final build.
    </div>

    <div class="paragraph">
        <h2>Reflection</h2>
        Twelve Mage gave me experience building gameplay systems at a lower level than I was used to.
        Working in MonoGame meant that many systems normally handled by a game engine had to be
        implemented more directly in C#.
        <br/><br/>
        Building projectiles, collision handling, damage behavior, and game-state foundations
        helped strengthen my understanding of the systems underneath the tools provided by engines
        like Unity, Godot, and Unreal Engine. It also reinforced the importance of iteration,
        debugging, and refactoring as a project grows.
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
            src="https://www.youtube.com/watch?v=5BUZLXEioRo"
            title="Hardline VR Gameplay"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>

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

    <div class="paragraph">
        <h2>My Role</h2>

        During the original semester project, I worked primarily on the game's
        implementation, combat mechanics, environment, weapons, and VR interactions.
        The project required me to work between programming and design, figuring out
        both how an interaction should function technically and how it should feel
        when physically performed by the player.
        <br/><br/>

        After the course ended, I received my teammate's blessing to continue
        developing Hardline independently. From that point forward, the project
        became an opportunity for me to explore VR development on my own and expand
        the systems beyond what we had completed for the class.
    </div>

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

    <div class="paragraph">
        <h2>Melee Combat</h2>

        Melee combat was built around allowing the player to physically use objects
        as weapons rather than relying on predetermined attack animations.
        <br/><br/>

        Weapons such as the sledgehammer can be picked up and swung using the VR
        controllers. The player's own movement determines how the weapon is used,
        making positioning and physical interaction an important part of combat.
        <br/><br/>

        I also experimented with environmental weapons so that combat was not
        restricted to traditional equipment. Objects such as chairs could become
        temporary weapons, reinforcing the idea that the environment itself could
        be part of the player's combat toolkit.
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

    <div class="paragraph">
        <h2>Firearm System</h2>

        As I continued Hardline independently after the course, one area I wanted
        to expand was ranged combat.
        <br/><br/>

        I developed a reusable gun class that could provide a common foundation
        for firearm behavior. Instead of treating every firearm as a completely
        separate interaction, shared functionality could be handled by the base
        system and then extended for different weapon behaviors.
        <br/><br/>

        Working on the gun system also gave me more experience thinking about
        reusable gameplay architecture. I was no longer only asking how to make
        one weapon work; I was thinking about how I could structure the system
        so additional weapons could be built from the same foundation.
    </div>

    <!-- FIREARM IMAGE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-combat-2.png"
            alt="Gun combat in Hardline VR"
        />
    </div>

    <div class="paragraph">
        <h2>Destructible Enemies</h2>

        I wanted enemy defeats to have stronger physical feedback than simply
        playing an animation or removing the enemy from the scene.
        <br/><br/>

        When an enemy is defeated in Hardline, its body can break apart into
        individual pieces. This gives successful attacks an immediate visual
        response and complements the exaggerated physical nature of the combat.
        <br/><br/>

        Some of these pieces can continue to exist as physical objects after the
        enemy is defeated, helping the results of combat remain visible in the
        environment.
    </div>

    <!-- ENEMY DESTRUCTION -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-enemy-destruction-1.png"
            alt="Destructible enemy system in Hardline VR"
        />
    </div>

    <div class="paragraph">
        <h2>Environmental Destruction</h2>

        Destruction was not limited to enemies. I also developed breakable
        environmental elements to make the level react to the player's actions.
        <br/><br/>

        Windows can shatter during gameplay, while certain objects such as chairs
        can be picked up, used during combat, and broken. These interactions help
        prevent the environment from feeling like a static backdrop.
        <br/><br/>

        This supported one of the ideas behind Hardline from the beginning:
        the player should be able to look at their surroundings and think about
        how the objects around them could be used during a fight.
    </div>

    <!-- ENVIRONMENTAL DESTRUCTION -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-glass-destruction.png"
            alt="Breakable glass in Hardline VR"
        />
    </div>

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

    <div class="paragraph">
        <h2>Audio and Presentation</h2>

        I also worked on parts of Hardline outside of programming and level
        development, including creating the background music used in the game
        and creating assets for weapons such as the gun and sledgehammer.
        <br/><br/>

        Working across these different areas helped me shape the project toward
        a more consistent action-focused experience instead of treating each
        system as an isolated feature.
    </div>

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
        the game. The gun class and continued experimentation with combat were
        examples of this later independent development.
    </div>

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

    <!-- DEATH SCREEN / GAME STATE -->
    <div class="paragraph center">
        <img
            class="pc-screenshot"
            src="img/projects/hardline-vr/hardline-deathscreen.png"
            alt="Hardline VR death screen"
        />
    </div>

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
        environments, combat encounters, and reusable systems.
        <br/><br/>

        Continuing Hardline after the course ended was also important to me
        personally. I continued because I was interested in VR and wanted to see
        how much further I could take what I had learned.
        <br/><br/>

        The project helped reinforce the way I like to approach game development:
        learn the fundamentals, break larger mechanics into smaller problems,
        experiment with solutions, and then bring those systems together into
        something the player can actually experience.
    </div>

    <div class="paragraph">
        <div class="notice">
            Hardline VR began as a two-person academic project and was later
            continued independently by Anthony Maldonado after the course ended.
        </div>
    </div>
    `,
    "#55c878",
    true
)
];