exports = module.exports = {}

exports.asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await Promise.resolve(fn(req, res, next))
        } catch (error) {
            res.status(400).send(error)
        }
    }
}