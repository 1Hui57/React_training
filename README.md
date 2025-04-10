
# 啟動專案
```
npm run dev
```
# 資料夾介紹
* node_module：存放一些專案依賴的套件，別更動
* publuc：存放靜態資源，例如圖片
* src：存放專案的原始碼，99%使用這個資料夾
    * jsx檔案=JavaScriptXML：可以把JavaScript跟HTML結合在一起=>經過vite裡的編譯工具，轉換成JavaScript=>React會再將JavaScript轉換成HTML元素
* index.html 單頁式應用程式只會有一個HTML
<br>
<br>

# React基本
conponent 組件=>把多個HTML元素裝在一起=>把網頁拆分成不同部分來寫
* 創建組件有兩種方式<br>
    * class (現今鮮少使用)
    * function function函數有回傳一個HTML元素就是一個組件
* 組件分為
        * parent component 父組件
        * child component 子組件
* 每個組件只能回傳一個元素，不能同時回傳多個元素，這是由於JS的return本來就只能回傳一個物件
* 使用css檔案只要在組件import css檔案即可
### 運作方式<br>
* App.jsx會輸出成App組件
```
export default App
```
* 在main.jsx import app 導入app組件
```
import App from './App.jsx'
```
* 再由React將物件轉換成HTML
```
  <React.StrictMode>
    <App />
  </React.StrictMode>,
```

* app組件是處在最上層的組件，其他所有組件都會被放在app組件裡面，而形成樹狀結構，因此app組件也稱為**根組件**
<br><br>
*  main.jsx內有一行程式碼
```
document.getElementById('root')
```
這裡抓取的id為root的DOM是index.html內React已設置的
```
<div id="root"></div>
```
<br>

# React條件判斷式
### 使用條件判斷式，可以決定使用者看到的畫面呈現

* 直接以條件判斷式return決定使用者看到的html

```
function App() {
  if (true){
    return <h1>hello</h1>
  } else {
    return <h1>world</h1>
  } 
}

// else可以省略寫成
function App() {
  if (true){
    return <h1>hello</h1>
  } 
    return <h1>world</h1>
}

// 三元運算子寫法
function App() {
  return(true ? <h1>hello</h1> : <h1>world</h1>)
}
```
* 將條件寫在寫在html裡面
```
function App(){
  return(
    <div className="my-div">
      {true ? <h1>hello</h1> : <h1>world</h1>}
    </div>
  )
}
// 如果是true，div內顯示<h1>hello</h1>
// 如果是false，div內顯示<h1>world</h1>
```

* 在className裡面使用三元運算，可切換html的class
```
function App(){
  return(
    <div className={true ? "a" : "b"}>
      {true ? <h1>hello</h1> : <h1>world</h1>}
    </div>
  )
}
// 此時<div class="a"></div>
// 多個class可寫成<div className={true ? "a c" : "b c"}>

// 或使用反引號字串，此時class顯示 class="c a"
<div className={`c ${true ? 'a' : 'b'}`}>
  {true ? <h1>hello</h1> : <h1>world</h1>}
</div>
```
* && AND邏輯運算(可以決定是否要展示某元素)

當&&左邊的值是真值(true)，就會回傳右邊的值
<br>
若是false或是undefined，就會回傳左邊的值，而在jsx檔案會忽略false和undefind，所以就不會顯示
```
// <div class="my-div">內會有<h1>hello</h1>
<div className="my-div">
  {true && <h1>hello</h1>}
</div>

// <div class="my-div">內沒有東西
<div className="my-div">
  {false && <h1>hello</h1>}
</div>

```

<br>

# React props 傳遞資料
### 使用props可以從父組件傳遞資料到子組件 

* props=properties=屬性
* 只能從上到下傳遞，不能從下到上
```
function PropsComponent(props){
  console.log(props.a);
  return(   
    <>
    <div>{props.a}</div>
    <div>{props.b}</div>
    </>
    )
}
// 也可以經過解構賦值，而物件的解構賦值是以屬性名來取用資料，因此順序改變沒有關係，但要用相同名稱
function PropsComponent({a,b,c}){
  console.log(a);
  return(   
    <>
    <div>{b}</div>
    <div>{c}</div>
    </>
    )
}

function App() {
  return(
    <>
    <PropsComponent a="hehehe" b="hahaha" c="你好"/>
    </>
  )
}
```
