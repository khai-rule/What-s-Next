import "tw-elements";
import { useState } from "react";

const LoadingFailed = () => {
	const [state, setState] = useState(true);

	const handleClick = () => {
		setState(false);
	};

	const failed = () => {
		if (state === true) {
			return (
				<div
					data-aos="fade-up"
					data-aos-duration="600"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
					className="fixed inset-0 z-1 bg-pale-yellow bg-opacity-75 flex flex-col justify-center items-center z-50 text-center"
				>
					<h2>Oops ... Network Error.</h2>
					<div className="flex">
						<button
							onClick={() => location.reload()}
							className="text-lg hover:opacity-50 transition duration-300 ease-in-out px-2"
						>
							Try Again?
						</button>
						<button
							onClick={() => handleClick()}
							className="text-lg hover:opacity-50 transition duration-300 ease-in-out px-2"
						>
							Dismiss
						</button>
					</div>
				</div>
			);
		} else {
			return;
		}
	};

	return <>{failed()}</>;
};

export default LoadingFailed;
