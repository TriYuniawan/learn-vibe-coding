import { Elysia } from 'elysia';
import { node } from '@elysiajs/node';

const app = new Elysia({ adapter: node() })
    .get('/', () => 'Hello World from Elysia via Node.js!')
    .listen(3000, () => {
        console.log('🦊 Elysia is running on Node at http://localhost:3000');
    });
