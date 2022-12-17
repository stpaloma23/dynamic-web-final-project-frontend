import Header from "../components/Header";
import awesome from "../feelings/awesome.png"
import good from "../feelings/good.png"
import okay from "../feelings/okay.png"
import bad from "../feelings/bad.png"
import awful from "../feelings/awful.png"


function UserProfilePage({userInformation, isLoggedIn, setIsLoggedIn, setUserInformation, moods}){
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
                <p><strong>Name:</strong> {userInformation.displayName}</p>
                <p><strong>Email:</strong> {userInformation.email}</p>
                <p><strong>Number of Entries:</strong> </p>
                <h2><strong>Mood Count:</strong></h2>
                <div className="mood-count-wrapper">
                    <div className="mood-count">
                        <img src={awesome} alt="awesome day emoji"/>
                        <p>{moods["awesome"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={good} alt="good day emoji"/>
                        <p>{moods["good"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={okay} alt="okay day emoji"/>
                        <p>{moods["okay"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={bad} alt="bad day emoji"/>
                        <p>{moods["bad"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={awful} alt="awful day emoji"/>
                        <p>{moods["awful"]} entries</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserProfilePage