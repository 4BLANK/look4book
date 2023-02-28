<template>
    <section>
        <div class="book">
            <div>
                <div class="cover">
                    <img :src="img" alt="" />
                </div>
                <h1 class="title">{{ bookData.title }}</h1>
                <p class="authors">{{ authors }}</p>
            </div>
            <div class="info">
                <div>
                    <p v-html="bookData.description" class="desc"></p>
                </div>
                <a target="_blank" :href="'https://www.amazon.com/dp/' + isbn"
                    ><button class="purchase">Buy online</button></a
                >
                <!-- bookData.industryIdentifiers.identifier -->
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import picture from "../../assets/unavailable.png";

export default {
    data() {
        return {
            bookData: {},
            authors: "",
            img: "",
            isbn: "",
        };
    },
    mounted() {
        axios
            .get(
                "https://www.googleapis.com/books/v1/volumes/" +
                    this.$route.params.id
            )
            .then((res) => {
                this.bookData = res.data.volumeInfo;
                this.authors = Object.values(this.bookData.authors).join(", ");
                this.img = Object.prototype.hasOwnProperty.call(
                    this.bookData,
                    "imageLinks"
                )
                    ? this.bookData.imageLinks.thumbnail
                    : picture;
                this.isbn = Object.prototype.hasOwnProperty.call(
                    this.bookData,
                    "industryIdentifiers"
                )
                    ? this.bookData.industryIdentifiers[0].identifier
                    : "";
            });
    },
};
</script>

<style scoped>
.book {
    display: flex;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 20px 0px;
    min-width: 700px;
    margin: 4rem auto 5rem;
    width: fit-content;
    background-color: #f6f6f6;
    border-radius: 20px;
    padding: 0.5rem;
    box-sizing: border-box;
}
.cover,
.authors,
.title {
    margin: 1rem;
    line-height: 1.1;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    width: 189px;
    margin-top: 0.5rem;
}
.cover {
    overflow: hidden;
    border-radius: 10px;
    max-height: 250px;
    max-width: 189px;
    min-height: 250px;
    min-width: 189px;
    height: min-content;
}

.cover img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.info {
    padding: 1rem;
}

.authors {
    color: #777;
    font-size: 12px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    width: 189px;
}
.info .desc {
    line-height: 1.4;
    initial-letter: 4;
    max-width: 500px;
    font-weight: 300;
    text-align: justify;
    margin-bottom: 1rem;
}

.info .desc::first-letter {
    font-size: 48px;
    float: left;
    font-weight: 600;
    font-family: serif;
    padding: 0;
    margin: -0.8rem 0.4rem -1.3rem 0;
}

.purchase {
    width: 100%;
    background-color: rgb(206, 24, 24);
    color: #f5f5f5;
    font-weight: bold;
    font-size: 1.25rem;
    border-radius: 3px;
    padding: 0.5rem 0;
}

@media (max-width: 650px) {
    .book {
        flex-direction: column;
    }
    .book .title,
    .book .authors {
        margin: 0 auto;
    }
    .book {
        padding: 2rem 0.5rem;
    }
    .book .cover {
        margin: auto;
    }
}
</style>
