/**
 * Helper functions extracted from  DisplayItem component
 * to be tested
 */


/**
 * Validates presence of attributes
 * I've figured out that new data collection don't have length, date, 2 options:
 * a) Change validation to remove length, date << (I pick this one)
 * b) Update collection
 */
const isValidItem = ({ type, source, views }) => (type && source && views)

// defines formatting standarts
const dateStrOption = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
};

const formatItemDate = (date) => new Date(date).toLocaleDateString("en-US", dateStrOption)

// Note: this could be optimized "division without rest"
const formatLength = (num) => {
    const minutes = Math.floor(num / 60);
    const seconds = num - minutes * 60;

    return `${minutes}:${seconds}m`;
}

const formatItemInfo = (date, views) => {
    if (date) {
        if (views) {
            return (`${formatItemDate(date)} ∙ ${views}`)
        }
        return formatItemDate(date)
    }
    if (views) {
        return views
    }
    return ""
}

export {
    isValidItem,
    formatItemDate,
    formatLength,
    formatItemInfo
}