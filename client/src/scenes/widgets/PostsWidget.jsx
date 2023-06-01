import { get } from "../../utils/api";
import PostWidget from "./PostWidget";
import { setPosts } from "@state";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const fetchPosts = async () => {
    const url = `${import.meta.env.VITE_API_URL}/posts`;
    const data = await get(url, token);
    dispatch(setPosts({ posts: data }));
  };

  const fetchUserPosts = async () => {
    const url = `${import.meta.env.VITE_API_URL}/posts/${userId}`;
    const data = await get(url, token);
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      fetchUserPosts();
    } else {
      fetchPosts();
    }
  }, []);

  function isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  if (posts === undefined || !posts || isEmptyObject(posts)) return;

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
