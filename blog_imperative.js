"use strict";

// Holder of blogs
const blogs = {};

// Helper function to raise an error if post with id does not exist
const check_post_exists = function (blog, post_id) {
    if (!(post_id in blog.posts)) {
        throw 404;
    }
};

// Adds a new post to a given blog
const add_post = function (blog, post_id, author, date, title, body) {
    blog.posts[post_id] = {
        post_id: post_id,
        author: author,
        date: date,
        title: title,
        body: body,
        comments: [],
    };
};

// Retrieves a single post by its id
const get_post = function (blog, post_id) {
    check_post_exists(blog, post_id);

    return blog.posts[post_id];
};

// Retrieves all posts from a blog
const all_posts = function (blog) {
    return blog.posts;
};

// Deletes a post from a blog
const delete_post = function (blog, post_id) {
    check_post_exists(blog, post_id);

    delete blog.posts[post_id];
};

// Updates a post in a given blog
const update_post = function (blog, post_id, title, body) {
    check_post_exists(blog, post_id);

    // Only change it if set
    if (title) {
        blog.posts[post_id].title = title;
    }

    // Only change it if set
    if (body) {
        blog.posts[post_id].body = body;
    }
};

// Adds a comment to a given post
const add_comment = function (post, name, comment) {
    post.comments.push({
        name: name,
        comment: comment,
    });
};
