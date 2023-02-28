<template>
  <section>
    <h1>TESTING API</h1>
    <button @click="showRes">Show</button>
    <ul>
      <li v-for="result in res" :key="result.id">
    <h3>{{ result.volumeInfo.title }}</h3>
    </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      res: [],
      title: null,
    };
  },
  methods: {
    showRes() {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=mobydick"
        )
        .then((response) => {
           console.log(response.data.items);
           this.res = response.data.items;
        })
        .catch((err) => console.log("No Result Was Found! " + err));
    },
  },
};
</script>

<style>
</style>