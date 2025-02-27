<template>
  <div>
    <div
      class="w-full h-[30rem] md:h-[39rem] lg:h-[35rem] xl:h-[42rem] relative overflow-hidden"
    >
      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="/images/home/home-hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        class="absolute inset-0 bg-main opacity-80 flex justify-center items-center"
      >
        <div>
          <div class="flex justify-center mb-5">
            <img
              src="/images/home/w-softlabs.svg"
              class="w-[340px] lg:w-[583px]"
              alt="w-softlabs"
            />
          </div>
          <div
            class="mb-5 lg:mb-12 text-[2.5rem] lg:text-6xl font-[800] text-center bg-gradient-to-r from-[#2376EA] to-[#02C9D1] bg-clip-text text-transparent"
          >
            업무 효율을 극대화
          </div>

          <div class="flex justify-center mb-6">
            <img
              src="/images/home/jumbotron.webp"
              class="w-[125px] lg:w-[168px]"
              alt="w-softlabs"
            />
          </div>

          <p
            class="text-center text-[#475766] font-[300] text-[18px] px-5 md:px-0"
          >
            Elevate your business with W Soft Labs’ AI and custom development.
          </p>
        </div>
      </div>

      <div
        class="absolute inset-0 top-[85%] left-[31%] md:top-[78%] md:left-[40%] lg:top-[88%] lg:left-[40%] xl:left-[43%] 2xl:left-[46%] z-50"
      >
        <NuxtLink to="/contact-us">
          <button
            class="btn lg:btn-lg bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none transition-all duration-300 transform hover:scale-105"
          >
            Talk with an Expert
          </button>
        </NuxtLink>
      </div>

      <div
        class="absolute left-[-104%] bottom-[-2%] md:bottom-[-15%] md:left-[-121%] lg:left-[-80%] lg:bottom-[-7%] xl:left-[-45%] xxl:left-[-20%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
        />
      </div>

      <div
        class="absolute right-[-104%] bottom-[-2%] md:bottom-[-15%] md:right-[-121%] lg:right-[-80%] lg:bottom-[-7%] xl:right-[-45%] xxl:right-[-20%]"
      >
        <img
          src="/images/home/shadow-overlay.png"
          class="w-[800px] md:w-[1500px] lg:w-[1500px]"
          alt="shadow-overlay"
        />
      </div>
    </div>

    <div
      class="mx-auto px-8 md:px-0 md:max-w-screen-sm lg:max-w-screen-lg md mt-16"
    >
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-y-5 lg:gap-x-1 mb-10 md:mb-0"
      >
        <div>
          <div
            class="rounded-full text-[14px] bg-white shadow-md font-poppins text-center text-black py-3 w-[15rem]"
          >
            100% Projects Success Rate
          </div>
        </div>
        <div>
          <div
            class="rounded-full text-[14px] bg-white shadow-md font-poppins text-center text-black py-3 w-[15rem]"
          >
            95% Customer Retention Rate
          </div>
          <div class="py-20 hidden md:block"></div>
        </div>
        <div>
          <div
            class="rounded-full text-[14px] bg-white shadow-md font-poppins text-center text-black py-3 w-[15rem]"
          >
            21 Projects Completed
          </div>
        </div>
      </div>

      <div class="flex justify-center mx-auto mb-5">
        <div
          class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
        >
          Your Trusted Partner in Web and App Development
        </div>
      </div>

      <div class="flex justify-center mb-5">
        <img
          src="/images/home/partner.png"
          class="lg:w-[600px]"
          alt="partner"
        />
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[80%]"
      >
        W Soft Labs delivers cutting-edge solutions to optimize business
        operations. Leveraging the latest IT advancements, we empower
        organizations efficiently. Stay competitive with us as your trusted
        technology partner.
      </p>
    </div>

    <div class="mx-auto px-8 lg:max-w-screen-lg xl:max-w-screen-xl py-16">
      <div
        class="flex flex-col relative justify-between items-center gap-y-8 lg:flex-row mb-14"
      >
        <div class="text-left lg:w-[45%]">
          <div class="block lg:hidden">
            <div
              class="radial-progress bg-white text-[#C1C1C1] mb-5"
              style="--value: 100; --size: 3rem; --thickness: 2px"
              role="progressbar"
            >
              1
            </div>
          </div>
          <div
            class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%] mb-5"
          >
            Website Development
          </div>

          <p
            class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%]"
          >
            We create websites that work for you. Whether you’re a small
            business or a large enterprise, our team specializes in designing
            dynamic, user-friendly websites that reflect your brand and meet
            your needs. From beautiful designs to smooth functionality, we make
            sure your online presence grabs attention and connects with your
            audience.
          </p>
        </div>
        <div
          class="divider bg-[#C5C5C5] h-[1.5px] hidden lg:block lg:!w-[1.5px] lg:divider-horizontal"
        ></div>
        <div class="flex justify-end">
          <img
            src="/images/home/web-development.png"
            class="lg:w-[430px] xl:w-[500px]"
            alt="web-development"
          />
        </div>
        <div
          class="absolute hidden lg:block lg:left-[47.7%] xl:left-[50%] bottom-[50%]"
        >
          <div
            class="radial-progress bg-white border-[#159ADE] text-[#159ADE]"
            style="--value: 25; --size: 3rem; --thickness: 2px"
            role="progressbar"
          >
            1
          </div>
        </div>
      </div>
      <div
        class="flex flex-col relative justify-between items-center gap-y-5 lg:flex-row mb-14"
      >
        <div class="text-left lg:w-[45%]">
          <div class="block lg:hidden">
            <div
              class="radial-progress bg-white text-[#C1C1C1] mb-5"
              style="--value: 100; --size: 3rem; --thickness: 2px"
              role="progressbar"
            >
              2
            </div>
          </div>
          <div
            class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%] mb-5"
          >
            Web Application Development
          </div>

          <p
            class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%]"
          >
            We build innovative web apps that help your business thrive. Our
            team creates custom solutions designed to simplify your operations,
            improve user experiences, and fuel growth. From the initial idea to
            final launch, we ensure your web applications are strong, scalable,
            and ready to support your future success.
          </p>
        </div>
        <div
          class="divider hidden lg:block bg-[#C5C5C5] h-[1.5px] lg:!w-[1.5px] lg:divider-horizontal"
        ></div>
        <div class="flex justify-end">
          <img
            src="/images/home/web-application.png"
            class="lg:w-[430px] xl:w-[500px]"
            alt="web-development"
          />
        </div>
        <div
          class="absolute hidden lg:block lg:left-[47.7%] xl:left-[50%] bottom-[50%]"
        >
          <div
            class="radial-progress bg-white border-[#159ADE] text-[#159ADE]"
            style="--value: 50; --size: 3rem; --thickness: 2px"
            role="progressbar"
          >
            2
          </div>
        </div>
      </div>
      <div
        class="flex flex-col relative justify-between items-center gap-y-5 lg:flex-row mb-14"
      >
        <div class="text-left lg:w-[45%]">
          <div class="block lg:hidden">
            <div
              class="radial-progress bg-white text-[#C1C1C1] mb-5"
              style="--value: 100; --size: 3rem; --thickness: 2px"
              role="progressbar"
            >
              3
            </div>
          </div>
          <div
            class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%] mb-5"
          >
            UI Design
          </div>

          <p
            class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%]"
          >
            We design intuitive, user-friendly interfaces that make the digital
            world easier and more enjoyable. Our team focuses on creating
            smooth, engaging experiences that captivate users. From the first
            wireframe to the final design, we ensure every detail enhances
            usability and keeps your audience connected.
          </p>
        </div>
        <div
          class="divider hidden lg:block bg-[#C5C5C5] h-[1.5px] lg:!w-[1.5px] lg:divider-horizontal"
        ></div>
        <div class="flex justify-end">
          <img
            src="/images/home/ui-design.png"
            class="lg:w-[430px] xl:w-[500px]"
            alt="web-development"
          />
        </div>
        <div
          class="absolute hidden lg:block lg:left-[47.7%] xl:left-[50%] bottom-[50%]"
        >
          <div
            class="radial-progress bg-white border-[#159ADE] text-[#159ADE]"
            style="--value: 75; --size: 3rem; --thickness: 2px"
            role="progressbar"
          >
            3
          </div>
        </div>
      </div>
      <div
        class="flex flex-col relative justify-between items-center gap-y-5 lg:flex-row"
      >
        <div class="text-left lg:w-[45%]">
          <div class="block lg:hidden">
            <div
              class="radial-progress bg-white text-[#C1C1C1] mb-5"
              style="--value: 100; --size: 3rem; --thickness: 2px"
              role="progressbar"
            >
              4
            </div>
          </div>
          <div
            class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] w-[70%] mb-5"
          >
            AI Utilization Service
          </div>

          <p
            class="font-inter text-[18px] text-[#475766] font-[300] lg:w-[80%]"
          >
            Cut customer service costs, speed up response times, and boost
            customer satisfaction with our AI solutions. We use advanced
            automation and smart technologies to streamline your operations.
            Whether it’s chatbots or predictive analytics, we help you work more
            efficiently and create a better experience for your customers.
          </p>
        </div>
        <div
          class="divider hidden lg:block bg-[#C5C5C5] h-[1.5px] lg:!w-[1.5px] lg:divider-horizontal"
        ></div>
        <div class="flex justify-end">
          <img
            src="/images/home/ai-utilization.png"
            class="lg:w-[430px] xl:w-[500px]"
            alt="web-development"
          />
        </div>
        <div
          class="absolute hidden lg:block lg:left-[47.7%] xl:left-[50%] bottom-[50%]"
        >
          <div
            class="radial-progress bg-white border-[#159ADE] text-[#159ADE]"
            style="--value: 100; --size: 3rem; --thickness: 2px"
            role="progressbar"
          >
            4
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto px-8 lg:max-w-screen-lg xl:max-w-screen-xl py-16 mb-10">
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] px-5 md:px-0 text-[#475766] mb-3"
      >
        Our Successful Projects
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-[#475766] text-center lg:max-w-screen-sm mx-auto mb-12"
      >
        At W Soft Labs, we’re dedicated to helping you grow your business with
        tailored solutions that boost productivity and efficiency.
      </p>

      <!-- LARGE SCREEN -->
      <div class="hidden md:block">
        <div
          class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-2 gap-10"
        >
          <div class="md:col-span-2 h-1px md:flex">
            <div class="relative overflow-hidden group hidden md:block">
              <img
                src="/images/home/project-1.png"
                class="max-w-full h-[25rem] md:h-auto"
                alt="dashboard"
              />

              <div
                class="absolute left-[0%] bottom-[0%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <img
                  src="/images/home/shadow-project.png"
                  class="rounded-2xl"
                  alt=""
                />
              </div>

              <div
                class="absolute left-[2%] bottom-[3%] opacity-100 lg:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <div
                  class="font-poppins text-white font-[600] text-[20px] lg:w-[80%]"
                >
                  Academic Administration Management System
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex">
            <img
              src="/images/home/project-2.png"
              class="max-w-100"
              alt="mob-app-1"
            />
          </div>
          <div class="md:flex">
            <img
              src="/images/home/project-3.png"
              class="max-w-100"
              alt=" mob-app-2"
            />
          </div>
          <div class="md:col-span-2 md:flex">
            <img
              src="/images/home/project-4.png"
              class="max-w-100"
              alt="digigooz"
            />
          </div>
        </div>
      </div>

      <!-- SMALL SCREEN -->
      <div class="block md:hidden">
        <div class="mb-5">
          <img src="/images/home/project-1-mobile.png" alt="dashboard-mobs" />
        </div>
        <div class="mb-5">
          <img src="/images/home/project-2-mobile.png" alt="mob-app-1-mobile" />
        </div>
        <div class="mb-5">
          <img
            src="/images/home/project-3-mobile.png"
            alt=" mob-app-2-mobile"
          />
        </div>
        <div class="mb-5">
          <img src="/images/home/project-4-mobile.png" alt="digigooz-mobile" />
        </div>
      </div>
    </div>

    <TechStackMarquee />

    <div
      class="md:py-[5rem] mx-auto px-3 md:px-8 xl:max-w-screen-xl mt-[8rem] md:mt-0 mb-10"
    >
      <div
        class="bg-[url('/images/home/bg-email.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl py-10 h-full md:h-[25rem] flex items-center relative"
      >
        <div class="hidden md:block">
          <div class="grid grid-cols-2 px-2 md:px-16">
            <div>
              <div
                class="text-left font-poppins font-[600] text-[25px] lg:text-[30px] xl:text-[40px] px-5 md:px-0 text-white mb-3"
              >
                Partner for Growth and Digital Transformation
              </div>

              <p
                class="font-inter font-[300] text-[18px] text-white mb-8 lg:w-[80%]"
              >
                Let us help transform your online presence and support your
                business’s growth in the digital world.
              </p>

              <label
                class="input md:input-md lg:input-lg rounded-full bg-white flex items-center lg:w-[90%] xl:w-[80%] gap-2 pe-2"
              >
                <input
                  type="text"
                  class="grow"
                  placeholder="Enter your email"
                />
                <button
                  class="btn md:btn-sm lg:btn-md font-inter text-[18px] md:px-8 lg:px-8 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none transition-all duration-300 transform hover:scale-105"
                >
                  Send
                </button>
              </label>
            </div>
          </div>
        </div>
        <div class="block md:hidden">
          <div class="grid grid-cols-2 px-2">
            <div
              class="text-left font-poppins font-[600] text-[25px] lg:text-[30px] xl:text-[40px] px-2 md:px-0 text-white mb-3"
            >
              Partner for Growth and Digital Transformation
            </div>
          </div>
          <div class="px-5">
            <p
              class="font-inter font-[300] text-[18px] text-white mb-8 lg:w-[80%]"
            >
              Let us help transform your online presence and support your
              business’s growth in the digital world.
            </p>

            <label
              class="input py-8 md:input-md lg:input-lg rounded-full bg-white flex items-center lg:w-[90%] xl:w-[80%] gap-2 pe-2"
            >
              <input type="text" class="grow" placeholder="Enter your email" />
              <button
                class="btn md:btn-sm lg:btn-md font-inter text-[18px] px-8 md:px-8 lg:px-8 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none transition-all duration-300 transform hover:scale-105"
              >
                Send
              </button>
            </label>
          </div>
        </div>

        <div
          class="absolute left-[50%] bottom-[50%] md:bottom-[-3%] md:left-[48%] lg:left-[54%] lg:bottom-[-18%] xl:left-[57%] xl:bottom-[-25%]"
        >
          <img
            src="/images/home/email-overlay.png"
            class="w-[200px] md:w-[400px] lg:w-[480px]"
            alt="img-email"
          />
        </div>
      </div>
    </div>
  </div>
</template>
