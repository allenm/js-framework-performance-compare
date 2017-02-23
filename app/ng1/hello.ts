
import * as angular from 'angular';
import { jd } from '../data/jd';

const app = angular.module('Hello', [
]);

let helloCtrl = function () {
    this.jd = jd;
}

let template = `
<div>
    <h1>{{ $ctrl.jd.title }}</h1>
    <h2>岗位描述：</h2>
    <ol>
        <li ng-repeat="jdItem in $ctrl.jd.jdItems track by $index">{{ jdItem }}</li>
    </ol>
    <h2>岗位要求：</h2>
    <ol>
        <li ng-repeat="requireItem in $ctrl.jd.requireItems track by $index">{{ requireItem }}</li>
    </ol>
    <p>联系方式:<a ng-href={{ 'mailto:' + $ctrl.jd.email }}>{{ $ctrl.jd.email }}</a></p>
</div>
`;

app.component('helloWorld', {
    controller: helloCtrl,
    template: template,
    bindings: {
    }
})

angular.bootstrap(document.body, ['Hello']);