const Data = require('../models/data');
exports.getIndex = (req, res, next) => {
    res.render('index');
}
exports.postAddData = (req, res, next) => {
    const cekilendata1 = req.body.gonderilendata1;
    const cekilendata2 = req.body.gonderilendata2;
    const data = new Data(null, cekilendata1, cekilendata2);
    data.save()
        .then(() => {
            res.redirect('/')
        })
        .catch(err => (console.log(err)));
}
exports.getViewDatas = (req, res, next) => {
    Data.fetchAll()
        .then(([rows]) => {
            res.render('view-database.ejs', {
                datas: rows
            })
        })
        .catch((err) => {
            console.log(err)
        });
}
exports.postDeleteAll = (req, res, next) => {
    Data.deleteRows()
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
}