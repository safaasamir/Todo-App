 import React from "react"
 import MeetupList from "../component/meetup/MeeetupList"
 

const All_Data= [
  {
    id:1, img:"https://www.freepik.com/free-photos-vectors/pizza", title: "pizaa", description:"Delisious pizaa with paprony and sous"

  },
  {
    id:2, img:"https://depositphotos.com/191783046/stock-photo-fresh-tasty-burger.html", title: "Burger", description:"Delisious Burger with cheese"

  },
  {
    id:3, img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmodo3.com%2Fthumbs%2Ffit630x300%2F97618%2F1531832280%2F%25D8%25B7%25D8%25B1%25D9%258A%25D9%2582%25D8%25A9_%25D8%25B9%25D9%2585%25D9%2584_%25D8%25A7%25D9%2584%25D8%25B4%25D8%25A7%25D9%2588%25D8%25B1%25D9%2585%25D8%25A7_%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D9%2583%25D9%258A%25D8%25A9.jpg&imgrefurl=https%3A%2F%2Fmawdoo3.com%2F%25D8%25B7%25D8%25B1%25D9%258A%25D9%2582%25D8%25A9_%25D8%25B9%25D9%2585%25D9%2584_%25D8%25A7%25D9%2584%25D8%25B4%25D8%25A7%25D9%2588%25D8%25B1%25D9%2585%25D8%25A7_%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D9%2583%25D9%258A%25D8%25A9&tbnid=PXNqM17KEQAZiM&vet=12ahUKEwirnb_f07f5AhUC4BoKHcuGCLMQMygEegUIARDxAQ..i&docid=PGhEO7qxwkIBoM&w=630&h=300&q=%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7&ved=2ahUKEwirnb_f07f5AhUC4BoKHcuGCLMQMygEegUIARDxAQ", title: "shawerma", description:"Delisious shawerma with potatoes"

  }
  
]


function AllMeetup()
{
    return(
      <section>
      <h1>All Menue </h1>
      <MeetupList foods={All_Data}/>
      </section>  
    )
    
}export default AllMeetup