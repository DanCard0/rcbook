import express from 'express';
const router = express.Router();

import {
    createPost,
    findAllPosts,
    findBySlug,
    removePost,
    updatePost
} from './blog';

router.get('/', (req, res, next) => {
    res.send(`
        <p>API Endpoints:</p>
        <ul>
            <li><a href="/api/posts">/api/posts</a></li>
            <li><a href="/api/post/1">/api/post/:id</a></li>
        </ul>
    `);
});

router.get('/posts', (req, res, next) => {
    findAllPosts(posts => {
        res.json({ response: posts });
    });
});

router.get('/post/:slug', (req, res, next) => {
    const { params: { slug } } = req;

    findBySlug(slug, singlePost => {
        console.log('single', singlePost);

        if (!singlePost || singlePost.length === 0) {
            res.send({
                error: true,
                message: 'Post not found'
            });
        } else {
            res.json({
                response: [singlePost]
            });
        }
    });
});

router.post('/post', (req, res, next) => {
    const { title, content } = req.body;

    createPost(title, content, (data, error = false) => {
        if (error) {
            res.json({
                error: true,
                message: error
            });
        } else {
            res.json({
                response: {
                    saved: true,
                    post: data
                }
            });
        }
    });
});

router.delete('/post/:slug', (req, res, next) => {
    const { params: { slug } } = req;

    removePost(slug, (removed, error) => {
        if (error) {
            res.json({
                error: true,
                message: 'There was an error trying to remove this post...'
            });
        } else {
            res.json({
                response: {
                    removed: true
                }
            })
        }
    });
});

router.put('/post/:slug', (req, res, next) => {
    const { params: { slug }, body: { title, content } } = req;

    updatePost(slug, title, content, (affected, error) => {
        if (error) {
            res.json({
                error: true,
                message: 'There was an error trying to update the post'
            });
        } else {
            res.json({
                response: {
                    updated: true,
                    affected
                }
            })
        }
    });
});

export default router;