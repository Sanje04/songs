import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        return (
            <div>SongList</div>
        )
    }
}

//second set of parenthesis invoke the function being returned
export default connect()(SongList);