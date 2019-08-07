import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

class VideoList extends React.Component{
  render() {
    return (
      this.props.videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={() => this.props.onVideoSelect(video)}/>)
    )
  }
}

export default VideoList;