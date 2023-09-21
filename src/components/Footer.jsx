import { Component } from 'react';
import { Link } from 'react-router-dom';
//The Footer class is defined as a default export, 
//meaning it can be imported and used in other parts of your application.
export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.selectcategory = this.selectcategory.bind(this);
    }

    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }
    // the purpose of the selectcategory method is to store the selected category's ID and name in the browser's 
    // localStorage and then navigate the user to the '/product-category' route using React Router

    render() {
        return (
            <div style={{ backgroundColor: "black", marginBottom: "0px" }}>
                <div className="row">
                    <div className="col">
                        <table style={{ marginLeft: "16px" }}>
                            <tr>
                                <td><a href="/aboutus" className="nav-link">
                                    <h6 className="nameColor">About Us</h6>
                                </a>
                                </td>
                                <td>
                                    <a href="/contactus" className="nav-link">
                                        <h6 className="nameColor">Contact Us</h6>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/termsnconditions" className="nav-link">
                                        <h6 className="nameColor">Terms & Conditions</h6>
                                    </a>
                                </td>
                                <td>
                                    <a href="/privacypolicy" className="nav-link">
                                        <h6 className="nameColor">Privacy Policy</h6>
                                    </a>
                                </td>
                            </tr>

                            <tr>

                                <td>
                                    <a href="/faqs" className="nav-link">
                                        <h6 className="nameColor">FAQs</h6>
                                    </a>
                                </td>

                            </tr>
                        </table>
                    </div>

                    <div style={{ color: "white", marginTop: "30px" }} className="col">
                        <div className="float-end">
                            <div className="nameColor">
                                <h4>Download App</h4>
                                <a
                                    style={{ marginRight: "16px" }}>
                                    <img
                                        src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                                        alt="Download GreenMart App for Android from Play Store"
                                    />
                                </a>
                                <a><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                                    alt="Download GreenMart App for iOs from App Store" /></a>
                            </div>{' '}
                            <div>© By Indian Railway 2023, CDAC Project, INDIA</div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}