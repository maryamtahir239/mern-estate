import exprress from 'express';

const app = exprress();

app.listen(3000, () => {
    console.log('server is running on port 3000!');
}
);