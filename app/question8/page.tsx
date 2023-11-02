import React from "react";

const example = {
	headers: {
		"x-robots-tag": "noindex",
	},
};

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 8</h1>
				<p className="p-10">
					Q. A customer is creating a site and would like their project not to
					be indexed by search engines. Please write a reply to the customer.
					Separately, list any relevant documentation you found and any feedback
					or information you’d like to share about your decision making process.
				</p>
				<div className=" p-10">
					A. Thank you for contacting Vercel. I understand that you would like
					to prevent your project from being indexed by search engines. To do
					this, you can add the following header to your Vercel configuration:
					<div className="p-10">
						<pre>{JSON.stringify(example, null, 2)}</pre>
					</div>
					<p className="">
						If you are using a Custom Domain for your preview deployments and
						wish to override the default behavior of omitting X-Robots-Tag:
						noindex, you should first look to inject the response header using
						your framework's built-in methods.
					</p>
					<p className="p-5">
						<a
							className="hover:text-sky-500 hover:underline"
							href="https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines"
						>
							https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
						</a>
					</p>
					This will tell search engines not to index your site. Please note that
					it may take some time for search engines to remove your site from
					their indexes.
					<p className="py-5">
						I decided to recommend adding the x-robots-tag header to the
						customer's Vercel configuration because it is the most reliable and
						straightforward way to prevent their project from being indexed by
						search engines.
					</p>
				</div>
			</div>
		</div>
	);
}
