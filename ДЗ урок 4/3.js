'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function() {
    this.text = prompt('Введите новый текст');
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlited = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

let text = new Post('Ivan', 'asasdasd', '11.06');

console.log(text);

let postAttachment = new AttachedPost('Ivan', 'asasdasd', '11.06');

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlited = true;
}

postAttachment.makeTextHighlighted()

console.log(postAttachment)