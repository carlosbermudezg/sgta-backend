const catchError = require('../utils/catchError');
const Os = require('../models/Os');

const getAll = catchError(async(req, res) => {
    const { page, limit } = req.query

    if(!page || !limit){
        return res.status(400).json({
            message : 'Debe definir el límite y página de la consulta'
        })
    }

    const offset = (page - 1) * limit
    const results = await Os.allOs(limit, offset)
    const totalPagesData = await Os.countOs()
    const totalPages = Math.ceil(totalPagesData[0][0]?.count / limit)

    return res.status(200).json({
        data: results[0],
        pagination: {
            page: +page,
            limit: +limit,
            totalPages: totalPages,
            totalOs: totalPagesData[0][0]?.count
        }
    });
});


module.exports = {
    getAll
}