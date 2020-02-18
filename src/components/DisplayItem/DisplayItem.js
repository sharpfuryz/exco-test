/**
 * Implements mixed list item
 */
import React from 'react';
import VideoItem from './VideoItem';
import { ReactComponent as ExcoIcon } from "../../assets/svg/exco-icon.svg";
import { isValidItem } from './helper'
import { Link } from 'react-router-dom'

import './DisplayItem.css'

/**
 * Validate data and make decision
 */
const DisplayItem = ({ itemData }) => {
    if (isValidItem(itemData)) {
        if (itemData.source === "ex.co") {
            return (<MixedItem itemData={itemData} />)
        }
        return (<VideoItem itemData={itemData} />)
    }
    return (<ErrorItem />)
}

/**
 * Facade for invalid content
 */
const ErrorItem = () =>
    (<div className="display-item error-item">
        <div>VIDEO NOT AVAILABLE</div>
    </div>);

/**
 * Implements Ex.Co item
 * Note: no bottom bar for ex.co - no duration, no logo provided
 */
const MixedItem = ({ itemData }) => {
    const { title, views, thumbnail, itemId } = itemData
    return (<Link to={`/item/${itemId}`} className="display-item">
        {thumbnail && (<img
            className="display-item__thumbnail"
            src={thumbnail}
            alt={title}
        />)}
        <div to={`/item/${itemId}`} className="display-item__details">
            <h2>{title || "Empty title"}</h2>
            <div className="display-item__info">
                <p>{views}</p>
            </div>
            <div className="display-item__bottom-bar">
                <ExcoIcon />
            </div>
        </div>
    </Link>)
}

export default DisplayItem;