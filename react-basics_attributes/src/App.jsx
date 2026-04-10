import "./styles.css";

export default function App() {
  return <Article/>;
}


function Article(){
  return <article>
    <h2 className="article__title">My First React Article</h2>

      <label htmlFor="nameInput">Name:</label>
      <input id="nameInput" type="text" />

      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(software)"
        target="_blank"
        rel="noreferrer"
      >
        Click here!! To Learn more about React!!!
      </a>
  </article>
}