import React from "react";

const example = {
	redirects: [
		{ source: "/blog", destination: "https://example.com", statusCode: 308 },
	],
};

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 7</h1>
				<p className="p-10">
					Q. A customer has a project on Vercel and they want to redirect the
					/blog path to another website. Please write a reply to the customer.
					Separately, list any relevant documentation you found and any feedback
					or information you’d like to share about your decision making process.
				</p>
				<div className=" p-10">
					A. To redirect the /blog path to another website on Vercel, you can
					use the Redirects feature. Redirects are rules that instruct Vercel to
					send users to a different URL than the one they requested1 . Here are
					the steps to set up a redirect:
					<ul className="ml-10 list-disc">
						<li>Create a project configuration file (vercel.json).</li>
						<li>
							{" "}
							Add a "redirects" field, which is an array of redirect rules.
						</li>
						<li>
							{" "}
							Define the source and destination URLs for the redirect rule.
						</li>
						<li> Deploy your project.</li>
					</ul>
					For example, if you want to redirect the /blog path to
					https://example.com, you can add the following rule to your
					vercel.json file:
					<ul className="p-10">
						<li>
							<pre>{JSON.stringify(example, null, 2)}</pre>
						</li>
					</ul>
					<p>
						Note that the "statusCode" property is set to 308, which indicates a
						permanent redirect1 . You can also use 307 for a temporary redirect.
						In addition to the Redirects feature, you can also use Edge
						Middleware, Serverless Functions, or Next.js pages to respond with a
						redirect3 . However, these methods may not be necessary for a simple
						redirect like the one you described. I hope this helps! Let me know
						if you have any further questions.
					</p>
					<p className="py-5">Documentation:</p>
					<ul className="ml-10 list-disc">
						<li>Redirects: https://vercel.com/docs/edge-network/redirects</li>
						<li>
							Deploying & Redirecting Domains:
							https://vercel.com/docs/projects/domains/deploying-and-redirecting
						</li>
						<li>
							How can I increase the limit of redirects or use dynamic redirects
							on Vercel:
							https://vercel.com/guides/how-can-i-increase-the-limit-of-redirects-or-use-dynamic-redirects-on-vercel
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
