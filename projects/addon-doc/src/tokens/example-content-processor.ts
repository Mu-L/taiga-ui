import {InjectionToken} from '@angular/core';
import {identity, TuiHandler} from '@taiga-ui/cdk';
import {TuiDocExampleProcessed} from '../interfaces/page';

export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR: InjectionToken<
    TuiHandler<TuiDocExampleProcessed, TuiDocExampleProcessed>
> = new InjectionToken('Processes content in example', {factory: () => identity});
