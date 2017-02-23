import * as React from 'react';

import { JD } from '../data/jd';

interface DingTalkJDProp {
    jd: JD
}

export class DingTalkJD extends React.Component< DingTalkJDProp, null> {
    render() {
        return (
            <div>
                <h1>{this.props.jd.title}</h1>
                <h2>岗位描述：</h2>
                <ol>
                    {this.props.jd.jdItems.map((jdItem, index) => <li key={index}>{jdItem}</li>)}
                </ol>
                <h2>岗位要求：</h2>
                <ol>
                    {this.props.jd.requireItems.map((requireItem, index) => <li key={index}>{requireItem}</li>)}
                </ol>
                <p>联系方式:<a href={'mailto:' + this.props.jd.email}>{this.props.jd.email}</a></p>
            </div>
        )
    }
}

