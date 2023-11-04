import React from 'react';

const UserHomePage: React.FC = () => {
  // Fetch and map the user's blog posts here
  const userBlogs = [
    { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post.' },
    // Add more blog posts here
  ];

  return (
    <div className="mt-8 bg-white p-4 shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Your Blogs</h2>
      <ul>
        {userBlogs.map((blog) => (
          <li key={blog.id} className="mb-4">
            <h3 className="text-xl font-medium">{blog.title}</h3>
            <p className="text-gray-600">{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHomePage;
