import { useEffect, useState } from 'react';
import { Footer } from '../PageFooter/index';
import { Accordion } from '../Accordion/index';
import logo from './../../assets/images/1.jpg';
import './index.css';

export const ProductDetail = () => {
    return (
        <>
            <div className="ProductDetailsSection">
                <ProductHeader />
                <ProductsFeaturesSection />
                <FloatingComparisonButton />
            </div>
            <CompleteYourExperienceSection />
            <Footer />
        </>
    );
}

const ProductsFeaturesSection = () => {
    const [openCloseToggler, setOpenCloseToggler] = useState(0);
    const OpenCloseToggle = () => setOpenCloseToggler(prevState => 1 - prevState);
    const styledClass = openCloseToggler ? "FeatureContainer" : "ClosedFeatureContainer";

    return (
        <div className="FeatureSectionContainer">
            <h2>SPECIFICATION</h2>
            <div className={styledClass}>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
                <div className="Feature">
                    <img src={logo} alt="product specification" />
                    <h3>image header</h3>
                </div>
            </div>

            <div className="FeatureSectionToggler">
                <button onClick={OpenCloseToggle}>{openCloseToggler ? '^' : 'V'}</button>
            </div>

        </div>
    );
}

const ProductHeader = () => {
    return (
        <div className="ProductHeader">
            <div className="ProductImage">
                <div className="ProductPic" ><img src={logo} alt="main product" /></div>
                <div className="ProductPrice">
                    <span className="price">
                        PRICE: Rs. 1000
                    </span>
                    <span className="compare">
                        Compare
                    </span>
                </div>
            </div>
            <ProductBrief />
        </div>
    );
}

const ProductBrief = () => {
    const items = [
        { id: 'hello', title: 'Hello', content: <p>hello</p> },
        { id: 'world', title: 'World', content: <p>world</p> }
    ];

    return (
        <div className="ProductDetailSummary">
            <div className="ProductBriefHeader">
                ABCD 27R 678
            </div>
            <div className="ProductDetailsRow">
                <Accordion items={items} />
            </div>
        </div>
    );
};

const CompleteYourExperienceSection = () => {
    return (
        <div className="CompleteYourExperienceSection">
            <h1>
                Complete Your Experience
            </h1>
            <div className="CompleteExperienceContainer">
                <div className="ProductCard">
                    <img
                        src={logo}
                        alt="Complete Experience"
                        className="CEProductImage" />
                    <h4 className="CEProductName">BICYCLE HELMET</h4>
                </div>
                <div className="ProductCard">
                    <img
                        src={logo}
                        alt="Complete Experience"
                        className="CEProductImage" />
                    <h4 className="CEProductName">BICYCLE HELMET</h4>
                </div>
                <div className="ProductCard">
                    <img
                        src={logo}
                        alt="Complete Experience"
                        className="CEProductImage" />
                    <h4 className="CEProductName">BICYCLE HELMET</h4>
                </div>
            </div>
            <button className="AccessoriesLoadButton"> Load More Accessories</button>
        </div>
    );
}

const FloatingComparisonButton = () => {
    const [buttonStyle, setButtonStyle] = useState("FloatingButton");

    useEffect(() => {
        const scrollHandler = () => {
            if (window.pageYOffset > 200) setButtonStyle("FloatingButton collapsed");
            else setButtonStyle("FloatingButton");
        }
        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    })

    return (
        <>
            <div className="FloatingComp">
                <div className="FloatingContainer">
                    <button className={buttonStyle}>
                        Compare
                    </button>
                </div>
            </div>
        </>
    );
}