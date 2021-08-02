import React from 'react';
import 'antd/dist/antd.css';
import Coment from './Coment.js'

const Comments = ({ users }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "50px" }}>
      {users && users.map((user) => <Coment key={user.id} {...user} />)}
    </div>
  )
}

export default Comments;
