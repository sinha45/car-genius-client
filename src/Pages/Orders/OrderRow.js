import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {

    const { _id, serviceName, price, customer, phone, service, status } = order;

    const [orderService, serOrderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => serOrderService(data));
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            {

                                orderService?.img &&
                                < img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">
                            {phone}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">$ {price}</span>
            </td>
            <td>$ {price}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className='btn btn-ghost btn-xs'>{status ? status : 'pending'}</button>
            </th>

        </tr>

    );
};

export default OrderRow;

