export class AbstractComponent {
    public noContentInfo: string = null;
    public sugestionInfo: string = null;

    private _isLoading: boolean;
    private _activeProduct: any = null;

    get activeProduct() {
        return this._activeProduct;
    }

    set activeProduct(value: any) {
        this._activeProduct = value;
    }

    get isLoading() {
        return this._isLoading;
    }

    set isLoading(value: boolean) {
        this._isLoading = value;
    }
}
