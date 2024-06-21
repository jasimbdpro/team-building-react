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
                <p className='text-primary'>Name: {fullName}</p>
                <p>Phone Number: {mobile}</p>
                <button className='btn btn-secondary' onClick={showPhone}>Show Phone Number</button>
                <button className='btn btn-secondary  ms-2' onClick={() => joinTeam(fullName)}>Add to Team</button>
            </div>
        </div>
    );
};

export default User;