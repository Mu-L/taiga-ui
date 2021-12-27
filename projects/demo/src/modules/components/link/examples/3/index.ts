import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-link-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLinkExample3 {
    onClick(event: MouseEvent) {
        console.info('click', event);
    }
}
