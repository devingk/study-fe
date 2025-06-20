export default function PreventingDefaultBehavior() {
  return (
    <>
      <h3>Default Behavior</h3>
      <form onSubmit={() => alert("Submitting!")}>
        <input />
        <button>Send</button>
      </form>

      <h3>Prenting Default Behavior</h3>
      <form onSubmit={e => {
        e.preventDefault();
        alert("submitting!");
      }}>
        <input />
        <button>Send</button>
      </form>
    </>
  );
}
