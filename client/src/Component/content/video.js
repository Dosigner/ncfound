import React, {Component} from 'react'
import '../../css/making.css';

class making extends Component{
    render(){
        return(
            <>
                <div className="empty">
                </div>
                <div className="main-content">
                    <h3>영상</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SFO2-djspig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/A6MQvutftzk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </>
        )
    }
}
export default making;