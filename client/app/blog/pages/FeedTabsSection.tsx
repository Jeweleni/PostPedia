import React from "react";

interface FeedTabSectionProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const FeedTabSection: React.FC<FeedTabSectionProps> = ({
  setActiveTab,
  activeTab,
}) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const links = [
    {
      title: "For You",
      id: "for-you",
    },
    {
      title: "Featured",
      id: "featured",
    },
    {
      title: "Recent",
      id: "recent",
    },
  ];

  return (
    <div className="w-full rounded-lg border border-stone-300 justify-between items-center flex px-6 h-[70px]">
      <ul className="flex justify-between items-end w-full h-full">
        {links.map((link) => (
          <li
            key={link.id}
            onClick={() => handleTabClick(link.id)}
            className={`cursor-pointer font-bold min-h-[46px] ${
              activeTab === link.id ? "border-b-4 border-primary" : ""
            }`}
          >
            {link.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedTabSection;
