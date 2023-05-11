import React from 'react';

export default function MovieCard(props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster,
	} = props;

	return (
		<div
			className='flex flex-col bg-white rounded-lg p-6 m-2
										shadow-md dark:bg-neutral-600 hover:shadow-lg transition-shadow dark:hover:shadow-xl'
		>
			<div className='flex flex-grow justify-center items-center'>
				{poster === 'N/A' ? (
					<img src={`https://placehold.co/300x400?text=${title}`} />
				) : (
					<img src={poster} />
				)}
			</div>

			<h3 className='my-2 text-xl font-semibold dark:text-neutral-100 px-1'>
				{title}
			</h3>

			<div className='flex'>
				<p className='flex-grow dark:text-neutral-300'>{type}</p>
				<p className='italic dark:text-neutral-300'>{year}</p>
			</div>
		</div>
	);
}
