import profile from "../../../public/assets/profile.png";
import { AiOutlineComment } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import Image, { StaticImageData } from "next/image";

type PostCardProps = {
  id: string;
  name: string;
  role: string;
  date: string;
  title: string;
  readTime: string;
  content: string;
  comments: number;
  likes: number;
  views: number;
  image: string | StaticImageData;
};

const PostCard = ({
  id,
  name,
  role,
  date,
  title,
  readTime,
  content,
  comments,
  likes,
  views,
  image,
}: PostCardProps) => {
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <div className="flex gap-3 justify-start items-center w-full">
        <Image
          className="w-24 h-24 rounded-full object-cover object-center"
          src={profile}
          alt="Author"
        />

        <div className="flex flex-col">
          <h2 className="text-black text-lg md:text-2xl font-medium">{name}</h2>
          <div className="flex gap-2">
            <p className="text-zinc-600 md:text-lg">{role}.</p>
            <p className="text-zinc-600 md:text-lg">{date}.</p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <p className="text-black text-lg leading-tight md:text-2xl font-semibold">
        {title}
      </p>
      <div className="flex gap-2 justify-start items-center text-zinc-600">
        <VscBook /> {readTime} read
      </div>
      <p className="text-zinc-600 md:text-sm">{content}</p>
      <div className="w-full bg-stone-300 rounded-lg">
        <Image
          width={0}
          height={0}
          loading="lazy"
          unoptimized
          className="w-full object-center object-cover rounded-lg"
          src={image}
          alt="Article"
        />
      </div>

      {/* Article Stats */}
      <div className="w-full flex justify-between items-center gap-5 text-sm md:text-base">
        <div className="flex justify-center items-center gap-1">
          <AiOutlineComment />
          <p className="text-zinc-600">{comments}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <BiLike />
          <p className="text-zinc-600">{likes}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <BsActivity />
          <p className="text-zinc-600"> {views} views</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
