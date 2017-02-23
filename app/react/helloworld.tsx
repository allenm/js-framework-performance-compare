import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { jd } from '../data/jd';
import { DingTalkJD } from './DingTalkJD';

const element = (
    <div>
        <DingTalkJD jd={jd}/>
    </div>
)

ReactDOM.render(
    element,
    document.getElementById('root')
)
