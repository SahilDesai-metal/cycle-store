import './index.css';
import logo from './../../assets/images/1.jpg';

export const Compare = () => {
    return (
        <div className="ComparisonContainer">
            <div className="CycleInfoContainer">
                <img
                    alt="left side product"
                    src={logo}
                    className="cycle-img"
                />
                <hr />
                <h2 className="cycle-name">ABCD 27R 678</h2>
                <hr />
                <div className="cycle-description">
                    The All-Terrain Bike series is designed to give you versatile riding experience with the best of features. Focused on a great performance, the bikes in this range like Hero Sprint Pro are fitted with reliable Shimano drivetrains and front suspension forks on an aerodynamic frame as well.
                </div>
                <hr />
                <div className="cycle-specification">
                    <h3>SPECIFICATION</h3>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                </div>
            </div>
            <div className="CycleInfoContainer">
                <img
                    alt="right side product"
                    src={logo}
                    className="cycle-img"
                />
                <hr />
                <h2 className="cycle-name">ABCD 27R 678</h2>
                <hr />
                <div className="cycle-description">
                    The All-Terrain Bike series is designed to give you versatile riding experience with the best of features. Focused on a great performance, the bikes in this range like Hero Sprint Pro are fitted with reliable Shimano drivetrains and front suspension forks on an aerodynamic frame as well.
                </div>
                <hr />
                <div className="cycle-specification">
                    <h3>SPECIFICATION</h3>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                    <div className="specification-row">
                        <span className="specification-key">
                            TyreSize
                        </span>
                        <span className="specification-value">
                            27 inch
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}