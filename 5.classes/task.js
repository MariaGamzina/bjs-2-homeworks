class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this._state = this._state * 1.5 > 100 ? 100 : this._state * 1.5;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (this.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const findBook = this.books.find(item => item[type] === value);
		return !!findBook ? findBook : null;
	}

	giveBookByName(bookName) {
		const indexBook = this.books.findIndex(book => this.books.name === bookName);
		if (indexBook !== -1) {
			return this.books.splice(indexBook, 1)[0];
		}
		return null;
	}
}

const library = new Library("Моя библиотека");

library.addBook(
	new FantasticBook(
		"Джоан Роулинг",
		"Гарри Поттер и Кубок Огня",
		2000,
		546
	)
);

library.addBook(
	new DetectiveBook(
		"Агата Кристи",
		"Убийство в Восточном экспрессе",
		1934,
		347
	)
);

library.addBook(
	new NovelBook(
		"Николас Спаркс",
		"Дневник памяти",
		1996,
		605
	)
);

library.addBook(
	new Magazine(
		"Лиза",
		2024,
		98
	)
);

console.log(library.findBookBy(releaseDate, 1919));

const grishin = library.addBook(
	new NovelBook(
		"Антон Гришин",
		"Пять",
		1919,
		45
	)
);

console.log(library.findBookBy(releaseDate, 1919));

console.log("Количество книг до выдачи: " + library.books.length);
console.log(library.giveBookByName("Дневник памяти"));
console.log("Количество книг после выдачи: " + library.books.length);

console.log(grishin.state(80));

console.log(grishin.state(100));

library.addBook(grishin);

console.log(library);