import {Component, ElementRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {fromEvent} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-destroy-example',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
    providers: [TuiDestroyService],
})
export class TuiDestroyExample {
    constructor(destroy$: TuiDestroyService, {nativeElement}: ElementRef<HTMLElement>) {
        fromEvent(nativeElement, 'click')
            .pipe(takeUntil(destroy$))
            .subscribe(() => console.info('click'));
    }
}
