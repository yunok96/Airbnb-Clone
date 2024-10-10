import React from 'react';
import Listings from './Listings'; // Listings 컴포넌트 불러오기

function Home() {
    return (
        <div>
            <h1>Welcome to Airbnb Clone</h1>
            <p>Find your perfect place to stay.</p>
            <Listings /> {/* Listings 컴포넌트를 추가 */}
        </div>
    );
}

export default Home;