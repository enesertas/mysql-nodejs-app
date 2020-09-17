const db = require('../util/database');

module.exports = class Data {
    constructor(id,data) {
        this.id = id;
        this.data = data;
    }
    save() {
        return db.execute('INSERT INTO node-mysql (datatostored) VALUES (?)', [this.data]);
    }
}