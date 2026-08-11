<template>
  <div>
    <h1>Game Projects</h1>

    <div style="margin-bottom: 30px;">
      A collection of games I've developed and contributed to across
      Unity, Godot, and Unreal Engine. My work spans gameplay programming,
      game and level design, VR development, and collaborative team projects.
      Select a project below to learn more about my role, development process,
      and the challenges I worked through.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 30px;">
      You can also find more of my games and playable projects on
      <a
        target="_blank"
        href="https://ajsgottheway.itch.io/"
      >itch.io</a>.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>