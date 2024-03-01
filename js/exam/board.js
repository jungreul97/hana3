async function getPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        const results = await Promise.all(posts.map(async post => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
            const comments = await res.json();
            return {
                postId: post.id,
                title: post.title,
                comments: comments
            };
        }));
        
        return results;
    } catch (error) {
        console.error("오류가 발생했습니다: ", error);
    }
}

getPosts(1)
  .then(data => console.log(data))
  .catch(error => console.error(error));
