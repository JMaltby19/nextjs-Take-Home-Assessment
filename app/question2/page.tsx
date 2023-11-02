import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 2</h1>
				<p className="p-10">
					Q. Describe how you solved a challenge or technical issue that you
					faced in a previous role (preferably in a previous support role). How
					did you determine that your solution was successful?
				</p>
				<p className=" p-10">
					A. We employ a Management Information System (MIS) capable of
					presenting productivity metrics and operational efficiencies. In the
					past, some of our clients would retrieve data from the web-based
					reports, typically in Excel or PDF format. However, the analysis
					options were restricted. To address this limitation, I created a
					dashboard that retrieves CSV files, allowing users to store them in a
					designated folder while ensuring automatic updates. This approach
					provides dynamic and fluid data, greatly enhancing the ability to spot
					trends and patterns, and thus facilitating more informed business
					decision-making.
				</p>
			</div>
		</div>
	);
}
