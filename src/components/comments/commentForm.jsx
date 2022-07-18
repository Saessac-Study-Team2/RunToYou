import React, { useState } from "react";
import axios from "axios";

// axios.defaults.withCredentials = true;

const CommentForm = () => {
    // const [text, setText] = useState("");
    // const isTextareaDisabled = text.length === 0;

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     handlesubmit(text);
    //     postComment(text)
    // }

    return (
        <div className="comment_container">
            {/* <form onSubmit={onSubmit}>
                <textarea
                    className="comment_form_textarea"
                    placeholder="댓글을 작성해주세요"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <button
                    className="comment_form_button"
                    onClick={onSubmit}
                    disabled={isTextareaDisabled}>작성</button>
            </form> */}
        </div>
    )
}

export default CommentForm;