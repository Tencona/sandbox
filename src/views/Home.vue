<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <StringSandbox/>
    </div>
</template>

<script>
// @ is an alias to /src
import StringSandbox from "@/views/StringSandbox.vue";

export default {
    name: "home",
    components: {
        StringSandbox
    }
};
</script>
