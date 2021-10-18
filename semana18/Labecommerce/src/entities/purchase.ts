export class Purchase {
    id: string
    total_price: number
    user_id: string
    product_id: string

    constructor (
        id: string,
        total_price: number,
        user_id: string,
        product_id: string

    ) {
        this.id = id
        this.total_price = total_price
        this.user_id = user_id
        this.product_id = product_id
    }
}
