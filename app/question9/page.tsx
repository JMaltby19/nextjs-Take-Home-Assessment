import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 9</h1>
				<p className="p-10">
					Q. What do you think is one of the most common problems which
					customers ask Vercel for help with? How would you help customers to
					overcome common problems, short-term and long-term?
				</p>
				<div className=" p-10">
					A. Deployment is one of the most common problems that customers ask
					Vercel for help with. This is because Vercel is a cloud platform that
					helps developers build and deploy web applications. Deployment can be
					a complex process, and there are many things that can go wrong. For
					example, a customer may have trouble configuring their application to
					work with Vercel's infrastructure. Or, they may have trouble debugging
					an error that occurs during deployment.
					<p className="py-5">
						In the short term, enhancing customer support services is essential,
						while exploring the use of AI for handling customer inquiries could
						be beneficial. For recurring deployment challenges faced by
						customers, providing additional project configuration examples could
						prove to be a valuable solution.
					</p>
				</div>
			</div>
		</div>
	);
}
