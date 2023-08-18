import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

function App() {
  // 入力される状態管理
  const [title, setTitle] = useState(null);
  const [name, setName] = useState(null);
  const [originalKey, setOriginalKey] = useState(null);
  const [kapo, setKapo] = useState(null);
  const [playKey, setPlayKey] = useState(null);
  const [liric, setLiric] = useState('');

  // テキストエリアの状態管理 
  const inputRef = useRef(null);

  // キーの入力に対しての返答の状態管理
  const [response, setResponse] = useState('');

  // キーの入力に対してダイアトニックコードのリスト管理
  const [keyList, setKeyList] = useState(["C", "Dm", "Em", "F", "G", "Am", "Bm"]);

  // それぞれ入力された時の関数
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeOriginalKey = (e) => setName(e.target.value);
  const onChangeKapo = (e) => setKapo(e.target.value);
  const onChangeKey = (e) => {
    setPlayKey(e.target.value);
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
    // テキストエリアの状態
    const input = inputRef.current;
    console.log(input)

    code = "[" + code + "]"

    if (input) {
      // カーソル位置取得
      const startPos = input.selectionStart;
      const endPos = input.selectionEnd;

      const newText = liric.substring(0, startPos) + code + liric.substring(endPos);

      setLiric(newText);
      input.focus();
      input.selectionStart = startPos;
      input.selectionEnd = startPos;
    }
  }

  return (
    <div className="App">
      <h1>楽譜作成</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="曲名" onChange={onChangeTitle} />
        </Form.Group>
        <Form.Group className="mb-3">  
          <Form.Control type="text" placeholder="アーティスト名" onChange={onChangeName} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>元曲keyを選択</Form.Label>
          <Form.Select value={originalKey} onChange={onChangeOriginalKey}>
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
          </Form.Select>
        </Form.Group>
      </Form>

      <Form>
        <Form.Label>演奏する時のkey設定</Form.Label>
        <Form.Group className="mb-3">
          <Form.Label>カポの位置を選択</Form.Label>
          <Form.Select value={kapo} onChange={onChangeKapo}>
            <option value="0">Capo 0</option>
            <option value="1">Capo 1</option>
            <option value="2">Capo 2</option>
            <option value="3">Capo 3</option>
            <option value="4">Capo 4</option>
            <option value="5">Capo 5</option>
            <option value="6">Capo 6</option>
            <option value="7">Capo 7</option>
            <option value="-1">半音下げ</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>play_keyを選択</Form.Label>
          <Form.Select value={playKey} onChange={onChangeKey}>
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
          </Form.Select>
        </Form.Group>
      </Form>
      
      <label>選択したkeyでよく使用するコード</label>
      <br />
      <ButtonGroup className="mb-3">
        <Button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[0])}}>{keyList[0]}</Button>
        <Button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[1])}}>{keyList[1]}</Button>
        <Button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[2])}}>{keyList[2]}</Button>
        <Button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[3])}}>{keyList[3]}</Button>
        <Button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[4])}}>{keyList[4]}</Button>
        <Button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[5])}}>{keyList[5]}</Button>
        <Button onClick={(e) => {e.preventDefault(); onClickCodeButton(keyList[6])}}>{keyList[6]}</Button>
      </ButtonGroup>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={10} value={liric} ref={inputRef} onChange={onChangeLiric} placeholder="歌詞，コード" />
        </Form.Group>
      </Form>
      
      <Button type="submit" >作成</Button>

    </div>
  );
};

export default App;
