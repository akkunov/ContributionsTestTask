import moment from "moment/moment.js";
import React from "react";
import {Timeline} from "./TimeLine.jsx";
import {Panel} from "./Panel.jsx";

const ContributionChart = ({ data }) => {
    moment.updateLocale('ru', {week: {dow: 0}})
    const [currentDate, setCurrentDate] = React.useState(moment())
    const currentYear = currentDate.year();
    const firstDayOfYear = moment(`${currentYear}-01-01`);
    const lastDayOfYear = moment(`${currentYear}-12-31`);
    const daysOfYear = [];

    // Генерация случайных данных для вкладов
    while (firstDayOfYear.isSameOrBefore(lastDayOfYear)) {
	const currentDate = firstDayOfYear.format('YYYY-MM-DD');
	const contributions = data[currentDate] !== undefined ? data[currentDate]: 0
	daysOfYear.push({
	    date: firstDayOfYear.clone(),
	    contributions: contributions,
	});
	firstDayOfYear.add(1, 'day');
    }

    // Группировка по неделям и месяцам
    const weeks = Array.from(new Array(7));
    const months = Array.from( {length: Math.floor(daysOfYear.length / 7)},
	(_, index) => moment().month(index).format('MMM'));

    const prevYear = () => setCurrentDate((prevState) =>   prevState.clone().subtract(1, 'year'))
    const getCurrentYear = () => setCurrentDate(moment())
    const nextYear = () => setCurrentDate((prevState) =>   prevState.clone().add(1, 'year'))

    return (
	<div className={`flex flex-row`}>

	    <Timeline weeks={weeks} months={months} contributions={daysOfYear} />
	    <Panel
		prevYear={prevYear}
		getCurrentYear={getCurrentYear}
		nextYear={nextYear}
		currentYear={currentYear}
	    />
	</div>
    );
};

export default ContributionChart;