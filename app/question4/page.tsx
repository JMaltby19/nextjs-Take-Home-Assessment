import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 4</h1>
				<p className="p-10">
					Q. When would you choose to use Edge Functions, Serverless Functions,
					or Edge Middleware with Vercel?
				</p>
				<p className=" p-10">
					A. Edge Functions: Use these for quick tasks like speeding up content
					delivery and caching at the edge. Serverless Functions: Choose these
					for more complex server-side tasks like handling data and creating
					APIs, without needing to manage servers. Edge Middleware: Go for this
					when you want to apply consistent functions, like security checks, to
					incoming requests at the edge. It's useful for tasks needed across an
					app.
				</p>
			</div>
		</div>
	);
}
