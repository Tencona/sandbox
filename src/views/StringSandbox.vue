<template>
    <div class="stringSandbox">
        <div class="title">Strings</div>
        <div class="functions">
            <SandboxFunction
                class="sandboxFunction"
                v-for="(func, i) in funcs"
                :key="i"
                :name="func.name"
                :fields="func.fields"
                :func="func.func"
            />
        </div>
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
}
.title {
    font-size: 48pt;
}
.functions {
    display: flex;
    justify-content: center;
    margin-top: 18px;
    overflow-y: auto;
    scroll-behavior: smooth;
    padding: 8px;
}
.sandboxFunction {
    transition: 0.2s;
}
.sandboxFunction:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>