import React from "react";
import Link from "next/link";

export const Navbar = () => {
	const links = [
		{ id: 1, link: "question1", title: "Question 1" },
		{ id: 2, link: "question2", title: "Question 2" },
		{ id: 3, link: "question3", title: "Question 3" },
		{ id: 4, link: "question4", title: "Question 4" },
		{ id: 5, link: "question5", title: "Question 5" },
		{ id: 6, link: "question6", title: "Question 6" },
		{ id: 7, link: "question7", title: "Question 7" },
		{ id: 8, link: "question8", title: "Question 8" },
		{ id: 9, link: "question9", title: "Question 9" },
		{ id: 10, link: "question10", title: "Question 10" },
	];

	return (
		<div className="w-full h20 z-10 fixed text-black duration-300 ease-in">
			<div className="flex justify-center items-center w-full max-w-screen-xl mx-auto p-4">
				<div>
					<ul className=" max-w-2xl flex justify-center items-center">
						{links.map(({ id, link, title }) => (
							<Link key={id} href={`/${link}`}>
								<li className="text-white ml-6 mt-1 text-base text-center uppercase cursor-pointer duration-200 ease-out hover:scale-125 tracking-normal ">
									{title}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
