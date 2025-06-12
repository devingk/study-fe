const firstNames = ["Kim", "Lee", "Park", "Choi", "Cha"];

export default function List() {

  const listItems = firstNames.map((firstName) => <li>{firstName}</li>);

  return (
    <>
        <h1>List practice</h1>
        <ul>{listItems}</ul>
    </>
  )
}
