<template>
    <div class="stringSandbox">
        <div class="title">Strings</div>
        <SandboxFunction
            v-for="(func, i) in funcs"
            :key="i"
            :name="func.name"
            :fields="func.fields"
            :func="func.func"
        />
    </div>
</template>

<script>
import SandboxFunction from "../components/SandboxFunction.vue";
let genString = require("../funcs/gen-string.js");

export default {
    name: "StringSandbox",
    components: {
        SandboxFunction
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        funcs() {
            var s = "";
            var aaa = "aaa";
            return genString.funcs;
        }
    },
    methods: {}
};
</script>

<style scoped>
.stringSandbox {
    background: gray;
}
</style>