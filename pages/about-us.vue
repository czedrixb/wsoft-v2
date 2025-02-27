<template>
  <div>
    <div
      class="w-full h-[24rem] sm:h-[19rem] md:h-[16rem] lg:h-[24rem] overflow-hidden relative mb-10"
    >
      <video class="w-full h-full object-cover" autoplay loop muted playsinline>
        <source src="/images/about-us/bg-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 bg-main opacity-[.60] hidden lg:block"></div>
      <div class="absolute inset-0 flex justify-center">
        <img
          src="/images/about-us/hero-overlay.png"
          class="max-w-[160%] md:max-w-[96%]"
          alt="hero-overlay"
        />
      </div>
      <div class="absolute inset-0 flex justify-center items-center">
        <div>
          <div
            class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
          >
            About Us
          </div>

          <p
            class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] w-[80%] 2xl:w-[60%]"
          >
            W Soft Labs delivers cutting-edge solutions to optimize business
            operations. Leveraging the latest IT advancements, we empower
            organizations efficiently. Stay competitive with us as your trusted
            technology partner.
          </p>
        </div>
      </div>
    </div>

    <div
      class="px-5 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mb-10"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-x-8 gap-y-8 px-5"
      >
        <div class="flex">
          <img
            src="/images/about-us/innovation.png"
            class="rounded-2xl object-cover w-full h-full"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center">
          <div
            class="text-[#475766] font-poppins font-[600] text-[25px] lg:text-[40px] mb-5 xl:mb-7"
          >
            Innovating Business Operations with Technology
          </div>

          <p
            class="font-inter text-[18px] text-[#475766] font-[300] mb-5 xl:mb-7"
          >
            W Soft Labs is dedicated to providing cutting-edge solutions that
            optimize business operations and drive success. Leveraging the
            latest advancements in information technology, we develop tailored
            solutions to streamline processes and empower organizations to
            achieve their goals efficiently.
          </p>

          <p class="font-inter text-[18px] text-[#475766] font-[300] xl:mb-7">
            By staying ahead of emerging technologies and industry trends, W
            Soft Labs ensures that our clients remain competitive in today's
            dynamic market landscape. With W Soft Labs as your technology
            partner, you can trust that your business operations are in capable
            hands, allowing you to focus on what you do best while we take care
            of the rest.
          </p>
        </div>
      </div>
    </div>

    <div class="py-16">
      <TechStackMarquee />
    </div>

    <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mb-10">
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
      >
        Why Choose Us?
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[80%] mb-8 lg:mb-16"
      >
        At W Soft Labs, we provide more than just innovative solutions; we offer
        a collaborative partnership that drives your business forward. Here's
        why you should choose us:
      </p>

      <div class="mx-auto lg:max-w-screen-md">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-5 gap-x-5 lg:gap-10"
        >
          <div class="flex justify-center md:pt-20">
            <div
              class="card bg-white shadow-md text-primary-content p-2 text-center w-96"
            >
              <div class="flex justify-center my-5">
                <img src="/images/about-us/puzzle.png" alt="cutting-edge" />
              </div>

              <div
                class="text-center font-poppins font-[600] text-[25px] md:px-0 text-[#475766] mb-5"
              >
                Cutting-edge Solutions
              </div>

              <p
                class="font-inter font-[300] text-[18px] mx-auto text-[#475766] sm:w-[80%] mb-8"
              >
                We specialize in developing cutting-edge solutions that are
                tailored to your specific needs. Our team stays at the forefront
                of information technology, ensuring you receive the latest
                advancements that optimize your business operations and drive
                success.
              </p>
            </div>
          </div>
          <div class="flex justify-center md:pb-20">
            <div
              class="card bg-white shadow-md text-primary-content p-2 text-center w-96"
            >
              <div class="flex justify-center my-5">
                <img src="/images/about-us/shield.png" alt="expertise" />
              </div>

              <div
                class="text-center font-poppins font-[600] text-[25px] md:px-0 text-[#475766] mb-5"
              >
                Expertise and Innovation
              </div>

              <p
                class="font-inter font-[300] text-[18px] mx-auto text-[#475766] sm:w-[80%] mb-8"
              >
                With a deep understanding of emerging technologies and industry
                trends, we bring expertise and innovation to every project. By
                leveraging our knowledge, we keep your business competitive in
                today's dynamic market landscape, helping you stay ahead of the
                curve.
              </p>
            </div>
          </div>
          <div class="md:col-span-2 flex justify-center">
            <div
              class="card bg-white shadow-md text-primary-content p-2 text-center w-96"
            >
              <div class="flex justify-center my-5">
                <img src="/images/about-us/sticky.png" alt="technology" />
              </div>

              <div
                class="text-center font-poppins font-[600] text-[25px] md:px-0 text-[#475766] w-[80%] mx-auto mb-5"
              >
                Reliable Technology Partner
              </div>

              <p
                class="font-inter font-[300] text-[18px] mx-auto text-[#475766] sm:w-[80%] mb-8"
              >
                Trust is paramount in any partnership. With W Soft Labs as your
                technology partner, you can rely on us to handle your business
                operations efficiently, allowing you to focus on your core
                competencies. Our commitment is to support your success, every
                step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-5 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-16 mb-10">
      <div
        class="text-center font-poppins font-[600] text-[25px] lg:text-[40px] md:px-0 text-[#475766] mb-5"
      >
        Our Team
      </div>

      <p
        class="font-inter font-[300] text-[18px] text-center mx-auto text-[#475766] lg:w-[80%] mb-12 lg:mb-16"
      >
        At W Soft Labs, we provide more than just innovative solutions; we offer
        a collaborative partnership that drives your business forward. Here's
        why you should choose us:
      </p>

      <div class="mx-auto lg:max-w-screen-lg">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/matt.png"
                class="max-w-full mb-5"
                alt="matt"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Matt
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  WonSeok Jung
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">CEO</div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/joseph.png"
                class="max-w-full mb-5"
                alt="joseph"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Joseph
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Kang Jun Lee
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Senior Developer
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/jaime.png"
                class="max-w-full mb-5"
                alt="jaime"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Jaimie
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Amron Florence Arda
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Project Officer
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/ben.png"
                class="max-w-full mb-5"
                alt="ben"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Ben
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Benito Orbino
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Full Stack Developer
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/lora.png"
                class="max-w-full mb-5"
                alt="lora"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Lora
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Rhoda Grace Brito
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Marketing Specialist
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/czedrix.png"
                class="max-w-full mb-5"
                alt="czedrix"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Czedrix
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Czedrix Barcena
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Developer
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/orland.png"
                class="max-w-full mb-5"
                alt="orland"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Orland
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Orland Salas
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  UI / UX Designer
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/rj.png"
                class="max-w-full mb-5"
                alt="rj"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  RJ
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Raymond John Yorong
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Developer
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/gale.png"
                class="max-w-full mb-5"
                alt="gale"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Gale
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Leslie Palmos
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Human Resource Manager
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/salve.png"
                class="max-w-full mb-5"
                alt="salve"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Salve
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Salvacion Parreño
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  Corporate Secretary
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <div>
              <img
                src="/images/about-us/mon.png"
                class="max-w-full mb-5"
                alt="mon"
              />

              <div class="flex flex-col gap-y-1 text-center">
                <div
                  class="text-[18px] md:text-[20px] font-[600] text-[#475766]"
                >
                  Mon
                </div>
                <div
                  class="text-[16px] md:text-[18px] font-[400] text-[#475766]"
                >
                  Raymond De La Cruz
                </div>
                <div class="text-[16px] font-[300] text-[#475766]">
                  UI / UX Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactEmail />
  </div>
</template>