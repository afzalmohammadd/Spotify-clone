const router = require("express").Router();
const {User,validate} = require("../models/user")
const bcrypt = require("bcrypt");


router.post("/login", async (req, res) => {
	const user = await User.findOne({ email: req.body.email });
	if (!user)
		return res.status(400).send({ message: "invalid email or password!" });

    // console.log(user,"found user");
    console.log(user.password,"found user");
	const validPassword = await bcrypt.compare(req.body.password, user.password);
    console.log(validPassword,"found validPassword");
	if (!validPassword)
		return res.status(400).send({ message: "Invalid email or password!" });

	const token = user.generateAuthToken();
    
    return res.cookie("access_token", token, { httpOnly: true }).status(200).send({ data: user, message: "Signing in please wait..." });

});


router.post("/signup",async(req,res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send({message: error.details[0].message })

    const user = await User.findOne({email:req.body.email})
    if(user){
         return res.status(403).send({message:"User with given email already exist!"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let newUser = await new User({
        ...req.body,
        password:hashPassword
    }).save()
    
    newUser.password = undefined
    newUser.__v = undefined

    res.status(200).send({data:newUser, message:"Account created succesfully"})
})

module.exports = router;
