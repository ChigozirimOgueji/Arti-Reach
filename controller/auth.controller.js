import ClientService from "../services/client.service.js";
import ArtisanService from "../services/artisan.service.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
   
    async createClient(req,res){
        const { body } = req;
        body.email = body.email.toLowerCase();

        // check if client is registered by checking if email is registered

        const existingUserEmail = await ClientService.findClient({
            email: body.email,
          });
          if (existingUserEmail) {
            return res.status(404).send({
              success: false,
              message: "Email already exists",
            });
          }

         //encrypt the password
         const salt = await bcrypt.genSalt(10);
         const encryptedPassword = await bcrypt.hash(body.password, salt);
 
         //create the new user
         const newUser = await ClientService.createClient({
             ...body,
             password: encryptedPassword,
         });


         const token = jwt.sign({
            _id: newUser._id,
            email: newUser.email,
        },
            process.env.SECRET,
            { expiresIn: 3 * 24 * 60 * 60 }
        );

        //pass the cookie to the frontend which keeps the user logged in for a certain period of time
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        //send back a response with the user details
        return res.status(201).send({
            success: true,
            message: "Client successfully signed up",
            newUser
        })
    }

    async loginClient(req,res){
    // get the user data from req.body
        const clientData = req.body;

    // find the user in database
        const client = await ClientService.findClient({
            email: clientData.email
        })

        if (!client) {
            return res.status(401).json({ message: 'Invalid username or password' });
          }


        //compare the password in the database with the one the ine the user provides
        const isValidPassword = await bcrypt.compare(clientData.password, client.password);

        //if the password is different we stop the user frim logging in
        if (!isValidPassword) {
            return res.status(400).send({
                success: false,
                message: "Invalid password"
            })
        }

        //create a token which is used to validate the user is a valid user
        const token = jwt.sign({
            _id: client._id,
            email: client.email
        },
            process.env.SECRET,
            { expiresIn: 3 * 24 * 60 * 60 }
        );

        //pass the cookie to the frontend which keeps the user logged in for a certain period of time
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        //send back a response with the user details
        return res.status(200).send({
            success: true,
            message: "User successfully logged in",
            client
        })
    }

  
    async createArtisan(req,res){
        const { body } = req;
        body.email = body.email.toLowerCase();

        // check if client is registered by checking if email is registered

        const existingUserEmail = await ArtisanService.findArtisan({
            email: body.email,
          });
          if (existingUserEmail) {
            return res.status(404).send({
              success: false,
              message: "Email already exists",
            });
          }

         //encrypt the password
         const salt = await bcrypt.genSalt(10);
         const encryptedPassword = await bcrypt.hash(body.password, salt);
 
         //create the new user
         const newUser = await ArtisanService.createArtisan({
             name: body.name,
             email: body.email,
             phoneNumber: body.phoneNumber,
             password: encryptedPassword,
         });


         const token = jwt.sign({
            _id: newUser._id,
            email: newUser.email,
        },
            process.env.SECRET,
            { expiresIn: 3 * 24 * 60 * 60 }
        );

        //pass the cookie to the frontend which keeps the user logged in for a certain period of time
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000
        })

        //send back a response with the user details
        return res.status(201).send({
            success: true,
            message: "Artisan successfully signed up",
            newUser
        })
    }

    async loginArtisan(req,res){
        // get the user data from req.body
        const artisanData = req.body;

    // find the user in database
     const artisan = await ArtisanService.findArtisan({
         email: artisanData.email
     })

     if (!artisan) {
         return res.status(401).json({ message: 'Invalid username'});
       }

     //compare the password in the database with the one the ine the user provides
     const isValidPassword = await bcrypt.compare(artisanData.password, artisan.password);

     //if the password is different we stop the user frim logging in
     if (!isValidPassword) {
         return res.status(400).send({
             success: false,
             message: "Invalid password"
         })
     }

     //create a token which is used to validate the user is a valid user
     const token = jwt.sign({
         _id: artisan._id,
         email: artisan.email
     },
         process.env.SECRET,
         { expiresIn: 3 * 24 * 60 * 60 }
     );

     //pass the cookie to the frontend which keeps the user logged in for a certain period of time
     res.cookie("token", token, {
         httpOnly: true,
         maxAge: 3 * 24 * 60 * 60 * 1000
     })

     //send back a response with the user details
     return res.status(200).send({
         success: true,
         message: "User successfully logged in",
         artisan
     })
    }


    async logout(req,res){
        res.cookie("myToken", "", {
            httpOnly: true,
            expiresIn: new Date(0),
            // maxAge: new Date(0),
          });
      
          return res.status(200).send({
            success: true,
            message: "User successfully logged out"
          });
    }
}

export default new AuthController();