import  React,{CreateContext, useContext} from 'react';
 
export const UserContext =("UserContext")
export const CreateContext = () => {
    const user = {
        name: "John Doe",
        email: "joh@gamil.com",
        age: 30
    };

    return (
        <UserContext.Provider value={user}>
            <ChildComponent />
        </UserContext.Provider>
    );
}
