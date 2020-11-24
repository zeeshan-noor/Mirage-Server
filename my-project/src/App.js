import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
   setInterval(() => {
    fetch("/api/books")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setBooks(data);
    })
   }, 2000);
  }, [])

  const addBook = ()=>{
    const title = prompt("Enter Book Title");
    const author  = prompt("Enter Book Author")
    if(!title || !author)
    return false
    fetch("/api/add",{
      method:"POST",
      body:JSON.stringify({title,author})
    }).then((res)=>res.json())

  }

  if (!books.length)
    return <h2>Loading....!!</h2>
  return (
    <div className="App">
      <h1 className="center">Availible Books</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((bookobj, ind) => {
            return (
              <tr key={ind}>
                <td>{bookobj.title}</td>
                <td>{ bookobj.author}</td>
              </tr>
            )
          })}
        </tbody>
      </table> 
      <button onClick={addBook}>Add Book</button>   </div>
  );
}

export default App;
