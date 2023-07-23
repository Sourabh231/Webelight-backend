const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.getAlluser = async(req,res)=>{
    try{
        const user = await userModel.find({});
        return res.status(201).send({
            sucess:true,
            userCount : user.length,
            message:'All users Data',
            user
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            sucess:false,
            message:'Error in Gel all users',
            err
        })
    }
}



exports.registerController = async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;

        if (!name || !email || !password || !cpassword) {
            return res.status(201).send({
                sucess: false,
                message: 'Please fill all fields'
            })
        }

        //password match
        if (password !== cpassword) {
            return res.status(201).send({
                sucess:false,
                message:'Password and cpassword did not matched'
            })
        }

        //existing users
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(201).send({
                sucess:false,
                message:'User already exists'
            })
        }

        //use bcrypt for hashing password
        const hashPassword = await bcrypt.hash(password,10);

        //save the user
        const user = new userModel({name,email,password:hashPassword,cpassword:hashPassword})
        console.log(user);
        await user.save();

        //generate token
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);

        return res.status(200).send({
            sucess:true,
            message:'sucessfully registerd user',
            user,
            token
        })

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message:'Errors in registered callback',
            sucess:false,
            err
        })
    }
}

//----------------------------------------------------------------------------//

exports.loginController = async (req, res) => {
    try {
          const {email,password} = req.body;
          //validation
          if(!email || !password){
            return res.status(400).send({
                sucess:false,
                message:'Please provide email or passwords'
            })
          }

          const user = await userModel.findOne({email});
          if(!user){
            return res.status(401).send({
                sucess:false,
                message:'Email is Not registered'
            })
          }

          //password does not matched
          const isMatch = await bcrypt.compare(password,user.password);
          if(!isMatch){
            return res.status(400).send({
                sucess:false,
                message:'Password does not matched'
            })
          }

          //generate token 
          const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET);

          return res.status(200).send({
            sucess:true,
            message:'Login Sucessfully',
            token
          })
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            sucess:false,
            message:'Error in Login Callback',
            err
        })
    }
}

