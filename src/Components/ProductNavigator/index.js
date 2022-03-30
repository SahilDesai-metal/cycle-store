import './index.css';
import logo from './../../logo.svg';
import { useCallback, useState } from 'react';

const listOfSideBarTabs = [
    { 'Gears': [10, 12, 14, 16, 18] },
    { 'Gears1': [10, 12, 14, 16, 18] }
];

export const CycleNavigatorPage = () => {
    const [navigatorState, setNavigatorState] = useState(new Set());

    const navToggleHandler = useCallback((navKey) => {
        setNavigatorState((prevState) => {
            var newState = new Set(prevState);
            if (newState.has(navKey)) {
                newState.delete(navKey);
            } else {
                newState.add(navKey);
            }
            return newState;
        });
    }, []);

    return (
        <div className="NavigatorPageContainer">
            <div className="FilterPane">
                <div className="FilterContainer">
                    {listOfSideBarTabs.map((navObj) => (
                        Object.keys(navObj).map((navObjKey) => (
                            <div key={navObjKey} className="FilterRow">

                                <NavigationFilterHeader
                                    toggleHandler={navToggleHandler}
                                    navKey={navObjKey}
                                >
                                    {navObjKey}
                                </NavigationFilterHeader>

                                {
                                    navigatorState.has(navObjKey)
                                    &&
                                    <NavigationFilterChild>
                                        {navObj[navObjKey].map((checkboxValue) => (
                                            <NavigationFilterChildValue
                                                key={navObjKey + checkboxValue}
                                                textValue={checkboxValue}
                                            />
                                        ))}
                                    </NavigationFilterChild>
                                }
                            </div>
                        ))
                    ))}
                </div>
            </div>
            <div className="Separator"></div>
            <div className="LandingPane">
                <div className="LandingPaneContainer">
                    <div className="ProductRow">
                        <img
                            src={logo}
                            className="ProductLandingImage"
                            alt="Product" />
                        <div className="ProductDetail">
                            <span className="ProductType">MTB</span>
                            <span className="ProductName">ABCD 27R 678</span>
                            <span className="ProductPrice">Rs. 10,000 </span>
                        </div>
                    </div>
                    <div className="ProductRow">
                        <img
                            src={logo}
                            className="ProductLandingImage"
                            alt="Product" />
                        <div className="ProductDetail">
                            <span className="ProductType">MTB</span>
                            <span className="ProductName">ABCD 27R 678</span>
                            <span className="ProductPrice">Rs. 10,000 </span>
                        </div>
                    </div>
                    <div className="ProductRow">
                        <img
                            src={logo}
                            className="ProductLandingImage"
                            alt="Product" />
                        <div className="ProductDetail">
                            <span className="ProductType">MTB</span>
                            <span className="ProductName">ABCD 27R 678</span>
                            <span className="ProductPrice">Rs. 10,000 </span>
                        </div>
                    </div>
                    <div className="ProductRow">
                        <img
                            src={logo}
                            className="ProductLandingImage"
                            alt="Product" />
                        <div className="ProductDetail">
                            <span className="ProductType">MTB</span>
                            <span className="ProductName">ABCD 27R 678</span>
                            <span className="ProductPrice">Rs. 10,000 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

const NavigationFilterHeader = ({ toggleHandler, navKey, children }) => (
    <h1 onClick={() => toggleHandler(navKey)}
        onDoubleClick={(event) => event.preventDefault()}>
        {children}
    </h1>
);

const NavigationFilterChild = ({ children }) => {
    return (
        <ul className="CheckBox">
            {children}
        </ul>
    )
}

const NavigationFilterChildValue = ({ textValue }) =>
    <li>
        <input
            type="checkbox"
            className="CheckBox"
            value={textValue} />
        <label>{textValue}</label>
    </li>