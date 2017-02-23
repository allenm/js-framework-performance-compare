
import { Component } from '@angular/core';
import { jd } from '../data/jd';

@Component({
    selector: 'dingtalk-recruit',
    template: `
<div>
    <h1>{{ JD.title }}</h1>
    <h2>岗位描述：</h2>
    <ol>
        <li *ngFor="let jdItem of JD.jdItems">{{ jdItem }}</li>
    </ol>
    <h2>岗位要求：</h2>
    <ol>
        <li *ngFor="let requireItem of JD.requireItems">{{ requireItem }}</li>
    </ol>
    <p>联系方式:<a href="mailto: {{ JD.email }}" >{{ JD.email }}</a></p>
</div>
    `
})
export class DingTalkRecruitCmp {
    JD = jd
}