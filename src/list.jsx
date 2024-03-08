// export default function List({task, isDone}){
//     return(
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     )
// }

// conditional rendaring: 01.
// export default function List({ task, isDone }) {
//     if(isDone){
//         return <li>Finish: {task}</li>
//     }
//     else{
//         return <li>Working on: {task}</li>
//     }
// }


// Conditional rendaring: 02.   (tarnary operatore.)
// export default function List({task, isDone}){
//     return(
//         <div>
//             <li>{isDone ? 'Finished' : 'Working'} {task}</li>
//         </div>
//     )
// }


// Conditional rendaring: 02.   (&&)
// export default function List({task, isDone}){
//     return(
//         <div>
//             <li>{task} {isDone && ': Done'}</li>
//         </div>
//     )
// }

// Conditional rendaring: 02.   (||)
export default function List({task, isDone}){
    return(
        <div>
            <li>{task} {isDone || ': Not yet'}</li>
        </div>
    )
}