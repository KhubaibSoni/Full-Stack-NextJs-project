import Image from "next/image";
import LoginForm from "@/component/LoginForm";
import Logout from "@/component/Logout";
import { auth } from "@/auth";
import "../globals.css"
import { redirect } from "next/navigation";
import Searchform from "@/component/Searchform";
import Card from "@/component/card";

const startups=[
    {
      "_id": "1a2b3c4d",
      "title": "Exploring the Mountains",
      "category": "Travel",
      "createdAt": "2024-12-18T10:15:00Z",
      "view": 1200,
      "author": {
        "id": "author01",
        "name": "John Doe"
      },
      "image": "https://via.placeholder.com/300x200?text=Mountains"
    },
    {
      "_id": "2b3c4d5e",
      "title": "Understanding JavaScript Closures",
      "category": "Programming",
      "createdAt": "2024-12-17T12:30:00Z",
      "view": 875,
      "author": {
        "id": "author02",
        "name": "Jane Smith"
      },
      "image": "https://via.placeholder.com/300x200?text=JavaScript"
    },
    {
      "_id": "3c4d5e6f",
      "title": "10 Easy Recipes for Beginners",
      "category": "Cooking",
      "createdAt": "2024-12-16T09:45:00Z",
      "view": 530,
      "author": {
        "id": "author03",
        "name": "Emily Johnson"
      },
      "image": "https://via.placeholder.com/300x200?text=Cooking"
    },
    {
      "_id": "4d5e6f7g",
      "title": "Latest Tech Innovations in 2024",
      "category": "Technology",
      "createdAt": "2024-12-15T15:20:00Z",
      "view": 1500,
      "author": {
        "id": "author04",
        "name": "Michael Brown"
      },
      "image": "https://via.placeholder.com/300x200?text=Technology"
    },
    {
      "_id": "5e6f7g8h",
      "title": "Top Fitness Tips for Busy People",
      "category": "Health",
      "createdAt": "2024-12-14T18:10:00Z",
      "view": 670,
      "author": {
        "id": "author05",
        "name": "Sarah Wilson"
      },
      "image": "https://via.placeholder.com/300x200?text=Fitness"
    },
    {
      "_id": "6f7g8h9i",
      "title": "The Art of Minimalist Living",
      "category": "Lifestyle",
      "createdAt": "2024-12-13T08:00:00Z",
      "view": 420,
      "author": {
        "id": "author06",
        "name": "David Lee"
      },
      "image": "https://via.placeholder.com/300x200?text=Minimalism"
    },
    {
      "_id": "7g8h9i0j",
      "title": "A Guide to Sustainable Gardening",
      "category": "Environment",
      "createdAt": "2024-12-12T11:25:00Z",
      "view": 350,
      "author": {
        "id": "author07",
        "name": "Laura Davis"
      },
      "image": "https://via.placeholder.com/300x200?text=Gardening"
    },
    {
      "_id": "8h9i0j1k",
      "title": "Top Movies to Watch This Year",
      "category": "Entertainment",
      "createdAt": "2024-12-11T16:40:00Z",
      "view": 980,
      "author": {
        "id": "author08",
        "name": "Chris Martinez"
      },
      "image": "https://via.placeholder.com/300x200?text=Movies"
    }
  ]

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
       
       <section className="section_container">
         <div >
            <h1 className="text-30-semibold">
                {query ? `Recommended startups '${query}'` : 'Recommended startups'}
                </h1>
         </div>

         <div>
            <ul className=" mt-7 card_grid">
              { startups.length > 0 ? (
                startups.map((story)=>(
                    <li key={story._id}>
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