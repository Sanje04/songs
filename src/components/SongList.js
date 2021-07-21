import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    //take list of songs, map over them and give back as jsx
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div className="ui button primary">
                            Select
                        </div>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        //console.log(this.props.songs);
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

//state has all the data inside the redux store


const mapStateToProps = (state) => {
    //console.log(state);

    return {
        songs: state.songs
    };
}

//second set of parenthesis invoke the function being returned
export default connect(mapStateToProps)(SongList);