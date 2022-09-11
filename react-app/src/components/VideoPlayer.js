import React from "react";
import YouTube from "react-youtube";
import PropTypes from 'prop-types';

export default function VideoPlayer(props) {
    const opts = {
        height: props.height,
        width: props.width,
        playerVars: props.playerVars,
    };

    return <YouTube videoId={props.videoId} opts={opts} />;
}

VideoPlayer.propsTypes = {
    videoId: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    playerVars: PropTypes.object,
}