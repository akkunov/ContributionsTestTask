import React from 'react';
import {Row} from "./Row.jsx";


const DaysName = {
    1: 'Mon',
    3: 'Wed',
    5: 'Fri',
}


const Month =  ({month}) => {
    return(
	<div className={`w-[15px] h-[15px] m-[2px]`}>{month}</div>
    )
}


export const Timeline = ({ months, weeks, contributions }) => {
    return (
	<div className="flex flex-col gap-1">
	    <div className={`flex flex-row ml-8 space-x-[70px]`}>
		{[...new Set(months)].map((month, index) => (
		    <div className={``} key={index}>
			{
			    <Month
				month={month}
			    />
			}
		    </div>
		))}
	    </div>
	    {weeks.map((_, weekIndex) => (
		<div className={`flex flex-row`}>
		    <div className={`font-mono text-sm font-normal w-8 block`}>
			{DaysName[weekIndex]}
		    </div>
		    <div>
			<Row
			    key={weekIndex}
			    weekIndex={weekIndex}
			    contributions={contributions.filter((data, index) => data.date.day() % 7 === weekIndex)}
			/>
		    </div>

		</div>

	    ))}
	</div>
    );
};

