/**
 * Implements a List with mixed content, logic to filter supported types
 */
import React from 'react';

import './ItemsList.css'

import DisplayItem from '../../components/DisplayItem/DisplayItem';
import { VideoSourceTypes } from '../../types/VideoSourceTypes'

// Define a sourceNames array to avoid n+1 inside filterItems
const sourceNames = [
    ...VideoSourceTypes.map(source => source.name),
    "ex.co"
]
// Returns a list of items which we can render
const filterItems = (items) =>
    items.filter(item => sourceNames.includes(item.source))

/**
 * List of mixed content
 */
const ItemsList = ({ items }) => {
    return (
        <div className="items-list">
            <div className="item-list__header">
                <h1>Most viewed</h1>
            </div>
        <div className="items-list__content">
            {filterItems(items).map((item, index) =>
                (<DisplayItem
                    key={item.videoId ? item.videoId : index}
                    itemData={item}
                />)
            )}
        </div>
    </div>)
};

export default ItemsList;