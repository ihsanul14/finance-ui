import './styles.css'

const Chart = () =>{
    const data = [
        {month: 'Oct', max: 60, min:50},
        {month: 'Nov', max: 38, min:28},
        {month: 'Dec', max: 38, min:20},
        {month: 'Jan', max: 30, min:18},
        {month: 'Feb', max: 24, min:10},
    ]

    const getHeight = (v:number) => {
        return `${100 * (v/60)}%`
    }

    return (
        <>
        <div className='chart'>
            <div className='chart-content'>
                <div className='chart-content-filter'>Filter</div>
                <div className='chart-content-detail'>
                    <div className='chart-content-y-axis'>
                        <div className='chart-content-y-axis-item'>$60</div>
                        <div className='chart-content-y-axis-item'>$40</div>
                        <div className='chart-content-y-axis-item'>$20</div>
                        <div className='chart-content-y-axis-item'>$0</div>
                    </div>
                    <div className='chart-content-data'>
                        <div className='chart-content-data-detail'>
                            {data.map((x) => (
                            <>
                            <div className='chart-content-data-detail-item'>
                                <div className='chart-content-data-bar'>
                                    <div className='chart-content-data-left' style={{height: getHeight(x.max)}}/>
                                    <div className='chart-content-data-right' style={{height: getHeight(x.min)}}/>
                                </div>
                                <div className='chart-content-data-legend'>{x.month}</div>
                            </div>
                            </>
                            ))}
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        </>
    )
}

export default Chart