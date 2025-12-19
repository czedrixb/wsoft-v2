<template>
  <div class="relative overflow-hidden mb-14">
    <h3
      class="text-center font-poppins font-[600] text-[18px] md:text-[25px] px-5 md:px-0 text-black mx-auto max-w-screen-lg mb-8"
    >
      {{ $t("top-tool") }}
    </h3>

    <div class="relative w-screen">
      <div class="text-stacks-marquee">
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            format="webp"
            width="24px"
            height="24px"
            k
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_html5.webp"
            class="mr-1 flex"
          />
          <span>HTML 5</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            format="webp"
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_css3.webp"
            class="mr-1 flex"
          />
          <span>CSS3</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_javascript.webp"
            class="mr-1 flex"
          />
          <span>JavaScript</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_vue.webp"
            class="mr-1 flex"
          />
          <span>Vue</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_nodejs.webp"
            class="mr-1 flex"
          />
          <span>NodeJS</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_apache.webp"
            class="mr-1 flex"
          />
          <span>Apache</span>
        </div>
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_github.webp"
            class="mr-1 flex"
          />
          <span>GitHub</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_mysql.webp"
            class="mr-1 flex"
          />
          <span>MySql</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_laravel.webp"
            class="mr-1 flex"
          />
          <span>Laravel</span>
        </div>
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_shopify.webp"
            class="mr-1 flex"
          />
          <span>Shopify</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_wordpress.webp"
            class="mr-1 flex"
          />
          <span>Wordpress</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_bitbucket.webp"
            class="mr-1 flex"
          />
          <span>BitBucket</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_aws.webp"
            class="mr-1 flex"
          />
          <span>AWS</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_docker.webp"
            class="mr-1 flex"
          />
          <span>Docker</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_bootstrap.webp"
            class="mr-1 flex"
          />
          <span>Bootstrap</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_mongodb.webp"
            class="mr-1 flex"
          />
          <span>MongoDB</span>
        </div>
        <!-- Mirror -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <figure class="mr-1 flex">
            <NuxtImg
              preload
              format="webp"
              width="24px"
              height="24px"
              sizes="24px"
              alt="tech-stack-icon"
              src="/images/home/devtools/devicon_html5.webp"
            />
          </figure>
          <span>HTML 5</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <figure class="mr-1 flex">
            <NuxtImg
              preload
              format="webp"
              width="24px"
              height="24px"
              sizes="24px"
              alt="tech-stack-icon"
              src="/images/home/devtools/devicon_css3.webp"
            />
          </figure>
          <span>CSS3</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_javascript.webp"
            class="mr-1 flex"
          />
          <span>JavaScript</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_vue.webp"
            class="mr-1 flex"
          />
          <span>Vue</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_nodejs.webp"
            class="mr-1 flex"
          />
          <span>NodeJS</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_apache.webp"
            class="mr-1 flex"
          />
          <span>Apache</span>
        </div>
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_github.webp"
            class="mr-1 flex"
          />
          <span>GitHub</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_mysql.webp"
            class="mr-1 flex"
          />
          <span>MySql</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_laravel.webp"
            class="mr-1 flex"
          />
          <span>Laravel</span>
        </div>
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_shopify.webp"
            class="mr-1 flex"
          />
          <span>Shopify</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_wordpress.webp"
            class="mr-1 flex"
          />
          <span>Wordpress</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_bitbucket.webp"
            class="mr-1 flex"
          />
          <span>BitBucket</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_aws.webp"
            class="mr-1 flex"
          />
          <span>AWS</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_docker.webp"
            class="mr-1 flex"
          />
          <span>Docker</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_bootstrap.webp"
            class="mr-1 flex"
          />
          <span>Bootstrap</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_mongodb.webp"
            class="mr-1 flex"
          />
          <span>MongoDB</span>
        </div>
        <!-- END Mirror -->
      </div>
      <div class="text-stacks-marquee-reverse">
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_php.webp"
            class="mr-1 flex"
          />
          <span>PHPUnit</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_digitalocean.webp"
            class="mr-1 flex"
          />
          <span>DigitalOcean</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_photoshop.webp"
            class="mr-1 flex"
          />
          <span>Photoshop</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_figma.webp"
            class="mr-1 flex"
          />
          <span>Figma</span>
        </div>
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/skill-icons_illustrator.webp"
            class="mr-1 flex"
          />
          <span>Illustrator</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="21px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_google-drive.webp"
            class="mr-1 flex"
          />
          <span>Google Drive</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="27px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_google-analytics.webp"
            class="mr-1 flex"
          />
          <span>Google Analytics</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_jira.webp"
            class="mr-1 flex"
          />
          <span>Jira</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_slack.webp"
            class="mr-1 flex"
          />
          <span>Slack</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/arcticons_openai-chatgpt.webp"
            class="mr-1 flex"
          />
          <span>ChatGPT</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/uxwing_runway-ai.webp"
            class="mr-1 flex"
          />
          <span>Runway AI</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_vuetify.webp"
            class="mr-1 flex"
          />
          <span>Vuetify</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_python.webp"
            class="mr-1 flex"
          />
          <span>Python</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
            class="mr-1 flex"
          />
          <span>PyTorch</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_meta.png"
            class="mr-1 flex"
          />
          <span>LLaMA</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="28px"
            height="28px"
            sizes="28px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_groq.svg"
            class="mr-1 pt-1 flex"
          />
          <span>Groq</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
            class="mr-1 flex"
          />
          <span>OpenCV</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_pyqt.jpg"
            class="mr-1 flex"
          />
          <span>PyQt</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
            class="mr-1 flex"
          />
          <span>FastAPI</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            sizes="40px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_langchain.png"
            class="mr-1 flex"
          />
          <span>LangChain</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
            class="mr-1 flex"
          />
          <span>NuxtJS</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            class="mr-1 flex"
          />
          <span>Java EE</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            sizes="30px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_javafx.png"
            class="mr-1 flex"
          />
          <span>JavaFX</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_flutter.webp"
            class="mr-1 flex"
          />
          <span>Flutter</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_electron.webp"
            class="mr-1 flex"
          />
          <span>Electron</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="9px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_pwa.webp"
            class="mr-1 flex"
          />
          <span>PWA</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_flask.webp"
            class="mr-1 flex"
          />
          <span>Flask</span>
        </div>
        <!-- Mirror -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_php.webp"
            class="mr-1 flex"
          />
          <span>PHPUnit</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_digitalocean.webp"
            class="mr-1 flex"
          />
          <span>DigitalOcean</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_photoshop.webp"
            class="mr-1 flex"
          />
          <span>Photoshop</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_figma.webp"
            class="mr-1 flex"
          />
          <span>Figma</span>
        </div>
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/skill-icons_illustrator.webp"
            class="mr-1 flex"
          />
          <span>Illustrator</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="21px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_google-drive.webp"
            class="mr-1 flex"
          />
          <span>Google Drive</span>
        </div> -->
        <!-- <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="27px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_google-analytics.webp"
            class="mr-1 flex"
          />
          <span>Google Analytics</span>
        </div> -->
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_jira.webp"
            class="mr-1 flex"
          />
          <span>Jira</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_slack.webp"
            class="mr-1 flex"
          />
          <span>Slack</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/arcticons_openai-chatgpt.webp"
            class="mr-1 flex"
          />
          <span>ChatGPT</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/uxwing_runway-ai.webp"
            class="mr-1 flex"
          />
          <span>Runway AI</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_vuetify.webp"
            class="mr-1 flex"
          />
          <span>Vuetify</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_python.webp"
            class="mr-1 flex"
          />
          <span>Python</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
            class="mr-1 flex"
          />
          <span>PyTorch</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_meta.png"
            class="mr-1 flex"
          />
          <span>LLaMA</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="28px"
            height="28px"
            sizes="28px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_groq.svg"
            class="mr-1 pt-1 flex"
          />
          <span>Groq</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
            class="mr-1 flex"
          />
          <span>OpenCV</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_pyqt.jpg"
            class="mr-1 flex"
          />
          <span>PyQt</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
            class="mr-1 flex"
          />
          <span>FastAPI</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            sizes="40px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_langchain.png"
            class="mr-1 flex"
          />
          <span>LangChain</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
            class="mr-1 flex"
          />
          <span>NuxtJS</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            class="mr-1 flex"
          />
          <span>Java EE</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            sizes="30px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_javafx.png"
            class="mr-1 flex"
          />
          <span>JavaFX</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_flutter.webp"
            class="mr-1 flex"
          />
          <span>Flutter</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_electron.webp"
            class="mr-1 flex"
          />
          <span>Electron</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="9px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/logos_pwa.webp"
            class="mr-1 flex"
          />
          <span>PWA</span>
        </div>
        <div
          class="mx-4 my-2 px-8 py-5 badge badge-lg badge-outline text-black bg-transparent font-light"
        >
          <NuxtImg
            preload
            width="24px"
            height="24px"
            sizes="24px"
            alt="tech-stack-icon"
            src="/images/home/devtools/devicon_flask.webp"
            class="mr-1 flex"
          />
          <span>Flask</span>
        </div>
        <!-- END Mirror -->
      </div>
    </div>

    <h3
      class="text-center font-poppins font-[600] text-[18px] md:text-[25px] px-5 md:px-0 text-black mt-8 mx-auto max-w-screen-lg"
    >
      {{ $t("bottom-tool") }}
    </h3>
  </div>
</template>

<script setup></script>
