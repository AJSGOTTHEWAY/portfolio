<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Anthony Maldonado</strong>, a Game Developer and Designer
        with experience working in <strong>Unity, Godot, and Unreal Engine</strong>.
        <br/><br/>
        I enjoy bringing game ideas to life through game design and development,
        devling into level and combat design to create experiences that are fun and engaging
        for players.
      </div>

      <div style="margin-top: 20px;">
        I've worked on
        <router-link to="/game-projects">games</router-link>
        ranging from VR action experiences to game jam projects and
        collaborative team productions. You can also check out
        <router-link to="/other-projects">my other work</router-link>
        or learn more about my experience through
        <router-link to="/resume">my resume</router-link>.
      </div>

      <div style="margin-top: 40px;">
        I'm <strong>currently looking for opportunities in game design</strong>
        where I can continue growing as a developer and designer while contributing
        to exciting projects.
        <br/><br/>
        Feel free to
        <router-link to="/contact">reach out</router-link>
        if you'd like to connect!
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Photo of Anthony Maldonado" />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>