const {User} = require('../models')
const {verifyToken} = require('../helpers/helper')

const authentication =
async (req, res, next) => {
    try {
      let { access_token } = req.headers  
      // console.log(access_token);
      if (!access_token) {
        let access_token=req.body.headers.access_token
        if(!access_token){
          throw { name: "token error" };
        }
      }
      let payload = verifyToken(access_token);
      let user = await User.findByPk(payload.id);
      
      if (!user) {
        throw { name: "token error" };
      }
      req.loggedUser = {
        id: user.id,
        email:user.email
      };
      next();
    } catch (error) {
        next(error)
    }
  }

  module.exports = authentication