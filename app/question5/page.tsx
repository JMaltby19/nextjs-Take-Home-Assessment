import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 5</h1>
				<p className="p-10">
					Q. Imagine a customer writes in requesting help with a build issue on
					a framework or technology that you've not seen before. How would you
					go about troubleshooting this and what questions would you ask the
					customer to understand the situation better?
				</p>
				<div>
					<p className=" p-10">
						A. When confronted with a customer seeking assistance for a build
						issue in an unfamiliar framework or technology, my approach would
						involve a systematic troubleshooting process. I'd begin by
						requesting detailed specifics about the issue, including error
						messages and symptoms, followed by gathering information about the
						customer's development environment, code, and any steps taken to
						address the problem. I'd examine official documentation and
						community resources, inquire about dependencies, and analyze logs or
						error messages. If needed, I'd suggest learning resources and, if
						the problem remains unresolved, consider collaboration with experts
						familiar with the technology, aiming to comprehensively understand
						and resolve the issue. I have written a few questions below and the
						reasoning behind them.
					</p>
					<p className="px-10 py-4">
						What specific problem are you encountering? Asking for a detailed
						description of the issue helps in pinpointing the root cause.
					</p>
					<p className="px-10 py-4">
						When did the issue first occur? Understanding when the problem
						started can reveal if recent changes triggered it.
					</p>
					<p className="px-10 py-4">
						Are there any error messages or codes that you've received? Error
						messages often contain valuable information for diagnosing the
						issue.
					</p>
					<p className="px-10 py-4">
						Can you provide details about your development environment?
						Information about the operating system, software versions, and
						development tools used is essential.
					</p>
					<p className="px-10 py-4">
						Have you made any recent changes to your code or configuration?
						Identifying recent modifications can help identify potential causes
						of the issue.
					</p>
					<p className="px-10 py-4">
						Can you share the relevant code or configuration files? Reviewing
						the actual code or configuration can be instrumental in identifying
						the problem.
					</p>
				</div>
			</div>
		</div>
	);
}
