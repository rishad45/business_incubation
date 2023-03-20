import React from "react"
import './HomePoster.css'
class HomePoster extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row contain">
                    <div className="text col-6">
                        <div className='textDiv'>
                            <p className="h1 textContent">
                                <span className="find">Find New Opportunities.</span><br />
                                <span className="find">Build Great Ventures.</span><br />
                                <span className="find">Grow Exponentially.</span>
                            </p>
                        </div>
                    </div>
                    <div className="image col-6">
                        <img className="img" src="https://highlinebeta.com/wp-content/uploads/2022/05/highline-beta-main-scaled-white.jpg"></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePoster 