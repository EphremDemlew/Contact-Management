<template>
  <navigation />

  <!-- Start -->
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap sm:-m-4 mx-4 -mb-0 -mt-4">
        <div
          v-for="users in result.all_users"
          :key="users.id"
          class="p-4 md:w-1/3 sm:mb-0 mb-6"
        >
          <div class="rounded-lg h-64">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="../assets/undraw_personal_info_re_ur1n.svg"
            />
          </div>
          <div class="border-x-8 border-b-8 rounded-lg border-indigo-800">
            <h2 class="text-xl font-medium title-font text-white">
              {{ users.id }}
            </h2>
            <p class="text-base leading-relaxed mb-2">
              {{ users.name }}
            </p>
            <router-link
              to="/"
              class="text-indigo-400 inline-flex items-center my-3"
              >See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End -->

  <footercomp />
</template>

<script setup>
import navigation from "../components/nav.vue";
import footercomp from "../components/footer.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const getUsers = gql`
  {
    all_users {
      name
      id
    }
  }
`;

const { result, loading, error } = useQuery(getUsers);
console.log(result);
</script>

<style></style>
