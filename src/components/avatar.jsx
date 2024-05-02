const Avatar = ({ fullName }) => {
  const getRandomColor = () => {
    const colors = [
      "#f44336",
      "#e91e63",
      "#9c27b0",
      "#673ab7",
      "#3f51b5",
      "#2196f3",
      "#03a9f4",
      "#00bcd4",
      "#009688",
      "#4caf50",
      "#8bc34a",
      "#cddc39",
      "#ffeb3b",
      "#ffc107",
      "#ff9800",
      "#ff5722",
      "#795548",
      "#9e9e9e",
      "#607d8b",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getInitials = (name) => {
    const nameArray = name.split(" ");
    return nameArray
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const bgColor = getRandomColor();

  return (
    <div
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300"
      style={{ backgroundColor: bgColor }}
    >
      <span className="text-white font-bold">{getInitials(fullName)}</span>
    </div>
  );
};

export default Avatar;
