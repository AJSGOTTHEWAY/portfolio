<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Anthony Maldonado</strong>, a Game Design and Development graduate from
      Rochester Institute of Technology focused on combat design, level design and about anything I could get my hands on!
      <br /><br />

      I enjoy taking ideas for game mechanics and figuring out how to turn them into
      experiences players can actually interact with. I've worked across
      <strong>Unity, Godot, and Unreal Engine</strong>, developing gameplay systems,
      combat mechanics, VR interactions, dialogue systems, enemy AI, UI, and levels.
      <br /><br />

      I especially enjoy working between design and programming — thinking about how a
      mechanic should feel to the player, then breaking it down and building the systems
      needed to make it work.
      <br /><br />

      When I'm away from development, you'll usually find me running, playing games,
      or playing soccer.
      <br /><br />

      If you'd like to talk games, development, or potential opportunities, feel free to
      <router-link to="/contact">reach out!</router-link>

      <div style="margin-top:20px; margin-bottom:20px;">
        <a
          class="download-link"
          href="d/Anthony_Maldonado_Resume.pdf"
          target="_blank"
        >
          <i class="fa fa-download fa-lg fa-fw"></i>
          Download Resume
        </a>

        <div style="clear:both"></div>
      </div>
    </div>

    <div class="photo">
      <img src="img/resume-photo.png" alt="Anthony Maldonado" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">

      <!-- EXPERIENCE -->

      <h2>Experience</h2>

      <h3>Gameplay Programmer / Technical Designer — The GATEWAY Project</h3>
      <h4>2025 – Present</h4>

      <div>
        Developing gameplay systems and tools for an educational first-person shooter,
        including dialogue systems, player mechanics, UI, and gameplay functionality.
        My work includes creating reusable systems that allow designers to build and
        modify gameplay content more efficiently.
      </div>

      <div class="tech-stack">
        Unity, C#, Ink, Gameplay Programming, Technical Design
      </div>


      <h3>Game Developer — Changeling</h3>
      <h4>2024 – 2025</h4>

      <div>
        Contributed to the development of Changeling through level design, narrative
        development, and gameplay systems. Worked on enemy AI behavior and helped
        develop environments and interactions supporting the game's VR experience.
      </div>

      <div class="tech-stack">
        Unity, C#, VR Development, Level Design, Narrative Design, AI
      </div>


      <h3>Web Development Intern</h3>
      <h4>2026</h4>

      <div>
        Contributed to web development and maintenance while working with technologies
        including PHP, SQL, HTML, CSS, and JavaScript.
      </div>

      <div class="tech-stack">
        PHP, SQL, HTML, CSS, JavaScript
      </div>


      <!-- SKILLS -->

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming</h3>

        <SkillRate name="C#" :rate="5" />
        <SkillRate name="C++" :rate="4" />
        <SkillRate name="GDScript" :rate="4" />
        <SkillRate name="JavaScript" :rate="4" />
        <SkillRate name="Python" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Game Development</h3>

        <SkillRate name="Gameplay Programming" :rate="5" />
        <SkillRate name="Technical Design" :rate="5" />
        <SkillRate name="Game Design" :rate="5" />
        <SkillRate name="Level Design" :rate="4" />
        <SkillRate name="VR Development" :rate="4" />
        <SkillRate name="UI / UX" :rate="4" />
      </div>

      <div style="clear:both"></div>


      <!-- ENGINES -->

      <h2>Engines & Tools</h2>

      <div class="skill-set">
        <h3>Game Engines</h3>

        <SkillRate name="Unity" :rate="5" />
        <SkillRate name="Godot" :rate="4" />
        <SkillRate name="Unreal Engine" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Tools</h3>

        <SkillRate name="Visual Studio / VS Code" :rate="5" />
        <SkillRate name="Figma" :rate="4" />
        <SkillRate name="Maya" :rate="3" />
        <SkillRate name="Photoshop" :rate="3" />
        <SkillRate name="Trello" :rate="4" />
      </div>

      <div style="clear:both"></div>


      <!-- EDUCATION -->

      <h2>Education</h2>

      <h3>Rochester Institute of Technology</h3>
      <h4>B.S. Game Design and Development — 2026</h4>

      <div>
        Studied game development with a focus on gameplay programming,
        game design, technical systems, and collaborative game production.
      </div>


      <!-- FEATURED PROJECTS -->

      <h2>Selected Projects</h2>

      <h3>Hardline VR</h3>
      <div>
        First-person VR hack-and-slash developed in Godot featuring melee and ranged
        combat, destructible enemies, breakable environmental weapons, and
        controller-based VR locomotion.
      </div>

      <div class="tech-stack">
        Godot, GDScript, VR, Meta Quest 3S, Combat Design
      </div>


      <h3>Intergalactic Ducky</h3>
      <div>
        Award-winning 3D isometric adventure created during HACK.COMS '24.
        Served as the sole game designer and main level designer while helping
        guide the team's scope and creative direction during the 24-hour hackathon.
      </div>

      <div class="tech-stack">
        Godot, Game Design, Level Design, Rapid Prototyping
      </div>


      <h3>Bionaut</h3>
      <div>
        2D top-down space game developed in Unity as part of a collaborative
        development team.
      </div>

      <div class="tech-stack">
        Unity, C#, Game Development
      </div>


      <h3>Twelve Mage</h3>
      <div>
        2D top-down horde shooter developed directly in C# using MonoGame.
        Worked as a gameplay programmer and mechanics designer, developing
        projectile behavior, collision and damage systems, weapon prototypes,
        and early game-state architecture.
      </div>

      <div class="tech-stack">
        C#, MonoGame, Gameplay Programming, Combat Design
      </div>


      <!-- INTERESTS -->

      <h2>Outside of Development</h2>

      <div>
        <h3>🏃 Running</h3>
        <div>
          Running is one of my favorite ways to stay active and challenge myself.
        </div>

        <h3>🎮 Games</h3>
        <div>
          I enjoy playing games just as much as I enjoy making them and I'm
          always interested in seeing how other developers approach game mechanics
          and player experiences.
        </div>

        <h3>⚽ Soccer</h3>
        <div>
          I've always enjoyed playing soccer and the teamwork and competition
          that come with it.
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>