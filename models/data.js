const db = require('../util/database');

module.exports = class Data {
    constructor(id, data1, data2) {
        this.id = id;
        this.data1 = data1;
        this.data2 = data2;
    }
    save() {
        return db.execute('INSERT INTO user (username, password) VALUES (?, ?);', [this.data1, this.data2]);
    }
    static deleteRows() {
        return db.execute('DELETE FROM user')
    }
    static fetchAll() {
        return db.execute('SELECT * FROM user')
    }

}