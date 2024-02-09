import GaugeIcon from '../../../assets/main/gauge.png'
import './styles.css'

const Analytics = () => {
  return (
    <>
    <div className='analytics'>
        <div className='analytics-content'>
          <div className='analytics-content-header'>
            <div className='analytics-content-title'>Analytics</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height="16">
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
              </svg>
            </div>
          </div>
          <div className='analytics-content-data'>
            <div className='analytics-content-chart'>
              <div className="analytics-base-chart">
                <div className="analytics-base-chart-center">
                  <div className="analytics-base-chart-center-text">90%</div>
                  <div className="analytics-base-chart-center-text-secondary">Done</div>
                </div>
              </div>
            </div>
            <div className='analytics-content-chart-legend'>
              <div className='analytics-content-chart-legend-item'>
                <div className='analytics-content-chart-legend-item-bullet' style={{background:'blue'}}></div>
                <div>Done</div>
              </div>
              <div className='analytics-content-chart-legend-item'>
              <div className='analytics-content-chart-legend-item-bullet' style={{background:'orange'}}></div>
                <div>In progress</div>
              </div>
              <div className='analytics-content-chart-legend-item'>
              <div className='analytics-content-chart-legend-item-bullet' style={{background:'red'}}></div>
                <div>To do</div>
              </div>
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default Analytics;