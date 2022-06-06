import React from "react";
import dateFormat from "dateformat";

const LoadComments = props => {
    if (props.noComment) {
        return (
            <></>
        );
    }
    return (
        <>
            <div className="fs-4 text-success">{props.commentObj.comment}</div>
            <div className="text-info">Rating: {props.commentObj.rating}</div>
            <div className="text-primary">User: {props.commentObj.author}</div>
            <div className="mb-3">Date: {dateFormat(props.commentObj.date, "dddd, mmmm dS, yy, h:MM TT")}</div>
        </>
    );
}

export default LoadComments;