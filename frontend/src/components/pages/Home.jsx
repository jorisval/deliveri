import { useContext, useEffect, useState, useRef } from "react";
import { HeaderContext } from "../utils/context";
import ThankYouPopup from "../pages/Thank-you-subscribe";
import Service1 from "../../assets/images/service-image-1.png";
import Service2 from "../../assets/images/service-image-2.png";
import Service3 from "../../assets/images/service-image-3.png";
import TrackingSectionImage from "../../assets/images/image-track.png";
import SameDaySectionImage from "../../assets/images/what-section-image.png";
import CallFast from "../../assets/images/call-fast.png";
import CustomerImage1 from "../../assets/images/review-image-1.png";
import CustomerImage2 from "../../assets/images/review-image-2.png";
import CustomerImage3 from "../../assets/images/review-image-3.png";
import CustomerImage4 from "../../assets/images/review-image-4.png";
import PartnerImage1 from "../../assets/images/Partner-1.png";
import PartnerImage2 from "../../assets/images/Partner-2.png";
import PartnerImage3 from "../../assets/images/Partner-3.png";
import PartnerImage4 from "../../assets/images/Partner-4.png";
import PartnerImage5 from "../../assets/images/Partner-5.png";
import PartnerImage6 from "../../assets/images/Partner-6.png";
import PartnerImage7 from "../../assets/images/Partner-7.png";
import PartnerImage8 from "../../assets/images/Partner-8.png";
import { HomeContainer } from "../styles/Home";
import { Link } from "react-router-dom";


