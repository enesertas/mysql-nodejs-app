const Data = require('../models/data');

    exports.getIndex = (req, res, next) => {
        res.render('index');
    }

    exports.postAddData = (req, res, next) => {
        const cekilendata = req.body.gonderilendata;
        const data = new Data(null, cekilendata);
        data.save()
        .then(res.redirect('/'))
        .catch(err => (console.log(err)));
    }