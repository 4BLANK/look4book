<template>
    <section>
        <the-header @doSearch="searchForBooks"></the-header>
        <main>
            <router-view :bookItems="res"></router-view>
        </main>
    </section>
</template>

<script>
/*eslint-disable*/
import TheHeader from "./components/UI&UX/TheHeader.vue";
import axios from "axios";

export default {
    data() {
        return {
            res: [],
        };
    },
    methods: {
        searchForBooks(search) {
            this.$router.push("/books");
            axios
                .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
                .then((response) => {
                    this.res = response.data.items;
                })
                .catch((err) => console.log("No Result Was Found! " + err));
        },
    },

    components: {
        TheHeader,
    },
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
