import MeetupItem from "./MeetupItem"
import style from"./MeetupList.module.css"
function MeetupList(props)
{
    const{foods}=props
    
return(
    <div>
    <ul className={style.list}><li></li></ul>
    {foods.map((food)=> 
        <MeetupItem key={food.id} 
        id={food.id} 
        image={food.image} 
        title={food.title}
        discription={food.discription}/>)}
    </div>
)
}export default MeetupList