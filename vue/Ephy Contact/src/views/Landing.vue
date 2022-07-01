<template>
  <navigation />
  <div>
    <section class="text-gray-400 bg-gray-900 body-font">
      <div
        class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-serif"
          >
            Ephy Contact Managment
            <span class="text-red-500">!!&#9998; </span>
            <br class="hidden lg:inline-block" /><span> ✍</span>
          </h1>
          <p class="mb-8 leading-relaxed">
            Add contacts and mange them with an easy to look ast and beautifull
            contact managment system interface.
          </p>
          <div class="flex justify-center flex-col">
            <div class="ml-4">
              <button
                type="button"
                class="text-white bg-indigo-500 py-2 px-10 hover:text-white hover:bg-indigo-600 text-lg focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500"
              >
                📑 View Users&nbsp;
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="mt-3">
              <button
                class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                Sign Up
              </button>
              <button
                class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="../assets/Online Review-cuate.svg"
          />
        </div>
      </div>
    </section>
  </div>
  <footercomp />
</template>

<script setup>
import navigation from "../components/nav.vue";
import footercomp from "../components/footer.vue";
</script>
