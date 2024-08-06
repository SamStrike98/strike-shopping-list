import React from 'react'

const ItemsCount = ({ itemsAmount }) => {
    return (
        <div className="stats shadow ">
            <div className="stat">
                <div className="stat-title">Total No. of Items</div>
                <div className="stat-value text-center">{itemsAmount}</div>
            </div>
        </div>
    )
}

export default ItemsCount