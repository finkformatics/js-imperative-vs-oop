"use strict";

class Comment {
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
}

class Post {
    constructor(post_id, author, date, title, body) {
        this.post_id = post_id;
        this.author = author;
        this.date = date;
        this._title = title;
        this._body = body;

        this.comments = [];
    }

    set title(new_title) {
        this._title = new_title.trim();
    }

    set body(new_body) {
        this._body = new_body.trim();
    }

    add_comment(name, text) {
        this.comments.push(new Comment(name, text));
    }
}

class Blog {
    constructor() {
        this.posts = {};
    }

    check_post_exists(post_id) {
        if (!(post_id in this.posts)) {
            throw 404;
        }
    }
    
    add_post(post_id, author, date, title, body) {
        // TODO: Throw an error if post id already exists

        this.posts[post_id] = new Post(post_id, author, date, title, body);
    }
    
    get_post(post_id) {
        this.check_post_exists(post_id);
    
        return this.posts[post_id];
    }
    
    all_posts() {
        return this.posts;
    }
    
    delete_post(post_id) {
        this.check_post_exists(post_id);
    
        delete this.posts[post_id];
    }
    
    update_post(post_id, title, body) {
        this.check_post_exists(post_id);
    
        if (!!title) {
            this.posts[post_id].title = title;
        }
    
        if (!!body) {
            this.posts[post_id].body = body;
        }
    }
}