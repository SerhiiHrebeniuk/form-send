import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;


const ComentsForm = () => {

    const [form] = Form.useForm();
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const AllComments = [];


    const onFinish = (value) => {
        AllComments.push(value);
    };

    const onFinishFailed = () => {
        console.log("Failed:", "Something went wrong");
    };

    const onReset = () => {
        form.resetFields();
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    return (
        <Typography style={{ height: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
            <Title
                level={1}
                style={{ marginTop: "50px", textAlign: "center" }}
            >
                Write Your Comment</Title>
            <Form
                onSubmit={handleSubmit}
                form={form}
                style={{ height: "30%", width: "50%", borderRadius: "10px", background: "#b1c5d4" }}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    style={{ marginTop: "50px" }}
                    label="Name"
                    name="Name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input style={{ width: "90%" }} type="text" value={name} placeholder="Enter Your Name" onChange={handleChangeName} />
                </Form.Item>
                <Form.Item
                    label="Comments"
                    name="Comments"
                    rules={[{ required: true, message: 'Please input your Comments!' }]}
                >
                    <Input style={{ width: "90%" }} type="text" value={text} placeholder="Enter Your Comments" onChange={handleChangeText} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    <Button style={{ marginLeft: "10px" }} type="button" onClick={onReset}>Reset</Button>
                </Form.Item>
            </Form>
        </Typography>
    )
}

export default ComentsForm;
