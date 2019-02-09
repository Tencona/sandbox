<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/stringSandbox">String Sandbox</router-link>|
        </div>
        <div class="compFlex">
            <router-view class="comp"/>
        </div>
    </div>
</template>

<style>
html {
    background-image: linear-gradient(rgb(0, 255, 255), rgb(5, 113, 201));
    background-size: cover;
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: rgb(87, 101, 255);
}
.compFlex {
    display: flex;
    justify-content: center;
}
.comp {
    width: 80%;
    background: white;
    border-radius: 16px;
    padding: 18px;
}
</style>
