import React from 'react';
import "./Home.css";
import videoimage from "./../../image/fbvideo.png";
import bookmarkimage from "../../image/fbbookmark.png";
import groupimage from "../../image/fbgroup.png";
import marketplaceimage from '../../image/fbmarketplace.png';
import memoriesimage from "../../image/fbmemory.png";
import friendsimage from "../../image/fbfriends.png";
import ReactPlayer from 'react-player'


const Home = () => {
  return (
    <div id="home-body-parent">
      <div id="left-area-home-body">
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg" /></div>
          <div className='left-area-inner-category-title'>Rocky Joseph Gomes</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src={friendsimage} /></div>
          <div className='left-area-inner-category-title'>Friends</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src={memoriesimage} /></div>
          <div className='left-area-inner-category-title'>Memories</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src={bookmarkimage} /></div>
          <div className='left-area-inner-category-title'>Saved</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src={groupimage} /></div>
          <div className='left-area-inner-category-title'>Groups</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src={videoimage} /></div>
          <div className='left-area-inner-category-title'>Videos</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src={marketplaceimage} /></div>
          <div className='left-area-inner-category-title'>Marketplace</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" /></div>
          <div className='left-area-inner-category-title'>Feeds</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/mruGO7HkgS-.png" /></div>
          <div className='left-area-inner-category-title'>Events</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png" /></div>
          <div className='left-area-inner-category-title'>Ads Manager</div>
        </div>
        <div className='left-area-category-inner-home-body-div'>
          <div className='left-area-inner-category-circle'><i class="fa-solid fa-angle-down"></i></div>
          <div className='left-area-inner-category-title'>See More</div>
        </div>
      </div>
      <div id="mid-area-home-body">
        <div id="mid-area-home-logo-search">
          <div id="post-area-within-home-body">
            <div id="profile-image-holder-inner-body">
              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg" />
            </div>
            <div id="profile-search-area-inner-body">
              <input placeholder="What's on your mind, Rocky" />
            </div>
          </div>
          <div id="file-post-area-within-home-body">
            <div className='inside-file-post-area'>
              <div className="file-post-image-holder"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png" /></div>
              <p>Live Video</p>
            </div>
            <div className='inside-file-post-area'>
              <div className="file-post-image-holder"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" /></div>
              <p>Photo/video</p>
            </div>
            <div className='inside-file-post-area'>
              <div className="file-post-image-holder"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png" /></div>
              <p>Feeling/activity</p>
            </div>
          </div>
        </div>
        <div className='mid-area-post-div'>
          <div className='suggestion-title'>Suggestion for you</div>
          <div>
            {/* <div className='sender-given-name-profile-image'>
            <div className='sender-profile-image-holder-circle'>
              <img src="https://scontent.fbom12-2.fna.fbcdn.net/v/t39.30808-1/352417631_1252471958791335_8926768411616128163_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c7e18e&_nc_ohc=faf3Mtd6xkUAX-LqYeL&_nc_ht=scontent.fbom12-2.fna&oh=00_AfBcbXHIVk_qYA_LCZvxphapw0tofETWhiJXnQ3Jnenpow&oe=64DE30EB"/>
            </div>
            <div className='sender-name'><p>Womaniyeah by ScoopWhoop <i class="fa-solid fa-circle-check"></i></p>
              <p>Jul 1 . <i class="fa-solid fa-earth-americas"></i></p>
            </div>
            <div className='elipsis'><i class="fa-solid fa-ellipsis"></i></div>
            <div className='xmark'><i class="fa-solid fa-xmark"></i></div>
          </div> */}
            <ReactPlayer width="640px" height="360px" url='https://fb.watch/mpNxUT_rzg/' controls={true} alt="video" />
          </div>
          <div className="like-n-love">
            <p className='like-number-nameing'><div id='like-span'><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" /></div> 63</p>
            <div className='like-share-count-div'>
              <div>7<i class="fa-regular fa-thumbs-up"></i></div>
              <div>1<i class="fa-solid fa-share"></i></div>
            </div>
          </div>
          <div className='like-comment-share-div'>
            <div className='inner-like-comment-share-div'>
              <i class="fa-regular fa-thumbs-up"></i> <p>Like</p>
            </div >
            <div className='inner-like-comment-share-div'>
              <i class="fa-regular fa-comment"></i> <p>Comment</p></div>
            <div className='inner-like-comment-share-div'>
              <i class="fa-solid fa-share"></i> <p>Share</p>
            </div>
          </div>
        </div>


        <div className='mid-area-post-div'>
          <div className='suggestion-title'>Suggestion for you</div>
          <div>
            <div className='sender-given-name-profile-image'>
              <div className='sender-profile-image-holder-circle'>
                <img src="https://scontent.fbom12-2.fna.fbcdn.net/v/t39.30808-1/323268886_860428258561300_8637654256302973705_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c7e18e&_nc_ohc=chYDhJU46W8AX9NqzRm&_nc_ht=scontent.fbom12-2.fna&oh=00_AfCtfFvaOGMTVzGWZ3D0nl3j4xV3YxzaZEnMtYbusu2CJA&oe=64DE69D9" />
              </div>
              <div className='sender-name'><p>Hundustan Times <i class="fa-solid fa-circle-check"></i></p>
                <p>3hr . <i class="fa-solid fa-earth-americas"></i></p>
              </div>
              <div className='elipsis'><i class="fa-solid fa-ellipsis"></i></div>
              <div className='xmark'><i class="fa-solid fa-xmark"></i></div>
            </div>
            <p className='sender-title-description'>#Chinese film #NoMoreBets has beaten Margot Robbie's Hollywood blockbuster #Barbie to world-leading weekend haul, as per a new report.</p>
            <div className='post-source-holder'>
              <img src="https://external.fbom12-2.fna.fbcdn.net/emg1/v/t13/13655633642990014793?url=https%3A%2F%2Fwww.hindustantimes.com%2Fht-img%2Fimg%2F2023%2F08%2F14%2F1600x900%2Fbox_office_record_1691999925245_1691999962185.jpg&fb_obo=1&utld=hindustantimes.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=06_AbEgOvSVLAvQyHmjaPR9Jsm8FGTTk3-Z23idvMetGfoj4A&oe=64DB98EE&_nc_sid=d7a383" />
            </div>
          </div>
          <div className="like-n-love">
            <p className='like-number-nameing'><div id='like-span'><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" /></div> 63</p>
            <div className='like-share-count-div'>
              <div>7<i class="fa-regular fa-thumbs-up"></i></div>
              <div>1<i class="fa-solid fa-share"></i></div>
            </div>
          </div>
          <div className='like-comment-share-div'>
            <div className='inner-like-comment-share-div'>
              <i class="fa-regular fa-thumbs-up"></i> <p>Like</p>
            </div >
            <div className='inner-like-comment-share-div'>
              <i class="fa-regular fa-comment"></i> <p>Comment</p></div>
            <div className='inner-like-comment-share-div'>
              <i class="fa-solid fa-share"></i> <p>Share</p>
            </div>
          </div>
        </div>

      </div>

      <div id="right-area-home-body">
        <div className='group-conversation'>
          <p className='group-conversation-title'>Group Conversation</p>
          <p className='group-addition'><i class="fa-solid fa-circle-plus"></i> Create New Group</p>
        </div>
      </div>
    </div>
  )
}

export default Home
