'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt('Введите новый текст');
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlited = false;
    }

    makeTextHighlighted() {
        this.highlited = true;
    }
}

let text = new Post('Ivan', 'asasdasd', '11.06');

console.log(text);

let postAttachment = new AttachedPost('Ivan', 'asasdasd', '11.06');

console.log(postAttachment)

postAttachment.makeTextHighlighted()

console.log(postAttachment)