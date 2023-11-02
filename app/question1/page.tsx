import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 1</h1>
				<p className="p-10">
					Q. What do you want to learn or do more of at work?
				</p>

				<p className=" p-10">
					A. This question comprises two aspects. I'm interested in expanding my
					knowledge of software, whether it involves creating applications or
					utilizing cloud infrastructure. I believe that a deeper understanding
					enables one to simplify complex concepts and effectively communicate
					with clients. Furthermore, I aspire to lead a team in the future,
					leveraging my experience to mentor and guide individuals.
				</p>
			</div>
		</div>
	);
}
