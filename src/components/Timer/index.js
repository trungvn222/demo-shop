import React, { PureComponent } from 'react';
import './style.css';

class Timer extends PureComponent {
    state = {
        d: 0,
        h: 0,
        m: 0,
        s: 0
    }
    
    componentDidMount(){
        const {distance =  3} = this.props;
        var date = new Date();
	    date.setDate(date.getDate() + distance);
        this.target_date = date.getTime();

        this.interval = setInterval(() => {
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (this.target_date - current_date) / 1000;

            // do some time calculations
            const days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            const hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            const minutes = parseInt(seconds_left / 60);
            const seconds = parseInt(seconds_left % 60);

            // display result
            this.setState({
                d: days,
                h: hours,
                m: hours,
                s: seconds
            })
            

        }, 1000);
    }
    componentWillMount(){
        clearInterval(this.interval);
    }
    render() {
        const {d,h,m,s} = this.state;
        return (
            <ul className="timer">
                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="day" className="timer_num">{d}</div>
                    <div className="timer_unit">Day</div>
                </li>
                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="hour" className="timer_num">{h}</div>
                    <div className="timer_unit">Hours</div>
                </li>
                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="minute" className="timer_num">{m}</div>
                    <div className="timer_unit">Mins</div>
                </li>
                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="second" className="timer_num">{s}</div>
                    <div className="timer_unit">Sec</div>
                </li>
            </ul>

        );
    }
}

export default Timer;