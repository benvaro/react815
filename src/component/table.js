import React from 'react';

const Table = ({ obj }) => {
    return <div className='container table '>
        {obj.map((elem) => {
            return <tr className='w-100'>
                <td className='w-100'>{elem.name}</td>
            </tr>
        })}
    </div>
}

export default Table;