import React from 'react';
import '../css/experience.css';

const Experience = () => {
    // const testRef = useRef();
    // useEffect(() => {
    //     const heightFromTop = testRef.current.offsetTop;
    // });

    return (
        <div className="experience">
            <div className="inner-experience">
                <div className="jobs">
                    <h3>Experience</h3>
                    <div className="item">
                        <h4>Codazen</h4>
                        <span>Web Developer</span>
                        <span>2019 - present</span>
                    </div>
                    <div className="item">
                        <h4>Neudesic</h4>
                        <span>Web Developer</span>
                        <span>2019</span>
                    </div>
                    <div className="item">
                        <h4>Pixel Motion</h4>
                        <span>Web Developer</span>
                        <span>2017 - 2019</span>
                    </div>
                </div>
                <div className="education">
                    <h3>Education</h3>
                    <div className="item">
                        <h4>LearningFuze</h4>
                        <span>Web Development</span>
                        <span>2016 - 2017</span>
                    </div>
                    <div className="item">
                        <h4>Humboldt State University</h4>
                        <span>Bachelor of Fine Arts | Minor in Art Histroy</span>
                        <span>2011 - 2016</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;