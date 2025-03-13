const errorHandler = (err, req, res, next) => {
    console.error(err.message)
    if(err.name === 'CastError' ){
        return res.status(400).json({error: 'invalid id'})
    }
    if(err.name === 'Not found'){
        return res.status(404).json({error: 'Not found'})
    }

    next(err)
}
module.exports = errorHandler