import React from 'react';

function CreateUserForm({createUser}) {
    return (
        <form className='form-element' onSubmit={(e) =>createUser(e)}>
            <label for="userName">User Name</label>
            <input type="text" name="userName"/>

            <label for="userPassword">Password</label>
            <input type="password" name="userPassword"/>

            <label for="userEmail">Email</label>
            <input type="text" name="userEmail"/>

            <button className="login-submit-btn" type="submit">Submit</button>
        </form>
    );
}
export default CreateUserForm;