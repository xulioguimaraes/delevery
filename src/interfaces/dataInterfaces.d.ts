export interface CatalogTypes {
    expanded?: boolean
    name: string,
    id: string
    methods: string[],
    order: number,
    visible: boolean,
    itens: ItensCatalogTypes[]
}
export interface ItensCatalogTypes {
    name: string
    visible: boolean
    id: string
    thumb: string
    price_promo: number | string
    image: string
    price: number | string
    description: string
    order: number
    methods: string[]
    attributes: AttributesItensCatalogTypes[]
}
export interface AttributesItensCatalogTypes {
    itens: ItensAttributesTypes[]
    visible: boolean,
    order: number,
    name: string,
    qty: number[],
    id: string
}
export interface ProductsProps {
    plan: string
    catalog: CatalogTypes[]
    id: string
    app: AppTypes
    config:ConfigTypes
    slug: string,
    isOpen: boolean
}
export interface ItensAttributesTypes {
    visible: boolean
    description: string | null
    price: string
    order: number
    name: string
    id: string
}
export interface ConfigTypes{
    pdv: PdvConfigTypes
}
export interface PdvConfigTypes{
    method: string
    steps: boolean
}
export interface AppTypes {
    name: string
    config: ConfigAppTypes
    info:InfoAppTypes
    media: MediaAppTypes
    description: string
}
export interface MediaAppTypes{
    icon512: string
    screenshot: string
    icon192: string
    logo: string
    cover: string
}
export interface InfoAppTypes {
    complement: string,
    social: SocialInfoAppTypes
    number: string
    id: string
    whatsapp: string
    show: boolean
    region: string
    postal: string
    phone: string
    geolocation: GeolocationInfoAppTypes
    neighborhood: string
    latlng:LatlngInfoAppTypes
    show_whatsapp: boolean
    formatted: string
    show_phone:boolean
    default: boolean
    district: string
    city: string
    addressKey: string
    address: string
}
export interface LatlngInfoAppTypes{
    lng: number
    lat: number
}
export interface GeolocationInfoAppTypes {
    lat: number
    lng: number
}
export interface SocialInfoAppTypes {
    instagram: string,
    site: string,
    facebook: string
}
export interface ConfigAppTypes {
    methods: string[]
    fee_method: string
    desc_limit: number
    status: string,
    domain: string,
    opening: OpeningConfigAppTypes[]
    receipts: ReceiptsConfigAppTypes
    after_order: string
    fee: {
        until: any[]
    }
    orders: OrdersConfigAppTypes
    install: InstallConfigAppTypes

    payments: PaymentsConfigAppTypes
    tables: boolean
    gmt: string
    boolean: false
    printers: PrintersConfigAppTypes[]
    minimum: MinimumConfigAppTypes
    theme_color: ThemeColorConfigAppTypes
    outside: boolean,
    analytics: AnalyticsConfigAppTypes
    catalog_view: boolean,
    methodsReadOnly: string[],
    accordion: boolean,
    taxes: TaxesConfigAppTypes[],
    fee_nh_id: string
}
export interface TaxesConfigAppTypes {
    value: number
    methods: string[],
    type: string
    name: string
}
export interface AnalyticsConfigAppTypes {
    pixelFacebook: string
    googleAnalytics: string
}
export interface ThemeColorConfigAppTypes {
    nightmode: string[]
    default: string[]
}
export interface MinimumConfigAppTypes {
    drivethru: string
    table: string
    balcony: string
    delivery: string
}
export interface PrintersConfigAppTypes {
    name: string
    department: string
}
export interface PaymentsConfigAppTypes {
    creditcard_data: string[]
    pix: boolean
    pix_data: PixDataPaymentsConfigAppTypes
    money: boolean
    creditcard: boolean
    online: OnlinePaymentsConfigAppTypes[]
}
export interface OnlinePaymentsConfigAppTypes {
    gateway: string
}
export interface PixDataPaymentsConfigAppTypes {
    pix_key: string
    pix_name: string
    pix_type: string
}
export interface InstallConfigAppTypes {
    android: boolean
    ios: boolean
}
export interface OrdersConfigAppTypes {
    processing: string
    print: string
}
export interface OpeningConfigAppTypes {
    end: string
    start: string
    weekday: number
}
export interface ReceiptsConfigAppTypes {
    type: string
    size: string
    margin: string
    description: boolean,
    format: string
}