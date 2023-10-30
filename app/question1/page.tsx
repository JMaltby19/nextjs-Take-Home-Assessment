import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 1</h1>

				<p className=" p-10">
					I would like to learn about more about software{" "}
				</p>
			</div>
		</div>
	);
}
