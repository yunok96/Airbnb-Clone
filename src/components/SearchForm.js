import React, { useState } from 'react';

function SearchForm({ onSearch }) {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
        onSearch({ location, checkIn, checkOut, guests }); // 검색 조건을 상위 컴포넌트에 전달
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Check-in"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Check-out"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                required
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;