function Home() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const { setActivePage } = useContext(HeaderContext);
    const servicesData = [
        {
            title: "Find your delivery",
            content: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla",
            image: Service1,
        },
        {
            title: "Order with click",
            content: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla",
            image: Service2,
        },
        {
            title: "We are very fast",
            content: "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla",
            image: Service3,
        }
    ]

    const [activeReview, setActiveReview] = useState(0);
    const reviewRef = useRef();
    const reviewsData = [
        {
            name: "RONALD D. MORGAN",
            image: CustomerImage1,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        },
        {
            name: "JEAN D. CLAUDE",
            image: CustomerImage2,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        },
        {
            name: "ALEX TARGARIAN",
            image: CustomerImage3,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        },
        {
            name: "SAHAD DANARIAS",
            image: CustomerImage4,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        }
    ]
    
    const handleReviewScroll = (direction) => {
        if (direction === 'left') {
            reviewRef.current.scrollLeft -= reviewRef.current.offsetWidth;
            if (activeReview > 0) {
                setActiveReview(activeReview - 1);
            }
        } else {
            reviewRef.current.scrollLeft += reviewRef.current.offsetWidth;
            if   (activeReview < reviewsData.length - 1) {
                setActiveReview(activeReview + 1);
            }
        }
    };

    const handleReviewCircleClick = (index) => {
        setActiveReview(index);
        reviewRef.current.scrollLeft = index * reviewRef.current.offsetWidth;
    };



    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
    };

    return(
        <HomeContainer className="home">
            <div className="hero">
                <div className="hero__text">
                    <h1>We Have Faster Delivery Than Others</h1>
                    <ul className="subtitle">
                        <li><span className="bi bi-check2"></span> You can pay bill</li>
                        <li><span className="bi bi-check2"></span> Buy any items you want</li>
                        <li><span className="bi bi-check2"></span> You can deliver parcels to someone</li>
                    </ul>
                    <div className="cta-row">
                        <Link to="" className="cta-button">Discover our Services</Link>
                    </div>
                </div>
                <div className="hero__overlay"></div>
            </div>
            <div className="services-section">
                <div className="services-section__header">
                    <h2>What Is Our Services</h2>
                    <div className="separate-line"></div>
                    <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue</p>
                </div>
                <div className="services">
                    {servicesData.map((service, index) => {
                        return(
                            <div className="service" key={index}>
                                <img src={service.image} alt="" />
                                <h3>{service.title}</h3>
                                <p>{service.content}</p>
                            </div>
                        )
                    })}
                    <div className="services__background"></div>
                </div>
            </div>
            <div className="tracking-section">
                <div className="tracking-section__image">
                    <img src={TrackingSectionImage} alt="" />
                </div>
                <div className="tracking-section__text">
                    <h2>Track Your Shipment Through The Application, At Any Time !</h2>
                    <div className="separate-line"></div>
                    <p className="tracking">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue adipiscing elit duis tristique sollicitudin...</p>      
                    <Link to="" className="cta-button">More Details</Link>
                </div>
            </div>
            <div className="how-section">
                <div className="call-fast">
                    <img src={CallFast} alt="" />
                    <p>We are working 24/7, you can call us any time  <span className="number">+33 7 80 70 82 87</span></p>
                </div>
                <div className="how-section__text">
                    <h2>How it works ?</h2>
                    <div className="how-it-works">
                        <div className="how-it-works__first">
                            <div><span className="bi">01</span></div>
                            <div className="content">
                                <h4>Register first</h4>
                                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue</p>
                            </div>
                        </div>
                        <div className="how-it-works__second">
                            <div><span className="bi">02</span></div>
                            <div className="content">
                                <h4>Creat an account</h4>
                                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue</p>
                            </div>
                        </div>
                        <div className="how-it-works__third">
                            <div><span className="bi">03</span></div>
                            <div className="content">
                                <h4>Make payment</h4>
                                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="how-section__overlay"></div>
            </div>
            <div className="same-day-section">
                <div className="tracking-section__image">
                    <img src={SameDaySectionImage} alt="" />
                </div>
                <div className="same-day-section__text">
                    <h2>So What Exactly Is Same-Day Delivery ?</h2>
                    <div className="separate-line"></div>
                    <p className="same-day">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue adipiscing elit duis tristique sollicitudin...</p>      
                    <Link to="" className="cta-button">More Details</Link>
                </div>
            </div>
            <div className="payments-section">
                <div className="payments-section__header">
                    <h2>Choose your payment zone</h2>
                    <div className="separate-line"></div>
                    <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehiculacongue</p>
                </div>
                <div className="payments">
                    <div className="payment">
                        <h3>Downtown Area</h3>
                        <div className="price">
                            <span>$</span>
                            <span>38/</span>
                            <span>mo</span>
                        </div>
                        <div className="content">
                            <p>consectetur</p>
                            <p>cosollicitudin nibh sit</p>
                            <p>sectetur adipiscing</p>
                            <p>amet commodo nulla</p>
                        </div>
                        <Link to="" className="cta-button">Select</Link>
                    </div>
                    <div className="payment">
                        <h3>Near Suburbia</h3>
                        <div className="price">
                            <span>$</span>
                            <span>48/</span>
                            <span>mo</span>
                        </div>
                        <div className="content">
                            <p>consectetur</p>
                            <p>cosollicitudin nibh sit</p>
                            <p>sectetur adipiscing</p>
                            <p>amet commodo nulla</p>
                        </div>
                        <Link to="" className="cta-button">Select</Link>
                    </div>
                    <div className="payment">
                        <h3>Far Suburbia</h3>
                        <div className="price">
                            <span>$</span>
                            <span>58/</span>
                            <span>mo</span>
                        </div>
                        <div className="content">
                            <p>consectetur</p>
                            <p>cosollicitudin nibh sit</p>
                            <p>sectetur adipiscing</p>
                            <p>amet commodo nulla</p>
                        </div>
                        <Link to="" className="cta-button">Select</Link>
                    </div>
                    <div className="payments__background"></div>
                </div>
            </div>
            <div className="reviews-section">
                <div className="Customer-reviews" ref={reviewRef}>
                    <span className="bi bi-chevron-left" onClick={() => handleReviewScroll('left')}></span>
                    {reviewsData.map((review, index) => (
                        <div className={`Customer-review ${index === activeReview ? 'active' : ''}`} key={index}>
                            <img src={review.image} alt="" className="Customer-review__image"/>
                            <p>{review.comment}</p>
                            <div className="Customer-review__name">{review.name}</div>
                        </div>
                    ))}
                    <span className="bi bi-chevron-right" onClick={() => handleReviewScroll('right')}></span>
                </div>
                <div className="review-circles">
                    {reviewsData.map((_, index) => (
                        <div
                            className={`review-circle ${index === activeReview ? 'active' : ''}`}
                            onClick={() => handleReviewCircleClick(index)}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <div className="partners-section">
                <div className="partners-section__image"><img src={PartnerImage1} alt="" /></div>
                <div className="partners-section__image"><img src={PartnerImage2} alt="" /></div>
                <div className="partners-section__image"><img src={PartnerImage3} alt="" /></div>
                <div className="partners-section__image"><img src={PartnerImage4} alt="" /></div>
                <div className="partners-section__image"><img src={PartnerImage5} alt="" /></div>
                <div className="partners-section__image"><img src={PartnerImage6} alt="" /></div>
                <div className="partners-section__image"><img src={PartnerImage7} alt="" /></div>
                <div className="partners-section__image"><img src={PartnerImage8} alt="" /></div>
            </div>
            {showThankYouPopup && (<ThankYouPopup onClose={handleCloseThankYouPopup} />)}
        </HomeContainer>
    )
}

export default Home