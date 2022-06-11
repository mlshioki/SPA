import React from 'react';
import Layout from '../components/shared/Layouts';

import { useMutation, useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/post/query';
import { UPDATE_LIKE } from '../graphql/post/mutation';

import Post from '../components/feed/Post';

import { UserContext } from '../auth';

export default function FeedPage(){
    const { loading, error, data } = useQuery(GET_POSTS);
    const [updateLike] = useMutation(UPDATE_LIKE);
    const [postData, setPostData] = useState([]);

    const handleUpdateLike = (post) => {
        updateLike({ variables: {id: post.id}});

        setPostData((postData) => {
			const newData = [...postData];
			const postLiked = newData.findIndex((p) => p.id == post.id);
			newData[postLiked] = { ...newData[postLiked], likes: newData[postLiked].likes + 1 };
			return newData;
		});
    }
    
    return (
        <>
        { loading && 
            <h1>Carregando</h1>
        }
        { !loading &&
            <Layout>
                <div className="row">
                    <div className="col-10 mx-auto">
                        { data.post.map((post) => <Post key={post.id} post={post} onLike={handleLike} />) }
                    </div>
                </div>
            </Layout>
        }
        </>
    );
    
        
}