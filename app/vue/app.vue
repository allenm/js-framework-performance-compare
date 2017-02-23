<template>
  <div id="app">
    <h1>{{jd.title}}</h1>
    <h2>岗位描述：</h2>
    <ol>
        <li v-for="jdItem in jd.jdItems">{{jdItem}}</li>
    </ol>
    <h2>岗位要求：</h2>
    <ol>
        <li v-for="requireItem in jd.requireItems">{{requireItem}}</li>
    </ol>
    <p>联系方式:<a :href="'mailto:' + jd.email">{{jd.email}}</a></p>
  </div>
</template>

<script>

import { jd } from '../data/jd';

export default {
  name: 'app',
  data () {
    return {
      jd: jd
    }
  }
}
</script>
