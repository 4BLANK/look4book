<template>
    <section>
        <div class="container">
            <div class="category">{{ catTitleBind }}</div>
            <ul class="bookList" v-if="books.length !== 0">
                <li v-for="item in books" :key="item.id">
                    <router-link :to="'/books/' + item.id">
                        <book-card :bookItem="item"></book-card>
                    </router-link>
                </li>
            </ul>
            <p v-else>Loading...</p>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import BookCard from "../UI&UX/BookCard.vue";

export default {
    components: {
        BookCard,
    },
    data() {
        return {
            res: {},
            title: "",
            books: [],
            catTitle: "",
        };
    },
    mounted() {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=subject:${this.$route.params.cat}&startIndex:2&maxResults:40`
            )
            .then((response) => {
                // console.log(this.$route.params.cat);
                this.res = response.data.items;
                // console.log(this.res[0].volumeInfo.title);
                this.books = this.res;
                console.log(Object.keys(this.res[0].volumeInfo).join("  -  "));
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        catTitleBind() {
            const catParam = this.$route.params.cat;
            if (catParam == "fiction") {
                return "Fiction";
            }
            if (catParam == "science") {
                return "Science";
            }
            if (catParam == "literature") {
                return "Literature";
            }
            if (catParam == "history") {
                return "History";
            }
            if (catParam == "art") {
                return "Art";
            }
            if (catParam == "programming") {
                return "Programming";
            }
            if (catParam == "self-improving") {
                return "Self Improving";
            } else {
                return catParam.charAt(0).toUpperCase() + catParam.slice(1);
            }
        },
    },
    ////////////////////////////////
};
</script>

<style scoped>
.container {
    margin: 4rem auto 3rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.category {
    color: #121212;
    background-color: #ffecec;
    padding: 1rem;
    width: 100%;
    font-weight: 600;
    box-sizing: border-box;
    margin-bottom: 1rem;
    border-radius: 6px;
}
.bookList {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
}

li {
    list-style: none;
}
</style>
