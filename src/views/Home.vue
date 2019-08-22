<template>
	<div class="home">
		<StringSandbox />
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
