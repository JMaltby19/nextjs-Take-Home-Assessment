import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 10</h1>
				<p className="p-10">
					Q. How could we improve or alter this familiarization exercise?
				</p>
				<p className=" p-10">
					A. One possible idea that comes to mind is to incorporate a couple of
					tasks focused on hands-on troubleshooting, particularly related to
					frequently encountered deployment problems.
				</p>
			</div>
		</div>
	);
}
