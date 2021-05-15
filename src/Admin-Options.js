import {React,Fragment, Component} from 'react'
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import First from "./Home"
import Cards from "./Cards";
import {Link} from 'react-router-dom';
import "./css/style.css"



class Record_View extends Component {

    render(){
        return (
            <Fragment>
            
            <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">View Record for ID variable / name</h2>
                            
                            <div class="form-group form-button">
                                <input name="signup" id="signup"  href="/signup" value="New Admin Signup"/>
                            </div>
                            
                            <div class="form-group form-button">
                                <input name="records" id="records"  href="/records" value="Search Around Get Records"/>
                            </div>
                            
                            <div class="form-group form-button">
                                <input name="third" id="third"  href="/third" value="Third Function"/>
                            </div>
                    </div>
                    <div class="signup-image">
                        <figure><img src={sign_up} alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link">Sign in from Admin Account</a>
                    </div>
                </div>
            </div>
        </section>

            
            </Fragment>
        )
    }
}

export default Record_View