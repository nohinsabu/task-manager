const {customAPIError} = require('../errors/custom-error')

const errorHandler = (err,req,res,next)=>{
    if(err instanceof customAPIError){
        res.status(err.statusCode).json({msg: err.message})
    }
    res.status(500).json(`something went wrong, try again later`)
}

module.exports = errorHandler 