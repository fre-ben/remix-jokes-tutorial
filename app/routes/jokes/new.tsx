export default function JokesNewRoute() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" placeholder="Name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea placeholder="Your joke goes here" />
          </label>
        </div>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </div>
  );
}
