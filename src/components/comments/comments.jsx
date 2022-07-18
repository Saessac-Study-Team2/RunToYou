import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from './comment'
import CommentForm from './commentForm'
import { useRecoilState } from 'recoil';
import { userState, isUserState } from '../../library/atom';
import { getLoginCookie } from "../../library/cookie";

// 로그인을 안 하면 상세페이지에 들어갈 수 없음 (댓글 작성에서 로그인 여부 확인은 일단 제외)
// [get] 작성된 댓글 axios => get으로 가져오기 => props로 comment에 내려주기
// [delete] 작성된 댓글 axios => delete로 삭제하기 => props로 comment에 내려주기
// [post] 작성할 댓글 axios => post로 보내기 => props로 commentForm에 내려주기

const Comments = ({ id }) => { // topic_tid 필요
  // const [comments, setComments] = useState([]);
  // const [isLogin, setIsLogin] = useRecoilState(isUserState);
  // const [userInfo, setUserInfo] = useRecoilState(userState);

  // useEffect(() => {
  //     getComments();
  // }, []);

  // const getComments = () => {
  //     return axios
  //         .get(`http://34.168.215.145/topiccomments/${topic_tid}`)
  //         .then((res) => {
  //             setComments(res.data);
  //         }).catch((err) => {
  //             console.log('getComments err', err)
  //         })
  // }

  // const deleteComment = () => {
  //     return axios
  //         .delete(`http://34.168.215.145/topiccomments/${topiccomment_tcid}`)
  //         .then((res) => {

  //         }).catch((err) => {
  //             console.log('deleteComment err', err)
  //         })
  // }

  // const postComment = () => {
  //     const newComment = {
  //         users_uid: 'userId',
  //         topic_tid: 'postId',
  //         topiccomment: 'newComment'
  //     }

  //     return axios
  //         .post(`http://34.168.215.145/topiccomments/insert`, newComment)
  //         .then((res) => {
  //             if (res.data.success) {

  //             } else {
  //                 alert('코멘트를 저장하지 못했습니다')
  //             }
  //         }).catch((err) => {
  //             console.log('postComment err', err)
  //         })
  // }

  return (
    <div>
      <div>현재 댓글 0</div>
      <CommentForm />
      <Comment />
    </div>
  )
}

export default Comments;