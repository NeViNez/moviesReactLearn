import React, { useState, useEffect } from 'react';

import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function MainContent() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleSearchRequest = ([searchRequest, movieType]) => {
		if (searchRequest === '') {
			return;
		}
		setLoading(true);
		fetch(
			`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchRequest}&type=${movieType}`
		)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.Search);
			})
			.then(setLoading(false));
	};

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Oklahoma`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.Search);
			})
			.then(setLoading(false));
	}, []);

	return (
		<main className='flex-grow dark:bg-neutral-700'>
			<Search handleSearchRequest={handleSearchRequest} />
			{loading ? <Preloader /> : <MoviesList movies={movies} />}
		</main>
	);
}
