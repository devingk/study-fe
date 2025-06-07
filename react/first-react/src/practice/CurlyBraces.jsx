export default function CurlyBraces() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "image description";

  const today = new Date();

  const person = {
    name: "Cha Minkwang",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={avatar} alt={description} />
      <h2>Today is {formatDate(today)}</h2>
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
