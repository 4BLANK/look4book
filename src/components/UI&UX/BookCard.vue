<template>
    <section>
        <div class="card">
            <div class="img">
                <img
                    :src="
                        volInfo.hasOwnProperty('imageLinks')
                            ? volInfo.imageLinks.thumbnail
                            : img
                    "
                    alt
                />
            </div>
            <div class="text">
                <h3 class="title truncate">
                    {{
                        volInfo.hasOwnProperty("title")
                            ? volInfo.title
                            : "Unavailable"
                    }}
                </h3>
                <p class="author truncate">
                    {{
                        // Object.values(obj).join(',')
                        volInfo.hasOwnProperty("authors")
                            ? Object.values(volInfo.authors).join(",")
                            : "Unavailable"
                    }}
                </p>
                <p class="desc truncate">
                    {{
                        volInfo.hasOwnProperty("description")
                            ? volInfo.description
                            : ""
                    }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import picture from "../../assets/unavailable.png";

export default {
    data() {
        return {
            img: picture,
            volInfo: this.bookItem.volumeInfo,
        };
    },
    props: ["bookItem"],
};
</script>

<style scoped>
.card .img {
    background-color: #fff;
    min-height: 210px;
    min-width: 140px;
    height: 210px;
    width: 140px;
    margin-right: 1rem;
    overflow: hidden;
}
img {
    object-fit: cover;
    height: 210px;
    width: 140px;
}

.card {
    padding: 1rem;
    border: 1px solid #eee;
    background-color: #fff;
    border-radius: 10px;
    grid-column: span 2;
    grid-template-columns: auto;
    display: flex;
    height: min-content;
    max-height: 210px;
    width: 300px;
    overflow: hidden;
}

.card .title {
    line-height: 1.2;
    font-size: 20px;
    margin-bottom: 0.33rem;
    -webkit-line-clamp: 2;
    color: rgb(79, 72, 151);
}
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    box-sizing: border-box;
    -webkit-box-orient: vertical;
}
.desc {
    line-height: 1.3;
    -webkit-line-clamp: 6;
    font-size: 14px;
    color: #444;
    margin-top: 0.5rem;
}
.card .author {
    font-size: 14px;
    color: #999;
    -webkit-line-clamp: 2;
}
li {
    list-style: none;
}
</style>
