// 組件名稱的開頭一定要大寫
// 組件定義內不要再寫一個組件定義，可能出bug
// 組件跟檔案通常會相同名字
import ChildComponent from "./ChildComponent";
import './App.css';
// 每個組件通常會自己一個檔案，要將組件導入另一個組件時，只要在return那裏寫上要導入的組件，上方程式會自動幫忙import組件
function MyComponent() {
  return <ChildComponent />;
}
// 以下的MyComponent></MyComponent>就等於上面的<h1>
// return 需要接圓括號()，或者直接將標籤皆在return後面，否則只是代表程式結束的return
// 要在JSX使用JS須加大括號
// 要新增class的話要輸入className
// style的兩個大括號，外層代表要使用JS，內層的大括號則是JS的物件，backgroundColor:'red'則是以JS物件模仿CSS
function App() {
  const text = 'hello world';
  const handleClick=()=>{
    alert("hello");
  };
  // 要在jsx中使用陣列，需要設定key值，因為React需要精準定位每個元素。且不要用index當key，除非陣列不會變動
  const listItems = [
    <MyComponent key="0"/>,
    <MyComponent key="1"/>,
    <MyComponent key="2"/>,
  ];
  return (
    <div>
      <input type="text" placeholder={text}/>
      <h1 style={{backgroundColor:'red'}} className="h1-tag">{text.toUpperCase()}</h1>
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <button onClick={function(){alert('hello')}}>我是按鈕</button>
      <button onClick={handleClick}>我是按鈕</button>
      {listItems}
    </div>
    // 如果onClick={handleClick}加圓括號handleClick()，程式會立即執行函式，而不是等到點擊才執行
    // 可以寫成<MyComponent/>，而MyComponent這個組件為App這個組件的子組件，App組件為父組件
    // 如果外面不要包裹著div元素，可以將div文字刪除，只留下角括號，叫做Fragment
    //   <>
    //    <MyComponent />
    //    <MyComponent />
    //    <MyComponent />
    //   </>
  );
}

export default App;
