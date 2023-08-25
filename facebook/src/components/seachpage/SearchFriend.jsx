import React from 'react'
import Navbar from '../navbar/Navbar'
import "./SearchFriend.css";

const SearchFriend = () => {
    return (
        <div>
            <Navbar />
            <div id="searchfriend-body">
                <div id="searchfriend-left-area-div-within-body">
                    <div className='left-area-inner-div-serchfriend'>
                        <div className='left-area-inner-div-serchfriend-names'>
                            <p><h2>Friends</h2></p>
                        </div>
                        <div className='left-area-inner-div-serchfriend-icon'>
                            <div className='circlr-holder-for-icon-searchfriend'>
                                <i class="fa-solid fa-gear"></i>
                            </div>
                        </div>
                    </div>
                    <div className='left-area-inner-div-serchfriend'>
                        <div className='left-area-inner-div-serchfriend-names'>
                            <div className='circle-for-icon-in-name-area-left-search' id="user-group-icon">
                                <i class="fa-solid fa-user-group"></i>
                            </div>
                            <p><h4>Friends</h4></p>
                        </div>
                        {/* <div className='left-area-inner-div-serchfriend-icon'>
                            <div className='circlr-holder-for-icon-searchfriend'>
                                <i class="fa-solid fa-gear"></i>
                            </div>
                        </div> */}
                    </div>
                    <div className='left-area-inner-div-serchfriend'>
                        <div className='left-area-inner-div-serchfriend-names'>
                            <div className='circle-for-icon-in-name-area-left-search'>
                                <i class="fa-solid fa-user-check"></i>
                            </div>
                            <p><h4>Friends Request</h4></p>
                        </div>
                        <div className='left-area-inner-div-serchfriend-icon'>
                            <i class="fa-solid fa-chevron-right" ></i>
                        </div>
                    </div>
                    <div className='left-area-inner-div-serchfriend'>
                        <div className='left-area-inner-div-serchfriend-names'>
                            <div className='circle-for-icon-in-name-area-left-search'>
                                <i class="fa-solid fa-user-plus"></i>
                            </div>
                            <p><h4>Suggestion</h4></p>
                        </div>
                        <div className='left-area-inner-div-serchfriend-icon'>
                            <i class="fa-solid fa-chevron-right" ></i>
                        </div>
                    </div>
                    <div className='left-area-inner-div-serchfriend'>
                        <div className='left-area-inner-div-serchfriend-names'>
                            <div className='circle-for-icon-in-name-area-left-search'>
                                <i class="fa-solid fa-users"></i>
                            </div>
                            <p><h4>All friends</h4></p>
                        </div>
                        <div className='left-area-inner-div-serchfriend-icon'>
                            <i class="fa-solid fa-chevron-right" ></i>
                        </div>
                    </div>
                    <div className='left-area-inner-div-serchfriend'>
                        <div className='left-area-inner-div-serchfriend-names'>
                            <div className='circle-for-icon-in-name-area-left-search'>
                                <i class="fa-solid fa-gift"></i>
                            </div>
                            <p><h4>Birthday</h4></p>
                        </div>
                        <div className='left-area-inner-div-serchfriend-icon'>
                            {/* <i class="fa-solid fa-chevron-right" ></i> */}
                        </div>
                    </div>
                    <div className='left-area-inner-div-serchfriend'>
                        <div className='left-area-inner-div-serchfriend-names'>
                            <div className='circle-for-icon-in-name-area-left-search'>
                                <i class="fa-solid fa-address-card"></i>
                            </div>
                            <p><h4>Custom List</h4></p>
                        </div>
                        <div className='left-area-inner-div-serchfriend-icon'>
                            <i class="fa-solid fa-chevron-right" ></i>
                        </div>
                    </div>
                </div>
                <div id="right-area-searchfriends-parent">
                    <div className="first-container-right-area-searchfriends">
                        <div className='first-container-right-title-searchfriends'>
                            <div className='right-title-searchfriends'><h4>Friend Request</h4></div>
                            <div className='right-title-searchfriends-options'><h6>See All</h6></div>
                        </div>
                        <div className='align-right-area-request-searchfriend'>
                            <div className='request-div-searchfriend'>
                                <div className='request-div-searchfriend-image-holder' >
                                    <img src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5O4n-ddWtMEAX-Mm_bI&_nc_ht=scontent.fbom2-1.fna&oh=00_AfDHroF0_AAyKrqO4RckEecFN9wcfxZnQj6xwzFAqIfTaA&oe=6506A2F8" />
                                </div>
                                <div className='request-div-searchfriend-person-details'>
                                    <h4>Manoj Nadar</h4>
                                    <p>5 mutual friends </p>
                                    <button className='confirm-friends-btn'>Confirm</button>
                                    <button className='delete-request-friends-btn'>Confirm</button>
                                </div>
                            </div>
                            <div className='request-div-searchfriend'>
                                <div className='request-div-searchfriend-image-holder' >
                                    <img src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5O4n-ddWtMEAX-Mm_bI&_nc_ht=scontent.fbom2-1.fna&oh=00_AfDHroF0_AAyKrqO4RckEecFN9wcfxZnQj6xwzFAqIfTaA&oe=6506A2F8" />
                                </div>
                                <div className='request-div-searchfriend-person-details'>
                                    <h4>Pooja Rv</h4>
                                    <p>6 mutual friends </p>
                                    <button className='confirm-friends-btn'>Confirm</button>
                                    <button className='delete-request-friends-btn'>Confirm</button>
                                </div>
                            </div>
                            <div className='request-div-searchfriend'>
                                <div className='request-div-searchfriend-image-holder' >
                                    <img src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5O4n-ddWtMEAX-Mm_bI&_nc_ht=scontent.fbom2-1.fna&oh=00_AfDHroF0_AAyKrqO4RckEecFN9wcfxZnQj6xwzFAqIfTaA&oe=6506A2F8" />
                                </div>
                                <div className='request-div-searchfriend-person-details'>
                                    <h4>Santosh C</h4>
                                    <p>2 mutual friends </p>
                                    <button className='confirm-friends-btn'>Confirm</button>
                                    <button className='delete-request-friends-btn'>Confirm</button>
                                </div>
                            </div>
                            <div className='request-div-searchfriend'>
                                <div className='request-div-searchfriend-image-holder' >
                                    <img src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5O4n-ddWtMEAX-Mm_bI&_nc_ht=scontent.fbom2-1.fna&oh=00_AfDHroF0_AAyKrqO4RckEecFN9wcfxZnQj6xwzFAqIfTaA&oe=6506A2F8" />
                                </div>
                                <div className='request-div-searchfriend-person-details'>
                                    <h4>Chetan Patil</h4>
                                    <p>0 mutual friends </p>
                                    <button className='confirm-friends-btn'>Confirm</button>
                                    <button className='delete-request-friends-btn'>Confirm</button>
                                </div>
                            </div>
                            <div className='request-div-searchfriend'>
                                <div className='request-div-searchfriend-image-holder' >
                                    <img src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5O4n-ddWtMEAX-Mm_bI&_nc_ht=scontent.fbom2-1.fna&oh=00_AfDHroF0_AAyKrqO4RckEecFN9wcfxZnQj6xwzFAqIfTaA&oe=6506A2F8" />
                                </div>
                                <div className='request-div-searchfriend-person-details'>
                                    <h4>Krishna Chaudary</h4>
                                    <p>3 mutual friends </p>
                                    <button className='confirm-friends-btn'>Confirm</button>
                                    <button className='delete-request-friends-btn'>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="first-container-right-area-searchfriends">
                        <div className='first-container-right-title-searchfriends'>
                            <div className='right-title-searchfriends'><h4>People You May Know</h4></div>
                            <div className='right-title-searchfriends-options'><h6>See All</h6></div>
                        </div>
                        <div className='align-right-area-request-searchfriend'>
                            <div className='request-div-searchfriend'>
                                <div className='request-div-searchfriend-image-holder' >
                                    <img src="https://scontent.fbom2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5O4n-ddWtMEAX-Mm_bI&_nc_ht=scontent.fbom2-1.fna&oh=00_AfDHroF0_AAyKrqO4RckEecFN9wcfxZnQj6xwzFAqIfTaA&oe=6506A2F8" />
                                </div>
                                <div className='request-div-searchfriend-person-details'>
                                    <h4>Awdiz institute</h4>
                                    <p>5 mutual friends </p>
                                    <button className='add-friends-btn'>Add Friend</button>
                                    <button className='delete-request-friends-btn'>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFriend
