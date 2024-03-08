// export default function List({task}){
//     return(
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     )
// }


export default function List({ task, isDone }) {
    if(isDone){
        return <li>Finish: {task}</li>
    }
    else{
        return <li>Working on: {task}</li>
    }
}
