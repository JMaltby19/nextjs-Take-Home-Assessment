import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 3</h1>
				<p className="p-10">
					Q. How would you compare Next.js with another frontend framework? Feel
					free to compare with a framework of your choice.
				</p>
				<p className=" p-10">
					A. I've primarily worked with React, which shares similarities with
					Next.js. However, my exposure to ASP.Net has been limited, and I find
					Next.js to be notably more user-friendly and less intricate. Its
					cleaner file structure and reduced need for configuration and setup
					contribute to its ease of use in comparison.
				</p>
			</div>
		</div>
	);
}
