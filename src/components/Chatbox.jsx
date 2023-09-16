import React from "react";
import { useState } from "react";

function Chatbox() {

    const [input, setInput] = useState(undefined)
    const [loading, setLoading] = useState(false)
    console.log(input);

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input);
    }

	return (
		<div className="fixed h-screen w-screen inset-0 z-50 bg-fgreen md:overflow-auto">
			<form onSubmit={handleSubmit}>
				<label className="">
					Enter your name:
					<input type="text" onChange={e => setInput(e.target.value)}/>
				</label>
				<button className="text-white">Go</button>
				<div className="text-white">
					Dubai is a desert city and has a warm and sunny climate throughout
				</div>
			</form>
		</div>
	);
}

export default Chatbox;
