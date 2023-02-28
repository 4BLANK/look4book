<template>
    <section>
        <header>
            <div class="title">
                <router-link to="/">
                    <h1 class="logo">look<span>4</span>book</h1>
                </router-link>
            </div>
            <div class="links">
                <p>
                    <a class="link" href="#">Portfolio</a>
                </p>
                <p>
                    <a class="support link" href="#">Support us</a>
                </p>
            </div>
        </header>
        <nav class="subnav">
            <router-link to="/books">
                <p class="active item">Home</p>
            </router-link>
            <div @click="dropdown = !dropdown" class="category">
                Category <i class="arrow down"></i>
                <div v-if="dropdown" class="dropdown">
                    <ul>
                        <li></li>
                    </ul>
                    <li v-for="cat in cats" :key="cat.id">
                        <p
                            @click="goAndReload(cat.path, cat.category)"
                            class="subitem"
                        >
                            {{ cat.category }}
                        </p>
                    </li>
                </div>
            </div>
            <div>
                <p class="item">Bestseller</p>
            </div>
            <p class="item">Find a store</p>
            <p class="item">Blog</p>
        </nav>
        <div class="bannerContainer">
            <div class="banner">
                <img class="img" src="../../assets/books.jpg" alt="" />
            </div>
            <div class="text">
                <p class="lilHeading">
                    <span class="line"></span> Looking for a book?
                </p>
                <h2>We've got your back</h2>
                <p class="words">
                    Search through millions of books in a few clicks. <br />All
                    for free!
                </p>
            </div>
            <div class="searchDiv">
                <input
                    type="text"
                    autocomplete="off"
                    name="search"
                    class="search"
                    id="search"
                    placeholder="Search by author, title, name, ISBN"
                    v-model="search"
                    @keyup.enter="hitSearch"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            no: false,
            search: "",
            dropdown: false,
            cats: [
                {
                    category: "Fiction",
                    path: "fiction",
                },
                {
                    category: "Science",
                    path: "science",
                },
                {
                    category: "Literature",
                    path: "literature",
                },
                {
                    category: "History",
                    path: "history",
                },
                {
                    category: "Art",
                    path: "art",
                },
                {
                    category: "Programming",
                    path: "programming",
                },
                {
                    category: "Self Improving",
                    path: "self-improving",
                },
            ],
        };
    },
    methods: {
        hitSearch() {
            this.$emit("doSearch", this.search);
            this.search = "";
        },
        goAndReload(path, tit) {
            this.$router.push("/categories/" + path);
            this.catTitle = tit;
            setTimeout(() => {
                this.$router.go(this.$router.currentRoute);
            }, 50);
        },
    },
};
</script>

<style scoped>
.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
.arrow {
    margin-left: 0.5rem;
    border: solid #666;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    border-radius: 1px;
}
.category {
    position: relative;
}

.subnav .item {
    padding: 0.5rem 1rem;
}

.subnav .category {
    padding: 0.5rem 1rem;
}

.dropdown {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 800ms ease-in;
    position: absolute;
    top: 0;
    right: 50%;
    transform: translate(50%, 2rem);
    z-index: 3;
    border-radius: 12px;
    overflow: hidden;
    background: rgb(133, 4, 4);
    color: #f5f5f5;
    list-style: none;
}

.dropdown a {
    color: #f5f5f5;
}

.dropdown .subitem {
    padding: 1rem 2rem;
    font-weight: 600;
    color: #f5f5f5;
}

.dropdown .subitem:hover {
    background-color: hsl(0, 80%, 4%);
    transition: 400ms ease;
}

nav {
    display: flex;
    width: 450px;
    margin: 0 auto 1rem;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
}

nav .active {
    color: rgb(52, 32, 122);
}
/*  */
/*  */
header {
    margin: 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header .links {
    display: flex;
}
header .links .link {
    margin: 0 16px 0;
}
header .links .link:last-child {
    margin-right: 0;
}
.support {
    padding: 0.33rem 1rem;
    border-radius: 5px;
    background-color: rgb(196, 0, 0);
    color: #f5f5f5;
}
.support:hover {
    background-color: rgb(109, 0, 0);
    transition: 300ms;
}
.logo {
    font-size: 28px;
    font-weight: 700;
}
.logo span {
    font-style: italic;
    color: rgb(196, 0, 0);
    font-weight: 800;
}
.bannerContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    width: min-width;
    margin-bottom: 3rem;
}
.banner {
    object-fit: cover;
    overflow: hidden;
    border-radius: 1.5rem;
    widows: 100%;
    min-height: 300px;
    height: 300px;
}
.banner .img {
    max-width: 100%;
    margin-top: -4rem;
    height: auto;
    min-height: 300px;
    min-width: 550px;
}
.bannerContainer .text {
    z-index: 1;
    box-shadow: rgba(17, 30, 26, 0.2) 0px 4px 16px,
        rgba(17, 17, 26, 0.1) 0px 8px 32px;
}
.bannerContainer .text .lilHeading span {
    height: 2px;
    border-radius: 1rem;
    width: 1rem;
    background: #777;
    margin-right: 5px;
}
.bannerContainer .text .lilHeading {
    display: flex;
    align-items: center;
    flex-direction: row;
    position: absolute;
    top: 20%;
    left: 10%;
    max-width: 70%;
    color: #1f1f1f;
    background: #f5f5f5;
    border-radius: 3px;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
}
.bannerContainer .text .words {
    display: flex;
    align-items: center;
    flex-direction: row;
    position: absolute;
    top: 52%;
    left: 10%;
    max-width: 70%;
    color: #f5f5f5;
    border-radius: 3px;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
}
.bannerContainer .text h2 {
    position: absolute;
    top: 28%;
    left: 10%;
    color: #f5f5f5;
    max-width: 600px;
    font-size: 56px;
}
.bannerContainer .searchDiv input {
    background-color: inherit;
    color: inherit;
    font-size: 20px;
    padding: 1.25rem 1rem;
    font-weight: 500;
    width: 100%;
}
.bannerContainer .searchDiv {
    box-shadow: rgba(17, 30, 26, 0.2) 0px 4px 16px,
        rgba(17, 17, 26, 0.1) 0px 8px 32px;
    color: #1f1f1f;
    background-color: #f5f5f5;
    padding: 0 2rem;
    min-width: 350px;
    overflow: hidden;
    position: absolute;
    width: 80%;
    box-sizing: border-box;
    border-radius: 16px;
    left: 50%;
    bottom: 00%;
    transform: translate(-50%, 50%);
}
</style>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@200;300;500;600;700;800&display=swap"); */
/* @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap");

* {
    border: 0;
    margin: 0;
    padding: 0;
    color: #1f1f1f;
    font-family: "Poppins", sans-serif;
    outline: none;
}

a {
    color: #222;
    text-decoration: none;
}

body {
    min-width: 700px;
    color: #222;
    width: 85%;
    margin: 1rem auto 0;
    /* font-family: "Epilogue", sans-serif; */
    max-width: 1100px;
}
</style>
