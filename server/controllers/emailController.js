const emailModel = require('../models/emailModel')

module.exports.sendMail = async(req, res) => {
    try {
        const {email} = req.body
        const sendEMail = await emailModel({email}).save()
        res.status(200).json({
            success: true, message: "Email send successfully", sendEMail
        }) 
    } catch (error) {
        console.log(error);
    }
}