import React,{useState} from 'react';
import books from './components/Books';
import './App.css';


function App(){
  const [text1, setText1] = useState('');
  const changeHandler=()=>{
    if (text1 ===''){
      setText1('Amazon');
    }
    else {
      setText1('');
    }
  };

 return(
  
   <>
   <h1 className="title">{text1} Best Sellers in Children's Books</h1>
   <span><button type ="button" onClick={changeHandler}>Change Title</button></span>
   <h1 id="demo"></h1>
  
<section className="booklist">

{books.map((book)=>{
  return<ul><li key = {book.id}> <Book  book={book} /></li></ul>
})}


</section>
</>
 )};

const Book = (props)=> {
const {img,title,author,link,text}=props.book;
return(
  
<div className="container">

<article className="book">
<img onMouseOver={()=>document.getElementById("demo").innerText=title} src = {img} alt=""/>

  <h1 >{title}</h1><h1 id="demo"></h1>
  <h4><small>by {author}</small></h4>
  <a href ={link} target="_self">Buy Now</a>
  <p>{text}</p>
</article>

</div>
)
 }

 export default App;
