import React from "react";

function App() {
  return (
    <div className="App">
      <h1>楽譜作成</h1>
      <form>
        <ul>
          <li>
            <input type="text" placeholder="曲名"/>
          </li>
          <li>
            <input type="text" placeholder="アーティスト名"/>
          </li>
          <li>
            <input type="text" placeholder="キー"/>
          </li>
          <li>
            <input type="text" placeholder="カポ"/>
          </li>
        </ul>
        <input type="text" placeholder="歌詞，コード" />
      </form>
      
      
      <button type="submit">作成</button>
    </div>
  );
}

export default App;
