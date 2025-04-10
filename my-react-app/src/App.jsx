// 組件名稱的開頭一定要大寫
// 組件定義內不要再寫一個組件定義，可能出bug
// 組件跟檔案通常會相同名字
import ChildComponent from "./ChildComponent";
import './App.css';
import { useState } from "react";
// 每個組件通常會自己一個檔案，要將組件導入另一個組件時，只要在return那裏寫上要導入的組件，上方程式會自動幫忙import組件
function MyComponent({children}) {
  return (
    <>
      <ChildComponent />
      {children}
    </>
) 
}

function SecondComponent(){
  return <h1>second component</h1>

}

// 以下的MyComponent></MyComponent>就等於上面的<h1>
// return 需要接圓括號()，或者直接將標籤皆在return後面，否則只是代表程式結束的return
// 要在JSX使用JS須加大括號
// 要新增class的話要輸入className
// style的兩個大括號，外層代表要使用JS，內層的大括號則是JS的物件，backgroundColor:'red'則是以JS物件模仿CSS
function App() {
  const text = 'hello world';
  // useState的參數是初始值，會回傳一個陣列，
  // 第一個資料是state內容，第二則是用來更改state內容的函數
  // 陣列的解構賦值順序就很重要
  const [clicks, setClicks] = useState(0);
  const handleClick=()=>{
    setClicks(clicks+1);
    console.log(clicks);
        // alert("hello");
  };
  // 要在jsx中使用陣列，需要設定key值，因為React需要精準定位每個元素。且不要用index當key，除非陣列不會變動
  const listItems = [
    <MyComponent key="0"/>,
    <MyComponent key="1"/>,
    <MyComponent key="2"/>,
  ];
  // map可以將陣列轉換為新陣列，不影響原本的陣列
  const listNames = [
    {content:"張三",id:"abc"},
    {content:"李四",id:"asd"},
    {content:"王五",id:"zxc"},
  ];
  // filter會過濾陣列，回傳true，該筆資料會留存下來，false則會過濾掉該筆資料，並回傳一個過濾後的新陣列
  const filterItems = listNames.filter((item) => {
    if (item.content!=="李四"){
      return true
    }
  })
  return (
    <div>
      <input type="text" placeholder={text}/>
      <h1 style={{backgroundColor:'red'}} className="h1-tag">{text.toUpperCase()}</h1>
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent>
        <SecondComponent />
      </MyComponent>
      <button onClick={function(){alert('hello')}}>我是按鈕</button>
      <button onClick={handleClick}>我是按鈕:{clicks}</button>
      {listItems}
      {listNames.map((item) => {
        return <div key={item.id}>{item.content}</div>
      })}
      {filterItems.map((item) => {
        return <div key={item.id}>{item.content}</div>
      })}
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
