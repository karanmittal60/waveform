import React, {Component} from 'react';

import Wavesurfer from 'react-wavesurfer';
// import WaveSurfer from 'wavesurfer.js';
require('wavesurfer.js');

class Waveforms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            pos: 0
        };
    }

    handlePosChange = (e) => {
        this.props.handlePositionChange(e.originalArgs[0]);
    };

    // onSeek = (data) => {
    //     console.log("data", data);
    // };

    render() {
        const {mp3url, duration, currentTime} = this.props;
        // console.log("props==>", duration, currentTime);
        return (
            <div style={{
                width: 510,
                height: 50
            }}>
                <Wavesurfer
                    audioFile={mp3url}
                    pos={currentTime}
                    onPosChange={this.handlePosChange}
                    playing={false}
                    responsive={true}
                    options={{
                        progressColor: '#fff',
                        responsive: true,
                        waveColor: '#d1d1d1',
                        height: 50,
                        cursorColor: '#fff',
                        cursorWidth: 2
                    }}
                    drag={true}
                    onSeek={this.onSeek}
                />
            </div>
        );
    }
}

export default Waveforms;
