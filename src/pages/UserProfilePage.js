import Header from "../components/Header";
import awesome from "../feelings/awesome.png"
import good from "../feelings/good.png"
import okay from "../feelings/okay.png"
import bad from "../feelings/bad.png"
import awful from "../feelings/awful.png"


function UserProfilePage({userInformation, isLoggedIn, setIsLoggedIn, setUserInformation, postData}){
    var dict = {"awesome":0, "good":0, "okay": 0, "bad":0, "awful":0};
    console.log(postData.post);

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
                <h2>Current Mood:</h2>
                <div className="current-mood-pfp"></div>
                <p>Name: {userInformation.displayName}</p>
                <p>Email: {userInformation.email}</p>
                <p>Number of Entries: </p>
                <h2>Mood Count:</h2>
                <div className="mood-count-wrapper">
                    <div className="mood-count">
                        <img src={awesome} alt="awesome day emoji"/>
                        <p>{dict["awesome"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={good} alt="good day emoji"/>
                        <p>{dict["good"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={okay} alt="okay day emoji"/>
                        <p>{dict["okay"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={bad} alt="bad day emoji"/>
                        <p>{dict["bad"]} entries</p>
                    </div>
                    <div className="mood-count">
                        <img src={awful} alt="awful day emoji"/>
                        <p>{dict["awful"]} entries</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserProfilePage