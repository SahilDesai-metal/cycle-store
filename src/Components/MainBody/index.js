import './index.css';
import logo from './../../logo.svg';
import { ImageCarousel } from './../ImageCarousel/index';
const arrayRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const ImgComponent = (props) => {
    return (
        <img
            src={logo}
            alt="description of the"
        />
    );
}

const MainBody = (props) => {
    return (
        <>
            <div>
                <ImageCarousel />
                <div className="App">
                    <h1>This is body tag</h1>
                </div>
                <div>
                    <div className="container">
                        {arrayRange.map(ele => (
                            <div key={ele} className="card">
                                <div className="img-container">
                                    <img
                                        src={logo}
                                        alt="description of the"
                                    />
                                </div>
                                <p>description of the image</p>

                                <span>Ratings of the image</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export {
    MainBody
}