"use strict";

const posts = {};

const check_post_exists = function (post_id) {
    if (!(post_id in posts)) {
        throw 404;
    }
};

const add_post = function (post_id, author, date, title, body) {
    posts[post_id] = {
        post_id: post_id,
        author: author,
        date: date,
        title: title,
        body: body,
        comments: [],
    };
};

const get_post = function (post_id) {
    check_post_exists(post_id);

    return posts[post_id];
};

const all_posts = function () {
    return posts;
};

const delete_post = function (post_id) {
    check_post_exists(post_id);

    delete posts[post_id];
};

const update_post = function (post_id, title, body) {
    check_post_exists(post_id);

    if (!!title) {
        posts[post_id].title = title;
    }

    if (!!body) {
        posts[post_id].body = body;
    }
};

const add_comment = function (post_id, name, comment) {
    check_post_exists(post_id);

    const post = posts[post_id];
    post.comments.push({
        name: name,
        comment: comment,
    });
};
