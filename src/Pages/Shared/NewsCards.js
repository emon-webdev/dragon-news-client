import React from 'react';

const NewsCards = ({news}) => {
    return (
        <div>
            <h2>News Cards: {news.length}</h2>
        </div>
    );
};

export default NewsCards;