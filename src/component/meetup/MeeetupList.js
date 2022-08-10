import MeetupItem from "./MeetupItem"
import style from"./MeetupList.module.css"

function MeetupList(props)
{
    const{places}=props
    
return(

    <div>
    <ul className={style.list}>
    
    {places.map((place)=> 

        <MeetupItem 
        key={place.id} 
        img={place.image} 
        title={place.title}
        description={place.description}
        />
        
        )}
    
    </ul>
    
    
    </div>
)
}export default MeetupList