import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import "./Profile.css"
import avaterIcon from "../../image/avatar.png";
import camaraIcon from "../../image/camara.png"
import { NavLink } from 'react-router-dom';

const Profile = () => {
    const [editopen, setEditopen] = useState(false);
    return (
        <div>
            <Navbar />
            <div id="profile-screen">
                <div id="profile-inner-body">
                    <div id="profile-cover">
                        <img src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/1be0280c-7df3-410d-918b-eac53c3e669f/c7e7f781-2c33-46c1-8c09-57c6c8d6ceb3/1280x720/match/image.jpg" />
                        <div id="create-avater-n-cover-parent-div">
                            <div id="avater-div">
                                <div id="profile-avater-image-holder">
                                    <img src={avaterIcon} />
                                </div><p>Create with Avatar</p>
                            </div>
                            <div id="avater-div">
                                <div id="profile-avater-image-holder">
                                    <img src={camaraIcon} />
                                </div><p>Edit Cover photo</p>
                            </div>
                        </div>
                    </div>
                    <div id="profile-name-area-parent-div">
                        <div id="profile-circle">
                            <div id="inner-profile-circle">
                                <img src="data:image/png;base64,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" />
                            </div>
                        </div>
                        <div id="profiler-name">
                            <div><h1>Rocky Joseph Gomes</h1></div>
                            <div id="profile-friends-div">
                                <p>830 friends</p>
                                <div id="profile-friends-div-small-circle">
                                    <div className='other-friends-profile-image-1'>
                                        <img src="https://scontent.fbom12-1.fna.fbcdn.net/v/t1.6435-1/88220135_2658788411017537_7956718806112403456_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6goGkqT-gicAX_ozxQ8&_nc_ht=scontent.fbom12-1.fna&oh=00_AfBMGTxFyZmhSzuUDPnqwsZ4l8SYA3Tvr3y5vTDD98A0EA&oe=6503F335" />
                                    </div>
                                    <div className='other-friends-profile-image-2'>
                                        <img src="https://scontent.fbom12-2.fna.fbcdn.net/v/t39.30808-1/299173773_5351968028173764_3406872126010794178_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=PmPXqsNINjcAX88QBOn&_nc_oc=AQmqZF-HDiyADEV_IYV4bXZf2VBsuNBZTg6OqC3QNQLWWumI1eFQ8Aalp5gXpC1V2gs&_nc_ht=scontent.fbom12-2.fna&oh=00_AfAEIj0lubXP2pvrTCwO95D9Wy-ipmt8mky68DE6-v7kVg&oe=64E27521" />
                                    </div>
                                    <div className='other-friends-profile-image-3'>
                                        <img src="https://scontent.fbom12-2.fna.fbcdn.net/v/t1.6435-1/126984478_1087756658322661_8733039088288726139_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZsMhVuxyUH8AX8KiFmp&_nc_ht=scontent.fbom12-2.fna&oh=00_AfAeAQtWxWRo3mFNt2_efCcHUxcZUD4Iuzfeh6x5c_y91g&oe=6503E7FB" />
                                    </div>
                                    <div className='other-friends-profile-image-4' >
                                        <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t1.6435-1/126984478_1087756658322661_8733039088288726139_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZsMhVuxyUH8AX8DxeWx&_nc_ht=scontent.fbom2-2.fna&oh=00_AfArCkkROldJqmWQAedXKj_Oi-1Hcsd2SD9uyl42H_00Mw&oe=6504587B" />
                                    </div>
                                    <div className='other-friends-profile-image-5'>
                                        <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/325900801_714881183612556_2468935745989169202_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Ec3VxFcj8joAX9x23Br&_nc_ht=scontent.fbom2-2.fna&oh=00_AfCop2dkKfZXyEPtK15TAcwIyHG3aZpRQs5mdTbhgDPFFQ&oe=64E152B4" />
                                    </div>
                                    <div className='other-friends-profile-image-6'>
                                        <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/325900801_714881183612556_2468935745989169202_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Ec3VxFcj8joAX9x23Br&_nc_ht=scontent.fbom2-2.fna&oh=00_AfCop2dkKfZXyEPtK15TAcwIyHG3aZpRQs5mdTbhgDPFFQ&oe=64E152B4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="add-story-and-edit-profile">
                            <div id="inner-add-story-and-edit-profile">
                                <NavLink className="navLink-add-story-btn" to={"http://localhost:3000/story"}>
                                    <div id="add-story-btn">
                                        <i class="fa-solid fa-plus"></i>
                                        <p>add to story</p>
                                    </div>
                                </NavLink>
                                <div id="profile-edit" onClick={() => setEditopen(true)}>
                                    <i class="fa-solid fa-pencil"></i>
                                    <p>Edit profile</p>
                                </div>
                                <div id="addition-arrow-down-btn">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {editopen ? <div id="profile-edit-profile-model">
                <div id="profile-edit-pop">
                    <div id="profile-edit-pop-header">
                        <p><h4>Edit profile</h4></p>
                        <div id="edit-profile-closer" onClick={() => setEditopen(false)}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className='sub-title-inside-edit-pop'>
                        <div className='subtitle-name-edit'>
                            <h4>Profile picture</h4>
                        </div>
                        <div className='option-mention-in-edit-pop'>Add</div>
                    </div>
                    <div className="edit-file-frame-inside">
                        <div className='edit-profile-image-holder'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAMFBMVEXk5ueutLfo6eq9w8WrsbTHy83R1Na2u77Y29ze4eKzuLvBxsinrrHV2NrMz9G7wMNN0K3qAAAC/0lEQVR4nO2a2XKFIAxAIaIsov7/3xa8W+8GCRKuD5yZzrR98UwgAROF6HQ6nU6n0+l0Op0OBvjx4wGENcbY/befGAgzauW9Cj9ebqtp7wF2lFLJO0pJt9qmGmAH9c/gJiLHdhsExOjfDK4aUyMLMO49CneNrY3D9F0hWjjbwGFNOkQM95LAmHWQitkCEYcI64qA+ZIWL2hOCYtSiDnCtyCwoRYjWrDVi0xyPlswOQhAKwSJkScUyMy4wZQhjuLAEwpYcOl5wzE4CNAkh5AgDBLYGnGHo1YQ8vMaivoOMJMllvoSRAWe/KAGQqqhuoMlS9Q/S2GhS8jqEuTkYEgP4sGx408hUfsMO0ckCvZEfYkzZIcwJ6gTBRVT1q+Ypzg7Sk7R+gfYGe4T9JuVZrhZke+Ya30HerniefGgvXfMLK9gmP7Ig+qn182CIKFmHgfSSVr98HpYoHcF10t5BN2p4agRN2DCvRTz9jJxJ4jn7iEOiD4mw8n1YpGNBV/T7B+5msUeh0g4RBJdftdo8gJi+Dbv4KwPbxqL/hAMJbemAygQQeNpVcJfM/uM4d3DroNTXkW80vPym6lkfKiZAouNM9JfGMB1NnyZy0JrjfBYa6Zx3rRzcS8o6ZzehnFdbJtJMQi7jNu+EV7y4/I/PU+Wdzi6T6ZlolTtLjJsUq61ATCz87i7lZfDxKARZ+OkBrvyQ90RfliGTdL7mEpP9bYHGJ3eB989XCUNMBtt0PGisR63iB8plCtcNI4eKTDR98K7xnxkTUCgB6FpiwMz/BCGWhRfdmgvwDmLslYezAeS4oNF0eXz0wXuGHSL+g50Cw4HogX+GwWqBcGB3DjFgp9dl4wVkBDaaWwO4bqDfVsmdk2JoLYF42JE1IAKBadCtDCIQNQ8MT7i8qGgdEzLyHe0SkaPVPJfS/Kmxo7KJQjy47pjEpkbDv+2jGQuONTxTiHp9bCkwUopma9tCubAJRLpTcFbsu8kSzffReIJlSyasG5DE5LLAY1IOXQ6nU7n5PwB2GUhioNHws8AAAAASUVORK5CYII=" />
                        </div>
                    </div>
                    <div className='sub-title-inside-edit-pop'>
                        <div className='subtitle-name-edit'>
                            <h4>Cover photo</h4>
                        </div>
                        <div className='option-mention-in-edit-pop'>Add</div>
                    </div>
                    <div className="edit-file-frame-inside">
                        <div className='edit-profile-image-holder-square'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAMFBMVEXk5ueutLfo6eq9w8WrsbTHy83R1Na2u77Y29ze4eKzuLvBxsinrrHV2NrMz9G7wMNN0K3qAAAC/0lEQVR4nO2a2XKFIAxAIaIsov7/3xa8W+8GCRKuD5yZzrR98UwgAROF6HQ6nU6n0+l0Op0OBvjx4wGENcbY/befGAgzauW9Cj9ebqtp7wF2lFLJO0pJt9qmGmAH9c/gJiLHdhsExOjfDK4aUyMLMO49CneNrY3D9F0hWjjbwGFNOkQM95LAmHWQitkCEYcI64qA+ZIWL2hOCYtSiDnCtyCwoRYjWrDVi0xyPlswOQhAKwSJkScUyMy4wZQhjuLAEwpYcOl5wzE4CNAkh5AgDBLYGnGHo1YQ8vMaivoOMJMllvoSRAWe/KAGQqqhuoMlS9Q/S2GhS8jqEuTkYEgP4sGx408hUfsMO0ckCvZEfYkzZIcwJ6gTBRVT1q+Ypzg7Sk7R+gfYGe4T9JuVZrhZke+Ya30HerniefGgvXfMLK9gmP7Ig+qn182CIKFmHgfSSVr98HpYoHcF10t5BN2p4agRN2DCvRTz9jJxJ4jn7iEOiD4mw8n1YpGNBV/T7B+5msUeh0g4RBJdftdo8gJi+Dbv4KwPbxqL/hAMJbemAygQQeNpVcJfM/uM4d3DroNTXkW80vPym6lkfKiZAouNM9JfGMB1NnyZy0JrjfBYa6Zx3rRzcS8o6ZzehnFdbJtJMQi7jNu+EV7y4/I/PU+Wdzi6T6ZlolTtLjJsUq61ATCz87i7lZfDxKARZ+OkBrvyQ90RfliGTdL7mEpP9bYHGJ3eB989XCUNMBtt0PGisR63iB8plCtcNI4eKTDR98K7xnxkTUCgB6FpiwMz/BCGWhRfdmgvwDmLslYezAeS4oNF0eXz0wXuGHSL+g50Cw4HogX+GwWqBcGB3DjFgp9dl4wVkBDaaWwO4bqDfVsmdk2JoLYF42JE1IAKBadCtDCIQNQ8MT7i8qGgdEzLyHe0SkaPVPJfS/Kmxo7KJQjy47pjEpkbDv+2jGQuONTxTiHp9bCkwUopma9tCubAJRLpTcFbsu8kSzffReIJlSyasG5DE5LLAY1IOXQ6nU7n5PwB2GUhioNHws8AAAAASUVORK5CYII=" />
                        </div>
                    </div>
                    <div className='sub-title-inside-edit-pop'>
                        <div className='subtitle-name-edit'>
                            <h4>Avatar</h4>
                        </div>
                        <div className='option-mention-in-edit-pop'>Create</div>
                    </div>
                    <p className='sub-sub-title-in-edit-profile'>Only you can view this section</p>
                    <div className="edit-file-frame-inside">
                        <div className='edit-profile-image-holder-square'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/etbZBoA4Om4.png" />
                        </div>
                    </div>
                    <div className='sub-title-inside-edit-pop'>
                        <div className='subtitle-name-edit'>
                            <h4>Bio</h4>
                        </div>
                        <div className='option-mention-in-edit-pop'>Add</div>
                    </div>
                    <br />
                    <p className='descript-edit-pop'>Describe yourself...</p>
                    <br />
                    <div className='sub-title-inside-edit-pop'>
                        <div className='subtitle-name-edit'>
                            <h4>Customize your intro</h4>
                        </div>
                        <div className='option-mention-in-edit-pop'>Edit</div>
                    </div>
                    <p className='sub-sub-title-in-edit-profile'>Followed by 67 people</p>
                    <div className='sub-title-inside-edit-pop'>
                        <div className='subtitle-name-edit'>
                            <h4>Hobbies</h4>
                        </div>
                        <div className='option-mention-in-edit-pop'>Add</div>
                    </div>
                    <br />
                    <br />
                    <div className='sub-title-inside-edit-pop'>
                        <div className='subtitle-name-edit'>
                            <h4>Featured</h4>
                        </div>
                        <div className='option-mention-in-edit-pop'>Add</div>
                    </div>
                    <p className='sub-sub-title-in-edit-profile'>Only you can view this section</p>
                    <div className="edit-file-frame-inside">
                        <div className='edit-profile-image-holder-square'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/Ql43NN0QN4C.png" />
                        </div>
                    </div>
                    <p className='descript-edit-pop'>Feature your favorite photos and stories here for all your friends to see.</p>
                    <button id="edit-pop-submit-btn">Edit your about info</button>
                </div>
            </div> : ""}
        </div>
    )
}

export default Profile
