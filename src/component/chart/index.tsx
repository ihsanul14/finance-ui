import { useState } from 'react'
import './styles.css'

const Chart = () =>{
    const [data,setData] = useState([
        {id:1, month: 'Oct', max: 60, min:50},
        {id:2, month: 'Nov', max: 38, min:28},
        {id:3, month: 'Dec', max: 38, min:20},
        {id:4, month: 'Jan', max: 30, min:18},
        {id:5, month: 'Feb', max: 24, min:10},
    ])

    const [isClicked, setIsClicked] = useState(false)

    const getHeight = (v:number) => {
        return `${100 * (v/60)}%`
    }

    const handleFilter =()=>{
        setIsClicked(!isClicked)
    }

    const handleFilterOption =(v:number)=>{
        if (v===1){
            setData([...data].sort((a,b) => a.id - b.id))
        }else{
            setData([...data].sort((a,b) => b.id - a.id))
        }
    }

    return (
        <>
        <div className='chart'>
            <div className='chart-content'>
                <div className='chart-content-filter-container'>
                    <div className='chart-content-filter-box' onClick={handleFilter}>
                        <div className='chart-content-filter'>
                            Filter
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M14.5979 6.91248L10.7729 10.7291L6.94795 6.91248L5.77295 8.08748L10.7729 13.0875L15.7729 8.08748L14.5979 6.91248Z" fill="#4F4F4F"/>
                            </svg>
                        </div>
                    </div>
                    {isClicked && 
                            <div className='chart-dropdown-filter'>
                                <div className='chart-dropdown-filter-item' onClick={()=>handleFilterOption(0)}>Newest</div>
                                <div className='chart-dropdown-filter-item' onClick={()=>handleFilterOption(1)}>Oldest</div>
                            </div>
                        }
                </div>
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