import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import Comments from './Comments';


import ComentsForm from '../ComentsForm/ComentsForm';
import Title from 'antd/lib/typography/Title';


const Main = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const BASE_URL = `https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`;

    useEffect(() => {
        const loadUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    BASE_URL
                );

                setUsers((users) => [...users, ...response.data.data]);
                setErrorMsg('');
            } catch (error) {
                setErrorMsg('Error while loading data. Try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        loadUsers();
    }, [BASE_URL, page]);

    const loadMore = () => {
        setPage((page) => page + 1);
    };

    if (isLoading) {
        return (
            <Title level={2}
                style={{ textAlign: "center", marginTop: "400px" }}
            >
                Loading...
            </Title>
        )
    }

    return (
        <Layout style={{ background: "#d6d7dc" }}>
            <ComentsForm />
            <Comments users={users} />
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Button
                type="primary"
                htmlType="button"
                style={{ width: "10%", marginLeft: "640px", marginBottom: "30px" }}
                onClick={loadMore}
            >
                {isLoading ? 'Loading...' : 'Load More'}
            </Button>
        </Layout>
    )
}

export default Main;
