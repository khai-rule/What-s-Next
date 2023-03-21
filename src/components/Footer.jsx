const Footer = () => {
	return (
		<>
			<footer
				data-aos="fade-up"
				data-aos-duration="600"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				className="h-20 mt-20 md:pb-20 md:flex-col z-10 flex justify-between sticky top-[100vh]"
			>
				<div className="my-auto">
					<a
						href="https://developer.nytimes.com/"
						target="_blank"
						className="md:pl-4 pl-16 hover:opacity-50 text-sm transition duration-300 ease-in-out"
					>
						Powered by NY Times API
					</a>
				</div>
				<div className="my-auto">
					<h4 className="md:pl-4 pr-16 text-sm opacity-75">
						© 2022, nextBook. For readers, by readers{" "}
					</h4>
				</div>
			</footer>
		</>
	);
};

export default Footer;
