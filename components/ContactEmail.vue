<template>
  <div>
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
                class="input md:input-md lg:input-lg md:py-7 rounded-full bg-white flex items-center lg:w-[90%] xl:w-[80%] gap-2 lg:pe-2"
              >
                <input
                  type="text"
                  class="grow"
                  placeholder="Enter your email"
                />
                <button
                  class="btn btn-md font-inter md:text-[15px] lg:text-[18px] md:px-8 lg:px-8 bg-gradient-to-r from-[#2375E9] to-[#02C7D0] font-[400] text-white rounded-full border-none transition-all duration-300 transform hover:scale-105"
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