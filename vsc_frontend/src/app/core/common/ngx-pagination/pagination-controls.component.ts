import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core'
import {DEFAULT_TEMPLATE, DEFAULT_STYLES} from './template';

function coerceToBoolean(input: string | boolean): boolean {
    return !!input && input !== 'false';
}

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
@Component({
    selector: 'ngx-pagination',
    template: DEFAULT_TEMPLATE,
    styles: [DEFAULT_STYLES],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PaginationControlsComponent {

    @Input() id: string;
    @Input() maxSize: number = 7;
    @Input()
    get directionLinks(): boolean {
        return this._directionLinks;
    }
    set directionLinks(value: boolean) {
        this._directionLinks = coerceToBoolean(value);
    }
    @Input()
    get autoHide(): boolean {
        return this._autoHide;
    }
    set autoHide(value: boolean) {
        this._autoHide = coerceToBoolean(value);
    }
    @Input()
    get responsive(): boolean {
        return this._responsive;
    }
    set responsive(value: boolean) {
        this._responsive = coerceToBoolean(value);
    }
    @Input() previousLabel: string = '';
    @Input() nextLabel: string = '';
    @Input() firstLabel: string = '';
    @Input() lastLabel: string = '';
    @Input() screenReaderPaginationLabel: string = 'Pagination';
    @Input() screenReaderPageLabel: string = 'page';
    @Input() screenReaderCurrentLabel: string = `You're on page`;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() pageBoundsCorrection: EventEmitter<number> = new EventEmitter<number>();

    resultPage: string = 'COMMON.SHOW_RESULTS';
    resultText: string = 'COMMON.RESULT';
    private _directionLinks: boolean = true;
    private _autoHide: boolean = false;
    private _responsive: boolean = false;
}
