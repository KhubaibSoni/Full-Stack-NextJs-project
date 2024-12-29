
import "../globals.css"
import Searchform from "@/component/Searchform";
import Card, { StartupTypeCard } from "@/component/card";
import { STARTUPS_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

 


const HomePage = async ({searchParams}:{searchParams: Promise<{query?:string}>}) => {

    
      
   
    const query = (await searchParams).query
const params = { search : query || null}
    const {data : startups} = await sanityFetch({query:STARTUPS_QUERY , params})

    return (
        <>
       <section className="pink_container">
<h1 className="heading">PITCH YOUR STARTUP, CONNECT WITH ENTREPRENEURS</h1>
     <p className="sub-heading !max-x-3xl">Submit Ideas, Vote on Pitches , and Get Noticed in Virtual Competitions</p>
      <Searchform query={query}/>
       </section>
       
       <section className="section_container ">
         <div >
            <h1 className="text-30-semibold">
                {query ? `Recommended startups '${query}'` : 'Recommended startups'}
                </h1>
         </div>

         <div>
            <ul className=" mt-7 card_grid">
              { startups.length > 0 ? (
                startups.map((story : StartupTypeCard)=>(
                  <Card data={story as StartupTypeCard} key={story._id}/>
                ))
              )
              : (
            <p>No Startups Availble</p>
              )}
            </ul>
         </div>
       </section>
       <SanityLive/>
       </>
    );
};

export default HomePage;