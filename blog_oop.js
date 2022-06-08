"use strict";

// This is a comment representation
class Comment {
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
}

// This is a post representation
class Post {
    constructor(post_id, author, date, title, body) {
        this.post_id = post_id;
        this.author = author;
        this.date = date;

        // If those two would be called this.title and this.body we would have an inifinite recursion inside the getters and setters
        this._title = title;
        this._body = body;

        // No need to set this from outside, a new post always has 0 comments at first
        this.comments = [];
    }

    // The setter for title
    set title(new_title) {
        this._title = new_title.trim();
    }

    // The getter for title
    get title() {
        return this._title;
    }

    // The setter for body
    set body(new_body) {
        this._body = new_body.trim();
    }

    // The getter for body
    get body() {
        return this._body;
    }

    // Adds a comment
    add_comment(name, text) {
        this.comments.push(new Comment(name, text));
    }
}

// A blog representation, holds the main functionality
class Blog {
    constructor() {
        // Every blog has at first 0 posts
        this.posts = {};
    }

    // Helper method to check if post exists
    check_post_exists(post_id) {
        if (!(post_id in this.posts)) {
            throw 404;
        }
    }
    
    // Adds a new post
    add_post(post_id, author, date, title, body) {
        // TODO: Throw an error if post id already exists

        this.posts[post_id] = new Post(post_id, author, date, title, body);
    }
    
    // Gets a post by its id
    get_post(post_id) {
        this.check_post_exists(post_id);
    
        return this.posts[post_id];
    }
    
    // Return all posts
    all_posts() {
        return this.posts;
    }
    
    // Delete a single post
    delete_post(post_id) {
        this.check_post_exists(post_id);
    
        delete this.posts[post_id];
    }
    
    // Updates a single post
    update_post(post_id, title, body) {
        this.check_post_exists(post_id);
    
        if (title) {
            this.posts[post_id].title = title;
        }
    
        if (body) {
            this.posts[post_id].body = body;
        }
    }
}