export interface ShopList {
    readonly id: number;
    created_date: string;
    realize_date: string;
    isRealized: boolean;
    name: string;
    products: Array<ShopListProduct>;
}

export interface ShopListProduct {
    readonly id: number;
    bought: boolean;
    name: string;
}
