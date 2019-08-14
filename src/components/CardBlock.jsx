import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'antd';

const { Meta } = Card;

export const CardBlock = ({id, poster, title}) => (
    <div key={id} className="card-movie">
        <Link to={"/movie/" + id} >
            <Card
                hoverable
                cover={<img alt="example" src={poster}/>}
            >
                <Meta title={title}/>
            </Card>
        </Link>
    </div>
);