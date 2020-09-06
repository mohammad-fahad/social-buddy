import React, { useState, useEffect } from 'react';
import Wall from '../Wall/Wall';


const Home = () => {
    const [posts, setPosts] = useState([]);    
    useEffect(() => {
        const api = `https://jsonplaceholder.typicode.com/posts`
        fetch(api)
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])    
    return (
        <div>
           {
            posts.map(pst =><Wall pst={pst} />)
          } 
        </div>
    );
};

export default Home;