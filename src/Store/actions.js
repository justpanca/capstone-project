const accessLogin = (query) => ({
    type: "Auth/AccessLogin",
    payload: query
});
const buyCourse = (query) => ({
    type: "My/Course",
    payload: query
});

export { accessLogin, buyCourse };