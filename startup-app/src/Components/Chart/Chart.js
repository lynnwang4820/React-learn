import './Chart.css';
import ChartBar from './ChartBar';

function Chart (props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); 

    const chartBarList = props.dataPoints.map(data =>{
        return <ChartBar 
                key = {data.label}
                value = {data.value}
                maxValue = {totalMaximum}
                label = {data.label}/>
    })
    return(
        <div className='chart'>
            {chartBarList}
        </div>
    )
}

export default Chart;