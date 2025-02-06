<template>
	<div
		class="md:p-[2.5rem] lg:max-w-[46rem] md:max-w-[38.5rem] bg-white md:rounded-3xl mx-auto"
	>
		<food-img class="md:mb-10"></food-img>

		<div class="flex flex-col gap-8 md:px-0 md:py-0 px-8 py-10">
			<!-- 菜名 -->
			<div class="">
				<div class="mb-6">
					<h1
						class="font-young-serif text-[2.5rem] leading-none text-design-stone-900"
					>
						Simple Omelette Recipe
					</h1>
				</div>
				<div>
					<span class="font-outfit text-design-stone-600 leading-snug"
						>An easy and quick dish, perfect for any meal. This
						classic omelette combines beaten eggs cooked to
						perfection, optionally filled with your choice of
						cheese, vegetables, or meats.</span
					>
				</div>
			</div>

			<!-- 準備時間 -->
			<div class="p-6 bg-design-rose-50 flex flex-col gap-4 rounded-xl">
				<div>
					<span
						class="font-outfit text-xl leading-normal text-design-rose-800 font-bold"
						>Preparation time</span
					>
				</div>
				<div class="flex flex-col gap-4">
					<div class="pl-10 relative max-w-[14rem] md:max-w-full">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span
							class="text-design-stone-600 font-outfit font-bold"
							>Total:</span
						>
						<span class="font-outfit"
							>Approximately 10 minutes</span
						>
					</div>

					<div class="pl-10 relative max-w-[14rem] md:max-w-full">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span
							class="text-design-stone-600 font-outfit font-bold"
							>Preparation:</span
						>
						<span class="font-outfit">5 minutes</span>
					</div>

					<div class="pl-10 relative max-w-[14rem] md:max-w-full">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span
							class="text-design-stone-600 font-outfit font-bold"
							>Cooking:</span
						>
						<span class="font-outfit">5 minutes</span>
					</div>
				</div>
			</div>

			<!-- 原料 -->
			<div class="">
				<div
					class="font-young-serif text-[1.75rem] leading-none text-design-brown-800 mb-6"
				>
					Ingredients
				</div>

				<div class="flex flex-col gap-2">
					<div class="pl-10 relative">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span class="font-outfit">2-3 large eggs</span>
					</div>

					<div class="pl-10 relative">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span class="font-outfit">Salt, to taste</span>
					</div>

					<div class="pl-10 relative">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span class="font-outfit">Pepper, to taste</span>
					</div>

					<div class="pl-10 relative">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span class="font-outfit"
							>1 tablespoon of butter or oil</span
						>
					</div>

					<div class="pl-10 relative">
						<span
							class="w-[0.25rem] h-[0.25rem] rounded-full bg-design-brown-800 inline-block absolute top-[50%] left-2 -translate-y-1/2"
						></span>
						<span class="font-outfit"
							>Optional fillings: cheese, diced vegetables, cooked
							meats, herbs</span
						>
					</div>
				</div>
			</div>

			<!-- hr -->

			<div>
				<div class="border-t border-design-stone-150"></div>
			</div>

			<!-- 指示 -->
			<div>
				<div
					class="font-young-serif text-[1.75rem] leading-none text-design-brown-800 mb-6"
				>
					Instructions
				</div>

				<div class="">
					<ol
						class="list-decimal marker:text-design-brown-800 marker:font-bold pl-6 flex flex-col gap-4"
					>
						<li class="pl-4">
							<span
								class="text-design-stone-600 font-outfit font-bold"
								>Beat the eggs:</span
							>
							<span class="font-outfit"
								>In a bowl, beat the eggs with a pinch of salt
								and pepper until they are well mixed. You can
								add a tablespoon of water or milk for a fluffier
								texture.</span
							>
						</li>

						<li class="pl-4">
							<span
								class="text-design-stone-600 font-outfit font-bold"
								>Heat the pan:</span
							>
							<span class="font-outfit"
								>Place a non-stick frying pan over medium heat
								and add butter or oil.</span
							>
						</li>

						<li class="pl-4">
							<span
								class="text-design-stone-600 font-outfit font-bold"
								>Cook the omelette:</span
							>
							<span class="font-outfit"
								>Once the butter is melted and bubbling, pour in
								the eggs. Tilt the pan to ensure the eggs evenly
								coat the surface.</span
							>
						</li>

						<li class="pl-4">
							<span
								class="text-design-stone-600 font-outfit font-bold"
								>Add fillings (optional):</span
							>
							<span class="font-outfit"
								>When the eggs begin to set at the edges but are
								still slightly runny in the middle, sprinkle
								your chosen fillings over one half of the
								omelette.</span
							>
						</li>

						<li class="pl-4">
							<span
								class="text-design-stone-600 font-outfit font-bold"
								>Fold and serve:</span
							>
							<span class="font-outfit"
								>As the omelette continues to cook, carefully
								lift one edge and fold it over the fillings. Let
								it cook for another minute, then slide it onto a
								plate.</span
							>
						</li>

						<li class="pl-4">
							<span
								class="text-design-stone-600 font-outfit font-bold"
								>Enjoy:</span
							>
							<span class="font-outfit"
								>Serve hot, with additional salt and pepper if
								needed.</span
							>
						</li>
					</ol>
				</div>
			</div>

			<!-- hr -->

			<div>
				<div class="border-t border-design-stone-150"></div>
			</div>

			<section class="flex flex-col gap-6">
				<div
					class="font-young-serif text-[1.75rem] leading-none text-design-brown-800"
				>
					Nutrition
				</div>

				<div>
					<span class="font-outfit"
						>The table below shows nutritional values per serving
						without the additional fillings.</span
					>
				</div>

				<table>
					<tbody>
						<tr
							class="border-b border-design-stone-150 grid grid-cols-2 p-4"
						>
							<td data-cell="nutrient" class="font-outfit pl-4">
								Calories
							</td>
							<td
								data-cell-value="nutrient"
								class="font-outfit font-bold text-design-brown-800 pl-4"
							>
								277kcal
							</td>
						</tr>

						<tr
							class="border-b border-design-stone-150 grid grid-cols-2 p-4"
						>
							<td data-cell="nutrient" class="font-outfit pl-4">
								Carbs
							</td>
							<td
								data-cell="nutrient-value"
								class="font-outfit font-bold text-design-brown-800 pl-4"
							>
								0g
							</td>
						</tr>

						<tr
							class="border-b border-design-stone-150 grid grid-cols-2 p-4"
						>
							<td data-cell="nutrient" class="font-outfit pl-4">
								Protein
							</td>
							<td
								data-cell="nutrient-value"
								class="font-outfit font-bold text-design-brown-800 pl-4"
							>
								20g
							</td>
						</tr>

						<tr class="grid grid-cols-2 p-4">
							<td data-cell="nutrient" class="font-outfit pl-4">
								Fat
							</td>
							<td
								data-cell="nutrient-value"
								class="font-outfit font-bold text-design-brown-800 pl-4"
							>
								22g
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	</div>
</template>

<script>
import FoodImg from './FoodImg.vue';

export default {
	components: {
		FoodImg,
	},
};
</script>
