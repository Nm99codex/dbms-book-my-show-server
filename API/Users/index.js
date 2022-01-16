// http://localhost:5000/user-register
app.post('/user-register' , async(req,res) => {
    const addNewUser = await UserModel.create(req.body);
    return res.json({userAdded: addNewUser, message:"User was added!!!"})
})