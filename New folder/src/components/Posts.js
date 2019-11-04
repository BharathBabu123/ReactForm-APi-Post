import React from 'react';

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=> this.setState({posts: data}));
    };
      
    render(){
        const postitems =this.state.posts.map(post=>(
            <div key={post.id}>
            <h3>{post.body}</h3>
            <p>{post.title}</p>
            </div>
        ));
        return(
            <div>
                   <h1>posts</h1>
                    {postitems}
            </div>
        )
    }
} 

export default Posts;