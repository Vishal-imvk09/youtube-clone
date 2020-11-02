import React from "react";
import './RecommendedVideo.css';
import VideoCard from "./VideoCard";

function RecommendedVideo() {
    return (
        <div className="recommendedvideo">
            <h2>Recommended</h2>
            <div className="recommendedvideo__Videos">
                <VideoCard 
                    title="MIRZAPUR S2 - Official Trailer | Pankaj Tripathi, Ali Fazal, Divyenndu | Amazon Original |Oct23"
                    views="1.5M Views"
                    timestamp="16 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJxMSyH4sTrwt5clNLxfifS8UNqJYqpmUoNFJi7UkQ=s88-c-k-c0xffffffff-no-rj-mo"
                    channel="Amazon Prime Video India"
                    image="https://i.ytimg.com/vi/xMKzdQrC5TI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAulya9OKyYBNTqrj88S8-tbW_O0Q" 
                />       
                <VideoCard 
                    title="TheFatRat - Rise Up (Lyrics)"
                    views="7.8M Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzliR_RmSEbo2OPK0zxpF2U_D3EjQkQszKhiYYh9w=s88-c-k-c0xffffffff-no-rj-mo"
                    channel="AirwaveMusicTV "
                    image="https://i.ytimg.com/vi/rjAsnOI-Qbo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD7HsllMpI2U58rUeLOrDa_ah9guw"
                />
                <VideoCard 
                    title="BB Ki Vines- | Nahi Jaana Please |"
                    views="2M Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="BB Ki Vines"
                    image="https://i.ytimg.com/an_webp/baZ1cVxiNtg/mqdefault_6s.webp?du=3000&sqp=CMCelvwF&rs=AOn4CLC6u4CwcaYVugw5g6l7n-2J7lfJtA"
                />
                <VideoCard 
                    title="Serious Men | 2nd Oct | Official Trailer | Nawazuddin Siddiqui, M. Nasser, Sudhir Mishra | Netflix"
                    views="6M Views"
                    timestamp="1 Month ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy8rL_YZUb-ToEp43GE7s7wolB7p3_KFM-tiYgq=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Netflix India"
                    image="https://i.ytimg.com/vi/naXf8R1aOik/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCDJIV2njrwcdEUQK6CSnXZFX5UOQ" 
                />
                <VideoCard 
                    title="Choked | Official Trailer | Saiyami Kher, Roshan Mathew, Amruta Subhash, Rajshri Deshpande | Netflix"
                    views="4M Views"
                    timestamp="4 Months agp"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy8rL_YZUb-ToEp43GE7s7wolB7p3_KFM-tiYgq=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Netflix India"
                    image="https://i.ytimg.com/vi/KY3D-htXKFE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDKwC9WzqdrzHmyqgu4zXSDValMDw"
                />
                <VideoCard 
                   title="GUNJAN SAXENA: The Kargil Girl | Official Trailer | Netflix India"
                   views="9M Views"
                   timestamp="2 Months ago"
                   channelImage="https://yt3.ggpht.com/a/AATXAJy8rL_YZUb-ToEp43GE7s7wolB7p3_KFM-tiYgq=s176-c-k-c0x00ffffff-no-rj-mo"
                   channel="Netflix India"
                   image="https://i.ytimg.com/vi/rtGIq9Xjnrw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBVKUfjdpEaJXpzMZiXsLBtzEWMbw"
                />
                <VideoCard
                    title="Raat Akeli Hai | Official Trailer | Nawazuddin Siddiqui, Radhika Apte, Honey Trehan | Netflix India"
                    views="10M Views"
                    timestamp="3 Months ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJy8rL_YZUb-ToEp43GE7s7wolB7p3_KFM-tiYgq=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Netflix India"
                    image="https://i.ytimg.com/vi/uc78PxSxXMg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD8FGVkzkkNoDWNSEBAqsoPTJCjNg" 
                />               
            </div>
        </div>
    )
}

export default RecommendedVideo
