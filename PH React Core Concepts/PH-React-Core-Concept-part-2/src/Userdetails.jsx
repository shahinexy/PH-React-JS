export default function UsersDetails({details}){
    console.log(details);
    const {name, email} = details;
    return(
        <div className="box">
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
        </div>
    )
}
