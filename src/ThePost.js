import React from 'react'

import { useQuery } from "react-query";
//donesi
const getProducts = (url) => fetch(url).then((rez) => rez.json());

export default function ThePost({thePost, goBack}) {

  //useQuery
  const { data: post, isLoading } = useQuery(["post", thePost], () =>
    getProducts(`https://jsonplaceholder.typicode.com/posts/${thePost}`)
  );
  console.log(post);

if (isLoading) {
    return <p>loading post...</p>
}

    return (
        <div>
            <a href='#' onClick={goBack}>Go back</a>
            <br/>
            It is {thePost}
            <p>{post.title}</p>
            <p>{post.body}</p>                        
        </div>
    )
}
