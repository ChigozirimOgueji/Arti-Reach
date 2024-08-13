import jwt from "jsonwebtoken";
import ClientService from "../services/client.service.js";
import ArtisanService from "../services/artisan.service.js";

async function authenticateClient(req, res, next) {

    // console.log(req.cookies)
    //get the cookie
    const token = await req.cookies.token;

    //no cookie
    if (!token) {
        return res.status(401).send({
            success: false,
            message: "No token found, please log in"
        })
    }

    //find the cookie
    //decrypt the cookie
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        //if err we send an error response
        if (err) {
            return res.status(401).send({
                success: false,
                message: "Invalid token, please log in"
            })
        }

        //with the _id find the user in the database
        const user = await ClientService.findClient({ _id: decoded._id })
        //user doesn't exist
        if(!user) {
            return res.status(401).send({
                success: false,
                message: "Invalid id, please log in"
            })
        }
        //find the user
        req.user = user;
        next();
    })
}

async function authenticateArtisan(req, res, next) {
// console.log(req.cookies)
    //get the cookie
    const token = await req.cookies.token;

    //no cookie
    if (!token) {
        return res.status(401).send({
            success: false,
            message: "No token found, please log in"
        })
    }

    //find the cookie
    //decrypt the cookie
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        //if err we send an error response
        if (err) {
            return res.status(401).send({
                success: false,
                message: "Invalid token, please log in"
            })
        }

        //with the _id find the user in the database
        const user = await ArtisanService.findArtisan({ _id: decoded._id })
        //user doesn't exist
        if(!user) {
            return res.status(401).send({
                success: false,
                message: "Invalid id, please log in"
            })
        }
        //find the user
        req.user = user;
        next();
    })

}
export {authenticateClient, authenticateArtisan};