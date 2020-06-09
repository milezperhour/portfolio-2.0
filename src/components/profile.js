import React from'react';
import '../css/profile.css';
import miles from '../images/miles.jpg'

const Profile = (props) => {
    const email = 'hyperbolvoid@gmail.com';
    

    return (
        <div className="profile">
            <h3>Based in Orange County, CA</h3>
            <h4>Merging the beauty of design and the efficiency of technology</h4>
            <div className="content">
                <div className="left-content">
                    <p><strong>Hello, I'm Miles</strong></p>
                    <p>I was first introduced to web development in college. After my peaked interest in the first class, I knew it was something that I wanted to continue to pursue.</p>
                    <p>Design and user experience played a significant role in my transition to web development. I believe that in a technologically growing world, design and technology need to complement each other in order to create soemthing truely special.</p>
                    <p>
                        E-mail: <a className="email" href={`mailto:${email}`}>{email}</a>
                    </p>
                </div>

                <div className="right-content">
                    <img src={miles} alt="Miles"/>
                </div>
            </div>
        </div>
    );
}

export default Profile;