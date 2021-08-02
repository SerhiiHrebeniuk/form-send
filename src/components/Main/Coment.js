import React from "react";
import { Comment } from 'antd';
import 'antd/dist/antd.css';
import Title from "antd/lib/typography/Title";
import { Typography } from 'antd';

const { Paragraph } = Typography;

const Coment = ({ name, id, text }) => {
    return (
        <Comment
            style={{ border: "1px solid red", width: "50%", margin: "20px 0", borderRadius: "10px", boxShadow: "inset 0px 0px 13px 5px rgba(87,128,255,0.68)" }}
            content={
                <div>
                    <Title level={3} style={{ marginLeft: "20px" }}>
                        <strong>Name:</strong> {name}
                    </Title>
                    <Paragraph style={{ marginLeft: "20px" }}>
                        <strong>Id:</strong> {id}
                    </Paragraph>
                    <Paragraph style={{ marginLeft: "20px" }}>
                        <strong>Text:</strong> {text}
                    </Paragraph>
                </div>
            }
        />
    );
};

export default Coment;