import React, {useState} from "react";
const ContributionInfo = (props) => {

    const {date , contributions } = props
    return (
	<>
	    <div className={`bg-black w-[150px] h-[42] text-white flex 
			    flex-col justify-center items-center p-2 rounded-[3px] shadow-2xl
			    `}>
		<span className={`text-white text-xs font-semibold font-inter`}>{contributions}</span>
		{/*<span className={`text-zinc-500 font-normal`}></span>*/}
		<span className={`text-zinc-400 font-inter text-[10px] font-medium`}>{date.format('dddd, MMMM D,YYYY ')}</span>
	    </div>
	</>
    )
}


export const Cell = ({ count, weekIndex}) => {
    const [contributionShow, setContributionShow] = useState(false)

    function mouseLeave () {
	setTimeout(() => {
	    setContributionShow(false)
	},500)
    }
    function CheckContribution () {
	if(count.contributions != 0){
	    setContributionShow(true)
	} else {
	    setContributionShow(false)
	}
    }
    return (


	<div
	    onClick={() => CheckContribution()}
	    onMouseLeave={() => mouseLeave()}
	    className={`w-[15px] h-[15px] rounded-sm m-[2px]
	    		relative transition-all duration-300
	    		hover:border-2 hover:border-zinc-500
	    		${contributionShow ? `border-2 border-zinc-500` : ''}
		    ${count.contributions > 1  && count.contributions < 9 ? `bg-[#ACD5F2]`
		    : count.contributions > 9  && count.contributions < 19 ? `bg-[#7FA8C9]`
			:  count.contributions > 19  && count.contributions < 29 ? `bg-[#527BA0]`
			    :  count.contributions > 29 ? `bg-[#254E77]`
				: `bg-gray-100` }
	    `}
	>
	    {contributionShow ? (
		<div
		    className={`absolute z-10 ${weekIndex ==0 ? `top-4`: `bottom-4`}  
			flex items-center justify-center`}>
		    <ContributionInfo {...count} />
		</div>

	    ) : ''

	    }
	</div>

    );
};
