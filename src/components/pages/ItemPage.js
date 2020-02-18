/**
 * JS script for playbuzz included in public/index.html
 */
import React from 'react'
import { useParams, Link } from "react-router-dom";

import "./ItemPage.css";

const ItemPage = () => {
    let { itemId } = useParams();
    return (<>
        <Link to="/" className="btn__back">← Back</Link>
        <div
            className="playbuzz"
            data-id={itemId}
            data-show-share="true"
            data-show-info="true"
            data-comments="false"
        />
    </>)
}

export default ItemPage;