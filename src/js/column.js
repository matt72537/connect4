
class Column {

	constructor(numberOfRows, cells = []) {
		this._numberOfRows = numberOfRows;
		this._cells = cells;
	}


	play(token) {
		if(this._cells.length < this._numberOfRows) {
            return new Column(this._numberOfRows, this._cells.concat(token));
        }

        throw new Error('Column already full');
	}
}

export default Column