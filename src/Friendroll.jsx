export default function FriendsRoll({names}){
    return(
        <div className="stdetails">
            <h3>Name: {names.name}</h3>
            <p>Roll: {names.roll}</p>
        </div>
    )
}