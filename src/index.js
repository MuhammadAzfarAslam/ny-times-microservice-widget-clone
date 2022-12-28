import React from 'react';
import ReactDOM from 'react-dom';
import PostsWidget from './components/PostsWidget.jsx';

const widgets = document.querySelectorAll('.post-widget')

widgets.forEach(widget => {
    ReactDOM.render(
        <React.StrictMode>
            <PostsWidget widget={widget} />
        </React.StrictMode>,
        widget
    );
})