import axiosSecure from "."

// save user data in database
export const saveUser = async (user,blood_group,district,upazila) => {
    const currentUser = {
        name: user?.displayName,
        email: user?.email,
        image : user?.photoURL,
        blood_group,
        district,
        upazila,
        role: 'Donar',
        status: 'active'
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
    return data;
}

// update user
export const updateProfile = async(email,updateInfo) =>{
    const {data} = await axiosSecure.patch(`/updateProfile/${email}`,updateInfo);
    return data;
}
// get token from server
export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', email);
    console.log('token received from server-->', data);
    return data;
}
// clear token from browser or logout
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout');
    return data;
}
// get user
export const getUser= async(email) =>{
    const {data} = await axiosSecure(`/user/${email}`);
    return data;
}