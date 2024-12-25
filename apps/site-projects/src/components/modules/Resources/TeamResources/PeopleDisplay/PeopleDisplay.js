import { PeopleDisplayContainer } from "./StyledPeopleDisplay";
const defaultImg = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

function PeopleDisplay({ name, role, team, link, img_url }) {
    return (
        <PeopleDisplayContainer>
            <div className="pfp sides">
                <img src={img_url ?? defaultImg} alt="User Profile Picture" />
            </div>
            <div className="userInfo sides">
                <h3>{name ?? "Unknown"}</h3>
                <span>{role ?? "Unknown"}</span>
                <p>{team ?? "Unknown"}</p>
                <a href={link ?? "#"}>User Profile</a>
            </div>
        </PeopleDisplayContainer>
    )
}

export default PeopleDisplay;