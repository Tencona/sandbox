<template>
    <div class="sandboxFunction">
        <div class="name">{{name}}</div>
        <div class="fields">
            <div
                v-for="(field, i) in fields"
                :index="i"
                :key="field.key"
                :name="field.name"
                :type="field.type"
            >
                <template v-if="field.type === 'string'">
                    <div>
                        <input
                            class="stringInput"
                            type="text"
                            placeholder="name"
                            v-model="values[field.key]"
                        >
                    </div>
                </template>
                <template v-if="field.type === 'number'">
                    <div>
                        <input
                            class="numberInput"
                            type="number"
                            placeholder="name"
                            v-model="values[field.key]"
                        >
                    </div>
                </template>
            </div>
        </div>
        <div class="output">{{output}}</div>
        <div class="footer">
            <button class="btnExecute" @click="execute">Run</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SandboxFunction",
    components: {},
    props: {
        name: String,
        fields: Array,
        func: Function
    },
    data() {
        return {
            values: {},
            output: "output..."
        };
    },
    computed: {},
    methods: {
        execute() {
            if (this.func) this.output = this.func(this.values);
        }
    }
};
</script>

<style scoped>
.sandboxFunction {
    background: white;
}
.name {
    font-size: 18pt;
}
</style>

