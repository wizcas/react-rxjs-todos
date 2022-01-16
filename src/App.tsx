function App() {
  return (
    <div className="mx-auto w-[40ch] max-w-[90vw] py-4">
      <header></header>
      <main className="flex flex-col gap-4 items-stretch">
        <section
          aria-label="input a todo item"
          className="flex flex-row gap-2 items-center"
        >
          <input
            type="text"
            placeholder="What's your next task?"
            className="flex-1"
          />
          <button type="submit">+</button>
        </section>
        <section aria-label="the todo list">
          <ul>
            <li>
              <label className="space-x-2">
                <input type="checkbox" />
                <span>Something I'd like to do.</span>
              </label>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
