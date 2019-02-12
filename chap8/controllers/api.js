// import express from 'express';
// const router = express.Router();
//
// const posts = [
//     {
//         id: 1,
//         title: 'My blog post 1',
//         content: '<p>Content</p>',
//         author: 'Carlos Santana'
//     },
//     {
//         id: 2,
//         title: 'My blog post 2',
//         content: '<p>Content</p>',
//         author: 'Cristina Rojas'
//     },
//     {
//         id: 3,
//         title: 'My blog post 3',
//         content: '<p>Content</p>',
//         author: 'Carlos Santana'
//     }
// ];
//
// router.get('/', (req, res, next) => {
//     res.send(`
//     <p>API Endpoints:</p>
//     <ul>
//         <li>/api/posts</li>
//         <li>/api/post/:id</li>
//     </ul>
//     `);
// });
//
// router.get('/posts', (req, res, next) => {
//     res.json({ response: posts });
// });
//
// router.get('/post/:id', (req, res, next) => {
//     const { params: { id } } = req;
//     const singlePost = posts.find(post => post.id === Number(id));
//
//     if (!singlePost) {
//         res.send({ error: true, message: 'Post not found' });
//     }
//
//     res.json({ response: [singlePost] });
// });
//
// export default router;

import express from 'express';
import {
    createPost,
    findAllPosts,
    findBySlug,
    removePost,
    updatePost
} from './blog';
const router = express.Router();

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
            res.json({ response: [singlePost] });
        }
    });
});

router.post('/post', (req, res, next) => {
    const { title, content } = req.body;

    createPost(title, content, (data, error = false) => {
        if (error) {
            res.json({
                error: true,
                details: error
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