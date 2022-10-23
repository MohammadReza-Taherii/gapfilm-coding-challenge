const SideBar = () => {
  const items = [
    { title: "NBA Teams", link: "#" },
    { title: "Actress", link: "#" },
    { title: "Haiti", link: "#" },
    { title: "Authors", link: "#" },
    { title: "Directions", link: "#" },
    { title: "Actors", link: "#" },
    { title: "MLB Teams", link: "#" },
    { title: "Tennis", link: "#" },
    { title: "Singers", link: "#" },
    { title: "Models", link: "#" },
    { title: "TV Shows", link: "#" },
    { title: "Players", link: "#" },
    { title: "Directors", link: "#" },
  ];

  const sorted = items.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="bg-black p-4">
      <ul className=" space-y-3.5 font-sans font-bold">
        {sorted.map((item) => (
          <li key={item.title}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
