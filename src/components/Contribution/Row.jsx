import React from "react";
import {Cell} from "./Cell.jsx";

export const Row = ({ contributions,weekIndex }) => {
    return (
	<div className="flex flex-row">
	    {contributions.map((contribution, index) => (
		<Cell key={index} count={contribution}
		      weekIndex={weekIndex}
		/>
	    ))}
	</div>
    );
};
