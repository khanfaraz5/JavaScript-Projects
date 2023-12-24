document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const selectedPost = blogData.find(post => post.id === parseInt(postId));

    if (selectedPost) {
        const postContentContainer = document.getElementById('post-content');
        const postContentElement = document.createElement('div');
        postContentElement.innerHTML = `
            <h2>${selectedPost.title}</h2>
            <p>${selectedPost.content}</p>
        `;
        postContentContainer.appendChild(postContentElement);
    } else {
        // Instead of alert, you can redirect to the home page or display a message
        // window.location.href = 'blog.html'; // Uncomment this line to redirect to the home page
        const postContentContainer = document.getElementById('post-content');
        const postContentElement = document.createElement('div');
        postContentElement.innerHTML = '<p>Blog post not found.</p>';
        postContentContainer.appendChild(postContentElement);
    }
});
