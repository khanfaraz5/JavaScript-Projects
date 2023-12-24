document.addEventListener('DOMContentLoaded', function () {
    const blogData = [
        {
            id: 1,
            title: 'First Blog Post',
            content: 'This is my first post on the blog. It is a short and sweet introduction.',
            excerpt: 'Short and sweet introduction to the first blog post.',
            image: 'first-blog-image.jpg' // Add the path to your image
        },
        {
            id: 2,
            title: 'Second Blog Post',
            content: 'Another exciting post to read! This post is longer and has more content.',
            excerpt: 'Exciting post with more content to read.',
            image: 'second-blog-image.jpg' // Add the path to your image
        }
    ];

    const blogListContainer = document.getElementById('blog-list');

    blogData.forEach(blogPost => {
        const blogPostElement = document.createElement('div');
        blogPostElement.classList.add('blog-post');
        blogPostElement.innerHTML = `
        <h2>${blogPost.title}</h2>
        <p>${blogPost.excerpt}</p>
        <a href="#" class="read-more">Read more</a>`;

        blogListContainer.appendChild(blogPostElement);

        const readMoreLink = blogPostElement.querySelector('.read-more');
        readMoreLink.addEventListener('click', function () {
            navigateToPost(blogPost.id);
        });
    });

    window.navigateToPost = function (postId) {
        const postUrl = `post.html?id=${postId}`;
        window.location.href = postUrl;
    }

    window.closeModal = function () {
        const modal = document.querySelector('.modal');
        modal.parentNode.removeChild(modal);
    }
});
