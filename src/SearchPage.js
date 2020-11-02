import React from "react";
import "./SearchPage.css";
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneSharpIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
              image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
              channel="Clever Programmer"
              verified
              subs="805K"
              noOfVideos={467}
              description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
            <hr />
            <VideoRow
               views="30K Views"
               subs="805K"
               description="Do you want to beat the zombie apocalypse & become a 6-figure JavaScript developer 💻? Join the FREE 5-day JS challenge 👉 https://www.cleverprogrammer.com/java...  Starts April 6th."
               timestamp="6 Months ago"
               channel="Clever Programmer"
               title="How Billionaire Developers Think: Decoding the Mind of Billionaire Developers"
               image="https://i.ytimg.com/an_webp/AorXolPgKlY/mqdefault_6s.webp?du=3000&sqp=CKCxlvwF&rs=AOn4CLD1XfMd_bAtXNeOJb2tXN4rQGdcQg"
            />
        </div>
    )
}

export default SearchPage
