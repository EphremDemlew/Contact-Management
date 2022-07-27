<template>
  <div>
    <section
      class="flex justify-center items-center text-black bg-purple-200 body-font"
    >
      <div
        class="container mx-auto flex px-5 py-10 md:flex-row flex-col justify-around"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-40"
        >
          <div class="bg-white p-10 rounded-md">
            <h1
              class="title-font text-center sm:text-4xl text-3xl mb-4 font-medium text-black font-serif"
            >
              Log In
            </h1>
            <div class="flex flex-col text-black">
              <form @submit.prevent="addUser">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  v-model="email"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-2"
                />
                <span class="text-red-500">{{ emailError }}</span>
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  v-model="password"
                  type="password"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-2"
                />
                <div class="flex justify-between">
                  <button
                    class="shadow mt-5 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Log In
                  </button>
                  <router-link
                    to="/"
                    class="shadow mt-5 bg-white hover:bg-purple-500 focus:shadow-outline focus:outline-none text-black hover:text-white py-2 px-4 rounded"
                    type="cancel"
                  >
                    Cancel
                  </router-link>
                </div>
              </form>
            </div>
          </div>
          <p class="m-auto py-2 text-center text-gray-500 text-xs">
            &copy;2022 Ephrem Demlew. All rights reserved.
          </p>
        </div>

        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 mr-20 mt-24">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="../assets/undraw_secure_login_pdn4.svg"
          />
        </div>
      </div>
    </section>
    <!-- <ApolloMutation
      :mutation="
        (gql) => gql`
          mutation createAccount(
            $email: String!
            $name: String!
            $password: String!
            $thumbnail: String!
          ) {
            signup(
              email: $email
              name: $name
              password: $password
              thumbnail: $thumbnail
            ) {
              id
              token
            }
          }
        `
      "
      :variables="{
        name,
      }"
      @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        <button :disabled="loading" @click="mutate()">Click me</button>
        <p v-if="error">An error occurred: {{ error }}</p>
      </template>
    </ApolloMutation> -->
  </div>
</template>

<script setup>
import { useQuery, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { reactive } from "vue";
</script>
<style scoped>
section {
  height: 100vh;
}
</style>
