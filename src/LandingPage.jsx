import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const Header = styled.header`
  background: #fff;
  padding: 20px 0;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 997;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    a {
      color: #413e66;
      text-decoration: none;
    }
  }

  nav {
    ul {
      list-style: none;
      display: flex;
      gap: 20px;
      padding: 0;
      margin: 0;

      li {
        a {
          color: #555;
          text-decoration: none;
          font-size: 16px;
          &:hover,
          &.active {
            color: #007bff;
          }
        }
        .dropdown ul {
          display: none;
          position: absolute;
          background: #fff;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
          padding: 10px 0;
          margin: 0;
          list-style: none;
          li {
            a {
              padding: 8px 20px;
              white-space: nowrap;
              display: block;
            }
          }
        }
        &:hover .dropdown ul {
          display: block;
        }
      }
    }
  }

  .header-social-links {
    display: flex;
    gap: 10px;

    a {
      color: #555;
      font-size: 18px;
      &:hover {
        color: #007bff;
      }
    }
  }

  .mobile-nav-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .mobile-nav-toggle {
      display: block;
    }
    nav ul {
      flex-direction: column;
      display: none;

      &.navbar-mobile {
        display: flex;
      }
    }
  }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;
  position: relative;
  padding: 0;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const CarouselContent = styled.div`
  text-align: center;
  color: #fff;
`;

const Container = styled.div`
  padding: 60px 0;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #413e66;
  text-align: center;
  font-weight: 700;
  margin-bottom: 30px;
`;

const IconBox = styled.div`
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;

  .icon {
    margin-bottom: 15px;
  }
`;

const KoraInsurTech = () => {
  const toggleMobileNav = () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('navbar-mobile');
  };

  return (
    <>
      <Header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">< Link to="index.html"><span>Kora</span></Link></h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>< Link to="index.html" className="active">Home</Link></li>
              <li>< Link to="register.html">Register</Link></li>
              <li><Link to ="/login">Login</Link></li>
              <li className="dropdown"><Link to="#"><span>About</span> <i className="bi bi-chevron-down"></i></Link>
                {/* <ul>
                  <li><a Link to="about.html">About Us</a></li>
                  <li><a Link to="team.html">Team</a></li>
                  <li><a Link to="testimonials.html">Testimonials</a></li>
                </ul> */}
              </li>
              <li>< Link to="services.html">Services</Link></li>
              <li><Link to="pricing.html">Pricing</Link></li>
              <li>< Link to="contact.html">Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}></i>
          </nav>
          <div className="header-social-links d-flex">
            <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
            <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
          </div>
        </div>
      </Header>

      <HeroSection id="hero">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <CarouselItem className="carousel-item active" style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}>
              <div className="carousel-container">
                <CarouselContent className="carousel-content animate__animated animate__fadeInUp">
                  <h2>Welcome to <span>Kora</span></h2>
                  <p>Kora Car Insurance brings you the best and affordable policies for your cars.</p>
                     {/* <div className="text-center"><a Link to="about.html" className="btn-get-started">Read More</a></div> */}
                </CarouselContent>
              </div>
            </CarouselItem>
          </div>
          <a className="carousel-control-prev" Link to="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" Link to="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
        </div>
      </HeroSection>

      <main id="main">
        <section id="about-us" className="about-us">
          <Container className="container" data-aos="fade-up">
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-right">
                <SectionTitle>About what we do</SectionTitle>
                <h3>We care about your safety.</h3>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                <p>Welcome to our car insurance service! We are dedicated to providing comprehensive and affordable car insurance solutions to meet your needs. Our mission is to offer reliable car insurance policies that protect you and your vehicle in the event of accidents, damages, or other unforeseen circumstances. We strive to provide peace of mind to our customers by delivering exceptional service and support.</p>
                <p>Drive with ease and peace of mind as we offer you and your car comprehensive protection underwritten by Sanlam General Insurance</p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Flexible premium rates and terms </li>
                  <li><i className="ri-check-double-line"></i> Full discount on Controller Technique fees at renewal </li>
                  <li><i className="ri-check-double-line"></i> Free cover for windscreen, theft of audio and video accessories </li>
                </ul>
                <p className="fst-italic">When buying a car, insurance is very important because it offers financial protection to the person and their property. We are with you every step of the way.</p>
              </div>
            </div>
          </Container>
        </section>

        <section id="services" className="services section-bg">
          <Container className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <IconBox className="icon-box iconbox-blue">
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4><a Link to="">Liability Insurance</a></h4>
                  <p>Basic coverage for damages and injuries you cause to others</p>
                </IconBox>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <IconBox className="icon-box iconbox-orange">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4><a Link to="">Collision Insurance</a></h4>
                  <p>Covers damages to your vehicle from accidents with other vehicles or objects</p>
                </IconBox>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <IconBox className="icon-box iconbox-pink">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4><a Link to="">Comprehensive Insurance</a></h4>
                  <p>Protection against non-collision events like theft, fire, and natural disasters</p>
                </IconBox>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <IconBox className="icon-box iconbox-yellow">
                  <div className="icon">
                    <i className="bx bx-layer"></i>
                  </div>
                  <h4><a Link to="">Personal Injury Protection</a></h4>
                  <p>Coverage for medical expenses and lost wages after an accident</p>
                </IconBox>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <IconBox className="icon-box iconbox-red">
                  <div className="icon">
                    <i className="bx bx-slideshow"></i>
                  </div>
                  <h4><a Link to="">Uninsured/Underinsured Motorist Coverage</a></h4>
                  <p>Protection against drivers with insufficient or no insurance</p>
                </IconBox>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <IconBox className="icon-box iconbox-teal">
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4><a Link to="">Roadside Assistance Insurance</a></h4>
                  <p>Coverage for services like towing, fuel delivery, and lockout assistance</p>
                </IconBox>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default KoraInsurTech;
