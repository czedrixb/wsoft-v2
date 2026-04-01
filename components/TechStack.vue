<template>
  <div class="w-full overflow-hidden py-8 bg-transparent">
    <div class="marquee-wrapper">
      <div class="marquee-track animate-marquee-left">
        <div
          v-for="tech in [...row1, ...row1]"
          :key="'r1-' + tech + Math.random()"
          class="flex flex-col items-center gap-2 group shrink-0"
        >
          <div
            class="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-3 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110"
          >
            <img
              :src="`/images/revamp/techstack/${tech}.png`"
              :alt="tech"
              class="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span
            class="text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 capitalize font-medium tracking-wide"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <div class="marquee-wrapper">
      <div class="marquee-track animate-marquee-right">
        <div
          v-for="tech in [...row2, ...row2]"
          :key="'r2-' + tech + Math.random()"
          class="flex flex-col items-center gap-2 group shrink-0"
        >
          <div
            class="flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-3 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-110"
          >
            <img
              :src="`/images/revamp/techstack/${tech}.png`"
              :alt="tech"
              class="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span
            class="text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 capitalize font-medium tracking-wide"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const allTechs = [
  "apache",
  "aws",
  "bitbucket",
  "bootstrap",
  "vuetify",
  "docker",
  "electron",
  "figma",
  "flask",
  "flutter",
  "groq",
  "javaee",
  "javascript",
  "jira",
  "langchain",
  "laravel",
  "mongodb",
  "mysql",
  "nuxtjs",
  "openai",
  "opencv",
  "pwa",
  "python",
  "pytorch",
  "slack",
  "vue",
];

const row1 = allTechs.slice(0, 13);
const row2 = allTechs.slice(13);
</script>

<style scoped>
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 2rem;
  align-items: center;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee-left {
  animation: marquee-left 35s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 35s linear infinite;
}

.marquee-wrapper:hover .animate-marquee-left,
.marquee-wrapper:hover .animate-marquee-right {
  animation-play-state: paused;
}
</style>
