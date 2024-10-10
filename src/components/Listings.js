import React, { useState } from 'react';
import listings from '../data/listings';
import recommendedListings from '../data/recommendedListings';
import SearchForm from './SearchForm';

function Listings() {
    const [searchResults, setSearchResults] = useState([]);
    const [initialLoad, setInitialLoad] = useState(true); // 초기 로드 상태

    const handleSearch = (filters) => {
        // console.log('Search Filters:', filters); // 검색 필터 값을 콘솔에 출력

        const { location, checkIn, checkOut, guests } = filters;
        const filteredListings = listings.filter((listing) => {
            return (
                listing.location.toLowerCase().includes(location.toLowerCase()) &&
                listing.maxGuests >= guests
            );
        });
        setSearchResults(filteredListings);
        setInitialLoad(false); // 검색 후 초기 로드 상태 변경
    };

    return (
        <div>
            <SearchForm onSearch={handleSearch} />

            {initialLoad ? (
                // 초기 로드일 때 추천 숙소 표시
                <div>
                    <h2>Recommended Listings</h2>
                    <div className="listing-container">
                        {recommendedListings.map((listing) => (
                            <div key={listing.id} className="listing">
                                <img src={listing.image} alt={listing.name} />
                                <h2>{listing.name}</h2>
                                <p>{listing.location}</p>
                                <p>{listing.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : searchResults.length === 0 ? (
                // 검색 후 결과가 없을 때
                <div className="no-results">
                    <h2>No listings found. Please try a different search.</h2>
                </div>
            ) : (
                // 검색 결과가 있을 때
                <div>
                    <h2>Search Results</h2>
                    <div className="listing-container">
                        {searchResults.map((listing) => (
                            <div key={listing.id} className="listing">
                                <img src={listing.image} alt={listing.name} />
                                <h2>{listing.name}</h2>
                                <p>{listing.location}</p>
                                <p>{listing.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Listings;