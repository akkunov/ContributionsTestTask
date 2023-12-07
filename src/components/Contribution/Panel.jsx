export const Panel = ({currentYear, nextYear, prevYear}) => {

    return (
	<div className={`flex flex-row space-x-6 mt-8 ml-4`}>
	    <div className={`w-8 h-8 border-2 items-center justify-start flex scale-150`}
	    	onClick={() => prevYear()}
	    >
		&#8249;
	    </div>
	    <div className={`w-8 h-8 border-2 items-center justify-end flex scale-150`}
		 onClick={() => nextYear()}
	    >
		&#8250;
	    </div>
	    <span className={`font-mono`}>{currentYear}</span>
	</div>

    )
}