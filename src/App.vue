<template>
	<div class="bg-design-stone-100 w-screen min-h-screen md:py-[8rem]">
		<food-recipe></food-recipe>
	</div>
</template>

<script>
import FoodRecipe from './components/FoodRecipe.vue';

export default {
	components: {
		FoodRecipe,
	},
};
</script>
