<template>
  <div>
    <h1>Resume</h1>

    <div class="resume-actions">
      <a
        class="download-link"
        href="d/Anthony_M_Resume_2026.pdf"
        target="_blank"
      >
        <i class="fa fa-download fa-lg fa-fw"></i>
        Download Resume
      </a>
    </div>

    <div class="resume-container">
      <iframe
        src="d/Anthony_M_Resume_2026.pdf"
        title="Anthony Maldonado Resume"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
.resume-actions {
  margin-bottom: 25px;
}

.download-link {
  display: inline-block;
}

.resume-container {
  width: 100%;
  height: 1100px;
}

.resume-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media only screen and (max-width: 620px) {
  .resume-container {
    height: 800px;
  }
}
</style>