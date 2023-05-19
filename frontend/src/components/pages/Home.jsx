import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../utils/context";
import ThankYouPopup from "../pages/Thank-you-subscribe";
//import BeneFirst from "../../assets/images/team-section-one-image.png";
//import BeneSecond from "../../assets/images/team-section-two-image.png";
//import BeneThird from "../../assets/images/team-section-three-image.png";
//import CustomerImage1 from "../../assets/images/review-image-1.png";
//import CustomerImage2 from "../../assets/images/review-image-2.png";
//import CustomerImage3 from "../../assets/images/review-image-3.png";
//import CustomerImage4 from "../../assets/images/review-image-1.png";
//import Comas from "../../assets/images/review-comas.png";
//import { Link } from "react-router-dom";
import { HomeContainer } from "../styles/Home";


function Home() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);
    

    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
    
        try {
            const response = await fetch("http://localhost:3000/api/newsletter", {
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

    return(
        <HomeContainer className="home">
            <div className="hero">
                <div className="hero__text">
                    <h1>The Ultimate To-Do List Application</h1>
                    <p className="subtitle">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    <div className="cta-row">
                        <form onSubmit={handleSubmit}>
                            <input type="email" id="email" name="email" placeholder="Email"/>
                            <input type="submit" value="Sign up"/>
                        </form>
                    </div>
                </div>
                <div className="hero__overlay"></div>
            </div>{/*
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