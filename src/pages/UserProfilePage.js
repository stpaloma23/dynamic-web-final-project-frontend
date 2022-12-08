import Header from "../components/Header";

function UserProfilePage({userInformation, isLoggedIn, setIsLoggedIn, setUserInformation}){
    return (
        <div className="page-wrapper profile-page-wrapper">
            <Header
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                userInformation={userInformation}
                setUserInformation={setUserInformation}
            />
            <div className="profile-page-contents">
                <h1>My Profile Page</h1>
            </div>
        </div>
    );
}
export default UserProfilePage