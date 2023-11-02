import React from "react";

export default function page() {
	return (
		<div>
			<button className="left-0 m-4">
				<a href="/">Home</a>
			</button>
			<div className="max-w-screen flex flex-col justify-between items-center m-10">
				<h1 className=" text-xl font-extrabold">Question 6</h1>
				<p className="p-10">
					Q. The customer from question 5 replies to your response with the
					below: “I’m so frustrated. I’ve been trying to make this work for
					hours and I just can’t figure it out. It must be a platform issue so
					why don't you just fix it for me instead of asking me questions.”
				</p>
				<p className=" p-10">
					A. "I'm really sorry to hear that you're feeling frustrated, and I
					understand that you've been trying to resolve this issue for a while.
					I'd be happy to help you, and I appreciate your patience. To ensure we
					can resolve this as efficiently as possible, I do need to gather some
					information and ask a few questions. This will help us pinpoint the
					problem and provide you with the most accurate solution. Please bear
					with me, and we'll work together to get this sorted out."
				</p>
			</div>
		</div>
	);
}
