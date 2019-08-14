import React from "react";

export const InfoBlockMovie = ({title, content}) => (
    <React.Fragment>
        <dt>{title}</dt>
        <dd>{content}</dd>
    </React.Fragment>
);