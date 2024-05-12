import React, { useState } from 'react';
import './User.css'

const User = (props) => {
    const joinTeam = props.joinTeam;
    const [mobile, setMobile] = useState('');
    const { name, picture, phone } = props.user;
    const fullName = name.first + ' ' + name.last;
    const showPhone = () => setMobile(phone);
    return (
        <div className='User'>
            <img src={picture.large} alt="" />
            <div>
                <p>Name: {fullName}</p>
                <p>Phone Number: {mobile}</p>
                <button onClick={showPhone}>Show Phone Number</button>
                <button onClick={() => joinTeam(fullName)}>Add to Team</button>
            </div>
        </div>
    );
};

export default User;