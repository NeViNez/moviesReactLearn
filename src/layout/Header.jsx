import React from 'react';

export default function Header() {
	return (
		<nav
			className='flex-nowrap relative flex w-full items-center justify-between px-1
						bg-cyan-100 py-2 shadow-md dark:bg-cyan-600 lg:flex-wrap lg:justify-start lg:py-4'
		>
			<div className='flex-grow'>
				<h3 className='text-2xl mx-2 lg:mx-4 dark:text-neutral-100'>
					React Movies
				</h3>
			</div>

			<ul className='relative flex items-center mx-2 lg:mx-4 dark:text-neutral-100'>
				<li>
					<a href='!#'>Repo</a>
				</li>
			</ul>
		</nav>
	);
}
