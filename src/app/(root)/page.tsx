import Image from "next/image";
import LoginForm from "@/component/LoginForm";
import Logout from "@/component/Logout";
import { auth } from "@/auth";
import "../globals.css"
import { redirect } from "next/navigation";
import Searchform from "@/component/Searchform";
import Card from "@/component/card";

const startups = [
  {
      "_id": "1a2b3c4d",
      "title": "Peakify",
      "category": "Travel",
      "createdAt": "18 December 2024",
      "view": 1200,
      "author": {
          "id": "author01",
          "name": "John Doe"
      },
      "image": "https://via.placeholder.com/300x200?text=Mountains"
  },
  {
      "_id": "2b3c4d5e",
      "title": "CodeNest",
      "category": "Programming",
      "createdAt": "17 December 2024",
      "view": 875,
      "author": {
          "id": "author02",
          "name": "Jane Smith"
      },
      "image": "https://via.placeholder.com/300x200?text=JavaScript"
  },
  {
      "_id": "3c4d5e6f",
      "title": "CookSphere",
      "category": "Cooking",
      "createdAt": "16 December 2024",
      "view": 530,
      "author": {
          "id": "author03",
          "name": "Emily Johnson"
      },
      "image": "https://via.placeholder.com/300x200?text=Cooking"
  },
  {
      "_id": "4d5e6f7g",
      "title": "Innovatech",
      "category": "Technology",
      "createdAt": "15 December 2024",
      "view": 1500,
      "author": {
          "id": "author04",
          "name": "Michael Brown"
      },
      "image": "https://via.placeholder.com/300x200?text=Technology"
  },
  {
      "_id": "5e6f7g8h",
      "title": "FitLife",
      "category": "Health",
      "createdAt": "14 December 2024",
      "view": 670,
      "author": {
          "id": "author05",
          "name": "Sarah Wilson"
      },
      "image": "https://via.placeholder.com/300x200?text=Fitness"
  },
  {
      "_id": "6f7g8h9i",
      "title": "Simplify",
      "category": "Lifestyle",
      "createdAt": "13 December 2024",
      "view": 420,
      "author": {
          "id": "author06",
          "name": "David Lee"
      },
      "image": "https://via.placeholder.com/300x200?text=Minimalism"
  },
  {
      "_id": "7g8h9i0j",
      "title": "GreenThumb",
      "category": "Environment",
      "createdAt": "12 December 2024",
      "view": 350,
      "author": {
          "id": "author07",
          "name": "Laura Davis"
      },
      "image": "https://via.placeholder.com/300x200?text=Gardening"
  },
  {
      "_id": "8h9i0j1k",
      "title": "ReelFocus",
      "category": "Entertainment",
      "createdAt": "11 December 2024",
      "view": 980,
      "author": {
          "id": "author08",
          "name": "Chris Martinez"
      },
      "image": "https://via.placeholder.com/300x200?text=Movies"
  }
];


const HomePage = async ({searchParams}:{searchParams: Promise<{query?:string}>}) => {

    
      
    const session = await auth();
    const query = (await searchParams).query
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
                startups.map((story)=>(
                    <li key={story._id} >
                  <Card data={story}/>
                  </li>
                ))
              )
              : (
            <p>No Startups Availble</p>
              )}
            </ul>
         </div>
       </section>
       </>
    );
};

export default HomePage;