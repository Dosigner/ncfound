import React, {Component} from 'react'
import {Route} from "react-router-dom"
import makeRouter from './content/making'
import makeRouter1 from './content/making2'
//import makeRouter2 from './content/making3'
//import makeRouter3 from './content/making4'



import drawRouter from './content/drawing'

import videoRouter from './content/video'
import letterRouter from './content/letter'
import musicRouter from './content/music'
import etcRouter from './content/etc'
import '../css/app.css'
import Footer from './Footer/footer'
import HeaderAdmin from  './Header/HeaderAdmin'


class App extends Component {
    render(){
        return (
            <div className="App">
                <HeaderAdmin/>
                <Route exact path='/' component={makeRouter}/>
                <Route exact path='/2' component={makeRouter1}/>

                <Route exact path='/draw/' component={drawRouter}/>                
                <Route exact path='/video' component={videoRouter}/>
                <Route exact path='/letter' component={letterRouter}/>
                <Route exact path='/music' component={musicRouter}/>
                <Route exact path='/etc' component={etcRouter}/>

                <Footer/>
            </div>
        );
    }
}/*
<Route exact path='/' component={makeRouter}/>
                    <Route exact path='/draw' component={drawRouter}/>
                    <Route exact path='/music' component={musicRouter}/>
                    <Route exact path='/letter' component={letterRouter}/>
                    <Route exact path='/video' component={videoRouter}/>
                    <Route exact path='/etc' component={etcRouter}/>*/
export default App;