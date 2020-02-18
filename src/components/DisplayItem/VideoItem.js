/**
 * Implements VideoItem in list
 */
import React from 'react';
import {
    formatLength,
    formatItemInfo
} from './helper'

import './DisplayItem.css'

import { VideoSourceTypes } from '../../types/VideoSourceTypes'

const VideoItem = ({ itemData }) => {
    const {
        date,
        views,
        length,
        source,
        title
    } = itemData;

    const videoSource = getVideoSource(source);
    const videoDuration = length && Number.isNaN(length) ? formatLength(length) : "";
    const itemInfo = formatItemInfo(date, views); 
    const playerCode = videoSource.getPlayer(itemData[videoSource.id])

    return (
        <div className="display-item">
            {playerCode}
            <div className="display-item__details">
                <h2>{title}</h2>
                <div className="display-item__info">
                    <p>{itemInfo}</p>
                </div>
                <div className="display-item__bottom-bar">
                    <div>{videoSource.getIcon()}</div>
                    <div className="display-item__bottom-bar__duration">{videoDuration}</div>
                </div>
            </div>
        </div>
    );
}

// Find a proper video source
// Note: should be implemented as a hash to avoid iteration
const getVideoSource = (source) =>
    VideoSourceTypes.find(videoSource => videoSource.name === source);

export default VideoItem;
