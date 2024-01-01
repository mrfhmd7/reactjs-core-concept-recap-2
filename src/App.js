// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Natore" special="Kacha Golla"></District>
      <District name="Rajshahi" special="Mango"></District>
      <District name="Bogura" special="Doi"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightBlue',
  margin: '15px',
  padding: '10px',
  borderRadius: '10px',
}

function District(props) {

  const [power, setPower] = useState(1);

  const handlePower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Famous for: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={handlePower}>Boost the power</button>
    </div>
  )
}

function LoadPost() {

  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => setPost(data))
      // console.log(posts);
  }, [])

  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post =>
          <Post
            key={post.id}
            body={post.body}
            title={post.title}>
            </Post>
        )
      }
    </div>
  )
}

function Post(props) {
  return (
    <div  style={districtStyle}>
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}

export default App;
