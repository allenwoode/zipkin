/*
 * Copyright 2015-2019 The OpenZipkin Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  height: PropTypes.number.isRequired,
  numTimeMarkers: PropTypes.number.isRequired,
};

const MiniTimelineTimeMarkers = ({ height, numTimeMarkers }) => {
  const timeMarkers = [];
  for (let i = 1; i < numTimeMarkers - 1; i += 1) {
    const portion = 100 / (numTimeMarkers - 1) * i;
    timeMarkers.push(
      <line
        key={portion}
        x1={`${portion}%`}
        x2={`${portion}%`}
        y1="0"
        y2={height}
      />,
    );
  }
  return (
    <g stroke="#888" strokeWidth="1">
      {timeMarkers}
    </g>
  );
};

MiniTimelineTimeMarkers.propTypes = propTypes;

export default MiniTimelineTimeMarkers;
