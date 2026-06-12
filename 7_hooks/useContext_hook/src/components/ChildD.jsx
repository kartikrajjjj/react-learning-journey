import React, { useContext } from 'react';
import { userContext2 } from '../App';

const ChildD = () => {

    const user1=useContext(userContext2);

  return (
    <div>
            Output from ChildD - Age: {user1.age}
    </div>
  )
}

export default ChildD