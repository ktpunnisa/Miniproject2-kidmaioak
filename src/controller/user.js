const userModel = require("../model/user")

exports = module.exports = {}

exports.getUser = async (req, res) => {
    const result = await userModel.getUser();
    res.json(result);
}