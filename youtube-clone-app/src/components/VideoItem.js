import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

class videoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid item xs={12}>
        <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => this.props.onVideoSelect(this.props.videos)}>
          <img style={{ marginRight: '20px' }} alt="thumbnail" src={this.props.video.snippet.thumbnails.medium.url}/>
          <Typography variant="subtitle1"><b>{this.props.video.snippet.title}</b></Typography>
        </Paper>
      </Grid>
    )
  }
}

export default videoItem;