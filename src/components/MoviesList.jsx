import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesList(props) {
	const { movies = [] } = props;

	return (
		<div className='grid mx-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
			{movies.length ? (
				movies.map((movie) => <MovieCard key={movie.imdbID} {...movie} />)
			) : (
				<span className='text-xl md:text-2xl lg:text-4xl'>Nothing found</span>
			)}
		</div>
	);
}
