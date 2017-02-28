
import * as Vue from 'vue';
import Component from 'vue-class-component';


@Component({
    template: `
<ul>
<li v-for="item in codes">{{ item }}</li>
</ul>
`,
    props: {
        propMessage: String
    }
})
export default class MyComponent extends Vue {
    message: string = 'Hello'

    codes: string[] = ["1", "2", "3", "4", "5"]

    name: string = 'Hello'

    onClick (): void {
        window.alert(this.message)
    }
}
