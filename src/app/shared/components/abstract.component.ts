import { BehaviorSubject } from 'rxjs';

export class AbstractComponent {
    // Content header config
    public headerTitle: string = null;
    public headerSubtitle: string = null;
    public headerIcon: string = null;

    // no content data
    public noContentInfo: string = null;
    public sugestionInfo: string = null;

    private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private _activeProduct: any = null;

    get activeProduct() {
        return this._activeProduct;
    }

    set activeProduct(value: any) {
        this._activeProduct = value;
    }

    get isLoading() {
        return this._isLoading as any;
    }

    set isLoading(value: boolean) {
        this._isLoading.next(value);
    }
}
