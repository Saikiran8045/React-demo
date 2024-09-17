import {useState} from 'react';
function List(){
    const [marks,setMarks]=useState([10,20,30,40,50])
    return(
        <div>
        {
            marks.map((item)=>{
                return <p>{item}</p>
            })
        }
        </div>
    )
    
}
export default List;