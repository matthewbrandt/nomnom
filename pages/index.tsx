import Head from "next/head";
import { getAllRecipes } from "../lib/api";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";

export default function Index({ allRecipes }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>cookEat.ch</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
					rel="stylesheet" />
			</Head>
			<Header />
			{allRecipes.map((recipe: { title: string; excerpt: string; coverImage: string; date: string; ogImage: string; imageCreditUrl: string; imageCreditName: string; tags: []; persons: number; ingredients: []; directions: []; slug: string; }) => (
				<RecipeCard
					title={recipe.title}
					excerpt={recipe.excerpt}
					coverImage={recipe.coverImage}
					date={recipe.date}
					ogImage={recipe.ogImage}
					imageCreditUrl={recipe.imageCreditUrl}
					imageCreditName={recipe.imageCreditName}
					tags={recipe.tags}
					persons={recipe.persons}
					ingredients={recipe.ingredients}
					directions={recipe.directions}
					slug={recipe.slug}
				/>
			))}
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allRecipes = getAllRecipes([
		'title',
		'excerpt',
		'coverImage',
		'date',
		'ogImage',
		'imageCreditUrl',
		'imageCreditName',
		'tags',
		'persons',
		'ingredients',
		'directions',
		'slug'
	]);

	return {
		props: { allRecipes },
	}
}