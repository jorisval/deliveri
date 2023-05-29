import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../utils/context";
import ThankYouPopup from "../pages/Thank-you-subscribe";
import Service1 from "../../assets/images/service-image-1.png";
import Service2 from "../../assets/images/service-image-2.png";
import Service3 from "../../assets/images/service-image-3.png";
import TrackingSectionImage from "../../assets/images/image-track.png";
import SameDaySectionImage from "../../assets/images/what-section-image.png";
import CallFast from "../../assets/images/call-fast.png";
//import BeneSecond from "../../assets/images/team-section-two-image.png";
//import BeneThird from "../../assets/images/team-section-three-image.png";
//import CustomerImage1 from "../../assets/images/review-image-1.png";
//import CustomerImage2 from "../../assets/images/review-image-2.png";
//import CustomerImage3 from "../../assets/images/review-image-3.png";
//import CustomerImage4 from "../../assets/images/review-image-1.png";
//import Comas from "../../assets/images/review-comas.png";
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
            {/*
            <div className="steps-section">
                <h2>Plan, Organize, and Execute Your Projects.</h2>
                <div className="steps">
                    <div className="step">
                        <div className="order">1</div>
                        <p>Brainstorm in Mind Maps</p>
                    </div>
                    <div className="step">
                        <div className="order">2</div>
                        <p>Manage in Project Boards</p>
                    </div>
                    <div className="step">
                        <div className="order">3</div>
                        <p>Organize in To-Do Lists</p>
                    </div>
                </div>
            </div>
            <div className="benefits-one">
                <div className="benefits-one__image">
                    <img src={BeneFirst} alt=""/>
                </div>
                <div className="benefits-one__text">
                    <h2>Organize & Manage Tasks & To-Do Lists</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <Link to="/blog">Learn more <span className="bi bi-arrow-right"></span></Link>
                </div>
            </div>
            <div className="benefits-two">
                <div className="benefits-two__image">
                    <img src={BeneSecond} alt=""/>
                </div>
                <div className="benefits-two__text">
                    <h2>Share Tasks Online</h2>
                    <p>Share your to-do lists, mind maps, and projects online for free with your teammates, and collaborate together in real-time, across any device. Communicate with your team via built-in free and unlimited chat and video conferencing on every single project.</p>
                    <Link to="/blog">Learn more <span className="bi bi-arrow-right"></span></Link>
                </div>
            </div>
            <div className="benefits-three">
                <div className="benefits-three__image">
                    <img src={BeneThird} alt=""/>
                </div>
                <div className="benefits-three__text">
                    <h2>Manage Team Tasks</h2>
                    <p>Plan, organize, and prioritize upcoming tasks in the team roadmap. Taskade lets you automate your workflows and get work done.</p>
                    <Link to="/blog">Learn more <span className="bi bi-arrow-right"></span></Link>
                </div>
            </div>
            <div className="cta-section" id="cta-section">
                <h2>Get Work Done. Faster + Smarter.</h2>
                <div className="cta-row">
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="submit" value="Sign up"/>
                    </form>
                </div>
            </div>
            <div className="testimonials-section">
                <h2>What the people say about us</h2>
                <div className="testimonials" ref={testimonialRef}>
                    {testimonialsData.map((testimonial, index) => {
                        return(
                            <div className={`testimonial ${index === activeTestimonial ? 'active' : ''}`} key={index} ref={testimonialsRefs[index]}>
                                <div className="testimonial__header">
                                    <div className="customer-info">
                                        <img src={testimonial.image} alt="" />
                                        <div>
                                            <p className="customer-name">{testimonial.name}</p>
                                            <p className="customer-company">{testimonial.company}</p>
                                        </div>
                                    </div>
                                    <div className="coma">
                                        <img src={Comas} alt="" />
                                    </div>
                                </div>
                                <div className="testimonial__body">{testimonial.comment}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="testimonial-directions">
                    <span className="bi bi-chevron-left" onClick={() => handleTestimonialScroll('left')}></span>
                    <div className="testimonial-circles">
                        {testimonialsData.map((_, index) => (
                            <div
                                className={`bi ${index === activeTestimonial ? 'bi-record-circle' : 'bi-circle'}`}
                                onClick={() => handleTestimonialCircleClick(index)}
                                key={index}
                            />
                        ))}
                    </div>
                    <span className="bi bi-chevron-right" onClick={() => handleTestimonialScroll('right')}></span>
                </div>
            </div>*/}
                        {showThankYouPopup && (<ThankYouPopup onClose={handleCloseThankYouPopup} />)}
        </HomeContainer>
    )
}

export default Home