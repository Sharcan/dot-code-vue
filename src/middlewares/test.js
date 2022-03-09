export default function test({ next }) {
    console.log('middleware');
    return next();
}