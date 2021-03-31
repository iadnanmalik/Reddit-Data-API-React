import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import axios from 'axios';

function Reddit() {
  const [posts, setPosts] = React.useState([]);


React.useEffect(() => {
  axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const newPosts = res.data.data.children
        .map(obj => obj.data);

      setPosts(newPosts);
    });
}, []);
return (
  <div>
    <h1>/r/reactjs</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);
}
ReactDOM.render(<Reddit />, document.getElementById("root"));

/*
function Room() {
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? "lit" : "dark";
  return (
    <div className={`room ${brightness}`}>the room is {isLit ? "lit": "dark"}
     <br />
    <button onClick={() => setLit(!isLit)}>
     flip
    </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));
 */


  /*
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
function Hi(props) {
  return <div id="id1">Hello {props.name}</div>;
}


const MediaCard = (props) =>{
  return (
 <div>
     <h2>
      {props.title}
    </h2>
    <p>
      {props.body}
    </p>
    </div>
  )
}

ReactDOM.render(<MediaCard title="Adnan" body="Computer Scientist"/>, document.querySelector('#root'));
*/