import { useState } from "react";
import CallFast from "../../assets/images/call-fast.png";
import PlayStore from "../../assets/images/google-play.png";
import GoogleMap from "../../assets/images/google-map.png";
import ThankYouPopup from "../pages/Thank-you-newsletter";
import { Link } from "react-router-dom";
import { BASE_URL } from '../../config';

function Footer() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
    
        try {
            const response = await fetch(`${BASE_URL}/api/newsletter`, {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });
      
            const data = await response.json();
            console.log(data);

            // Reset the form
            event.target.reset();

            // Show thank you popup
            setShowThankYouPopup(true);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
      };

    return (
        <>
            <div className="footer-newsletter">
                <h3>Join To Our Newsletter</h3>
                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                    <input type="submit" value="SUBSCRIBE"/>
                </form>
            </div>
            <div className="footer">
                {showThankYouPopup && (
                    <ThankYouPopup onClose={handleCloseThankYouPopup} />
                )}
                <div className="footer__part-1">
                    <div>
                        <h2>Follow Your Shipment Via GPS</h2>
                        <div className="separate"></div>
                        <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue adipiscing elit duis tristique sollicitudin...</p>
                        <Link to="">
                            <img src={PlayStore} alt="" />
                        </Link>
                    </div>
                    <img src={GoogleMap} alt="" />
                </div>
                <div className="footer__part-2">
                    <div className="contacts">
                        <img src={CallFast} alt=""/>
                        <p>Call us at any time :  </p>
                        <span>+33 7 80 70 82 87</span>
                        <ul>
                            <li><a href="#b"><i className="bi bi-facebook"></i></a></li>
                            <li><a href="#b"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="#b"><i className="bi bi-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__part-3">
                    <p>© 2023 DELIVERI | All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;