import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Company from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Feature from "../components/Feature-section/Feature";
import FreeCourse from "../components/Free-course/FreeCourse";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <Company />
            <AboutUs />
            <Courses />
            <ChooseUs />
            <Feature />
            <FreeCourse />
            <Testimonial />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}

export default Home;