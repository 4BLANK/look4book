<template>
    <section>
        <div class="content">
            <div v-if="bookItems.length > 0" class="heading">
                <p class="results">Results</p>
            </div>

            <ul>
                <div class="books">
                    <li v-for="item in bookItems" :key="item.id">
                        <router-link :to="'/books/' + item.id">
                            <book-card :bookItem="item"></book-card>
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
    </section>
</template>

<script>
import BookCard from "../UI&UX/BookCard.vue";

export default {
    components: {
        BookCard,
    },
    props: ["bookItems"],
};
</script>

<style scoped>
li {
    list-style: none;
}
.books {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 0 auto;
    width: fit-content;
    padding: 0.5rem 0;
}
.books .card:last-child {
    margin-right: 0;
}
.content {
    margin: 4rem auto 3rem;
    width: fit-content;
}
.content .results {
    color: #121212;
    background-color: #ffecec;
    padding: 1rem;
    width: 100%;
    font-weight: 600;
    box-sizing: border-box;
    border-radius: 6px;
}

.content .heading {
    margin: 0.5rem 0 0.5rem;
    display: flex;
    justify-content: space-between;
}
</style>
