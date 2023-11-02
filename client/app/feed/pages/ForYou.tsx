import React from "react";
import PostCard from "../../(components)/navigation/PostCard";
import post from "../../../public/assets/post.png";

interface ForYouPageProps {
  id: string;
}

const ForYouPage: React.FC<ForYouPageProps> = ({ id }) => {
  return (
    <div id={id} className="w-full">
      <PostCard
        id="1"
        name="John Doe"
        role="Author"
        date="Jun 2021"
        title="How to build a website with React, Tailwind CSS, and Next.js"
        readTime="5 min"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
              diam eu massa mattis aliquet. Sed vitae nulla euismod, ultricies
              sapien vitae, aliquet nisl. Nullam id quam euismod, aliquam
              sapien vitae, aliquet nisl. Nullam id quam euismod, aliquam
              sapien vitae, aliquet nisl."
        comments={10}
        likes={100}
        views={1000}
        image={post}
      />
      <hr className="my-5" />
      <PostCard
        id="1"
        name="John Doe"
        role="Author"
        date="Jun 2021"
        title="How to build a website with React, Tailwind CSS, and Next.js"
        readTime="5 min"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
              diam eu massa mattis aliquet. Sed vitae nulla euismod, ultricies
              sapien vitae, aliquet nisl. Nullam id quam euismod, aliquam
              sapien vitae, aliquet nisl. Nullam id quam euismod, aliquam
              sapien vitae, aliquet nisl."
        comments={10}
        likes={100}
        views={1000}
        image={post}
      />
      <hr className="my-5" />
      <PostCard
        id="1"
        name="John Doe"
        role="Author"
        date="Jun 2021"
        title="How to build a website with React, Tailwind CSS, and Next.js"
        readTime="5 min"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
              diam eu massa mattis aliquet. Sed vitae nulla euismod, ultricies
              sapien vitae, aliquet nisl. Nullam id quam euismod, aliquam
              sapien vitae, aliquet nisl. Nullam id quam euismod, aliquam
              sapien vitae, aliquet nisl."
        comments={10}
        likes={100}
        views={1000}
        image={post}
      />
      <hr className="my-5" />
    </div>
  );
};

export default ForYouPage;
