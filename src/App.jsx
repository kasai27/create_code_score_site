import React, { useState } from "react";

function App() {
  // 入力される状態管理
  const [title, setTitle] = useState(null);
  const [name, setName] = useState(null);
  const [kapo, setKapo] = useState(null);
  const [key, setKey] = useState(null);
  const [liric, setLiric] = useState(null);

  // キーの入力に対しての返答の状態管理
  const [response, setResponse] = useState('');

  // キーの入力に対してダイアトニックコードのリスト管理
  const [keyList, setKeyList] = useState(["C", "Dm", "Em", "F", "G", "Am", "Bm"]);

  // それぞれ入力された時の関数
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeKapo = (e) => setKapo(e.target.value);
  const onChangeKey = (e) => {
    setKey(e.target.value);
    // ここで入力に応じた返答を設定するロジックを追加
    setResponse(generateResponse(e.target.value));
  }
  const onChangeLiric = (e) => setLiric(e.target.value);

  
  // 入力に応じた返答を生成するロジック
  const generateResponse = (input) => {
    if (input == "C" || input == "Am") {
      setKeyList(["C", "Dm", "Em", "F", "G", "Am", "Bm"])
    } else if (input == "C#" || input == "A#m") {
      setKeyList(["C#", "D#m", "Fm", "F#", "G#", "A#m", "Cm"])
    } else if (input == "D" || input == "Bm") {
      setKeyList(["D", "Em", "F#m", "G", "A", "Bm", "C#m"])
    } else if (input == "E♭" || input == "Cm") {
      setKeyList(["E♭", "Fm", "Gm", "A♭", "B♭", "Cm", "Dm"])
    } else if (input == "E" || input == "C#m") {
      setKeyList(["E", "F#m", "G#m", "A", "B", "C#m", "D#m"])
    } else if (input == "F" || input == "Dm") {
      setKeyList(["F", "Gm", "Am", "B♭", "C", "Dm", "Em"])
    } else if (input == "F#" || input == "D#m") {
      setKeyList(["F#", "G#m", "A#m", "B", "C#", "D#m", "Fm"])
    } else if (input == "G" || input == "Em") {
      setKeyList(["G", "Am", "Bm", "C", "D", "Em", "F#m"])
    } else if (input == "A♭" || input == "Fm") {
      setKeyList(["A♭", "B♭m", "Cm", "D♭", "E♭", "Fm", "Gm"])
    } else if (input == "A" || input == "F#m") {
      setKeyList(["A", "Bm", "C#m", "D", "E", "F#m", "G#m"])
    } else if (input == "B♭" || input == "Gm") {
      setKeyList(["B♭", "Cm", "Dm", "E♭", "F", "Gm", "Am"])
    } else if (input == "B" || input == "G#m") {
      setKeyList(["B", "C#m", "D#m", "E", "F#", "G#m", "A#m"])
    }
  };

  // コードのボタンが押された時のロジック
  const onClickCodeButton = (code) => {
    setLiric((prevContent) => prevContent + code)
  }

  return (
    <div className="App">
      <h1>楽譜作成</h1>

      <form>
        <ul>
          <li>
            <input type="text" placeholder="曲名" onChange={onChangeTitle} />
          </li>
          <li>
            <input type="text" placeholder="アーティスト名" onChange={onChangeName} />
          </li>
          <li>
            <input type="text" placeholder="カポ" onChange={onChangeKapo} />
          </li>
          <li>
            <select name="key" value={key} onChange={onChangeKey}>
              <optgroup label="メジャーキー">
                <option value="C">C</option>
                <option value="C#">C#</option>
                <option value="D">D</option>
                <option value="E♭">E♭</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="F#">F#</option>
                <option value="G">G</option>
                <option value="A♭">A♭</option>
                <option value="A">A</option>
                <option value="B♭">B♭</option>
                <option value="B">B</option>
              </optgroup>
              <optgroup label="マイナーキー">
                <option value="Am">Am</option>
                <option value="A#m">A#m</option>
                <option value="Bm">Bm</option>
                <option value="Cm">Cm</option>
                <option value="C#m">C#m</option>
                <option value="Dm">Dm</option>
                <option value="D#m">D#m</option>
                <option value="Em">Em</option>
                <option value="Fm">Fm</option>
                <option value="F#m">F#m</option>
                <option value="Gm">Gm</option>
                <option value="G#m">G#m</option>
              </optgroup>
              
            </select>
            {/* <input type="text" value={key} placeholder="キー" onChange={onChangeKey} /> */}
          </li>
        </ul>
      </form>
          
      <form>
        <button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[0])}}>{keyList[0]}</button>
        <button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[1])}}>{keyList[1]}</button>
        <button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[2])}}>{keyList[2]}</button>
        <button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[3])}}>{keyList[3]}</button>
        <button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[4])}}>{keyList[4]}</button>
        <button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[5])}}>{keyList[5]}</button>
        <button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[6])}}>{keyList[6]}</button>
      </form>
      <input type="text" value={liric} onChange={onChangeLiric} placeholder="歌詞，コード" />
      <button type="submit" >作成</button>

    </div>
  );
};

export default App;
