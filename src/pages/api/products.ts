// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({
        "plan": "business",
        "catalog": [
            {
                "name": "Bebidas e refrigerante",
                "methods": ["table", "balcony", "delivery"],
                "order": 5,
                "visible": true,
                "itens": [{
                    "name": "Sucos copo",
                    "visible": true,
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/qF1M92k2uTAEjk0MA2ld10Psr/vWov88wcVP_150x150.png",
                    "price_promo": 4.5,
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/qF1M92k2uTAEjk0MA2ld10Psr/vWov88wcVP_428x389.png",
                    "price": 5.5,
                    "description": "Escolha seu sabor",
                    "order": 0,
                    "methods": ["balcony", "table"],
                    "attributes": [{
                        "itens": [{
                            "visible": true,
                            "description": "Água e açucar",
                            "price": "1",
                            "order": 0,
                            "name": "Acerola",
                            "id": "XAdoX9AvhO"
                        }, {
                            "price": "3",
                            "description": "Em cubos",
                            "name": "Abacaxi",
                            "visible": true,
                            "order": 1,
                            "id": "D4wNRfl0cZ"
                        }, {
                            "visible": true,
                            "order": 5,
                            "price": 0,
                            "name": "Cupuaçu",
                            "id": "p2J13NBwHz"
                        }],
                        "visible": true,
                        "order": 0,
                        "name": "ESCOLHA O SABOR",
                        "qty": [1, 1],
                        "id": "PdiywDBn6z"
                    }, {
                        "qty": [1, 4],
                        "itens": [{
                            "price": "5",
                            "visible": true,
                            "name": "10 cubos",
                            "id": "0cdJAEFu"
                        }, {
                            "visible": true,
                            "price": "1",
                            "name": "1 cubo",
                            "id": "9OM81M1Y"
                        }, {
                            "visible": true,
                            "price": "3",
                            "name": "5 cubos",
                            "id": "losXMj7e"
                        }],
                        "visible": true,
                        "name": "Gelo",
                        "id": "WSc39rOR"
                    }],
                    "id": "xCQG9De7CT"
                }, {
                    "description": null,
                    "name": "Coca cola lata",
                    "methods": ["delivery", "drivethru", "table", "balcony"],
                    "visible": true,
                    "order": 1,
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/qF1M92k2uTAEjk0MA2ld10Psr/7q5JhfCwI0_150x150.png",
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/qF1M92k2uTAEjk0MA2ld10Psr/7q5JhfCwI0_613x434.png",
                    "price_promo": 4.5,
                    "price": 4.99,
                    "attributes": [],
                    "id": "7xZct2YNqj"
                }],
                "id": "Mak8AYNCda"
            }, {
                "order": 4,
                "visible": true,
                "name": "Hambúrgueres",
                "itens": [{
                    "order": 1,
                    "name": "Sobá Grande",
                    "visible": true,
                    "price_promo": 21,
                    "description": "Delicioso Sobá - Campo Grandense",
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/yRfNIaF3bP_150x150.png",
                    "attributes": [{
                        "visible": true,
                        "itens": [{
                            "name": "Gengibre",
                            "price": "1",
                            "visible": true,
                            "id": "v5hGMLJq"
                        }],
                        "name": "Adicionais",
                        "qty": [0, 99],
                        "id": "0AK1jKHm"
                    }],
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/yRfNIaF3bP_599x532.png",
                    "price": 22,
                    "id": "8x5Jt83h",
                    "methods": ["delivery", "drivethru", "table", "balcony"]
                }, {
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/fIWa1DQV8R_1078x904.png",
                    "order": 0,
                    "price_promo": 41,
                    "description": "3 burguers 150gr ",
                    "methods": ["balcony", "delivery", "table", "drivethru"],
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/fIWa1DQV8R_150x150.png",
                    "name": "Combo X-Bacon",
                    "price": 42,
                    "attributes": [],
                    "visible": true,
                    "id": "cMUUo7MQ"
                }],
                "methods": [],
                "id": "MD9nKHzkgn"
            }, {
                "order": 2,
                "methods": [],
                "visible": true,
                "name": "Lasanhas",
                "itens": [{
                    "name": "Lasanha Bolonhesa",
                    "attributes": [],
                    "visible": true,
                    "order": 1,
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/fB1dxB4aFd_600x380.png",
                    "description": "",
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/fB1dxB4aFd_150x150.png",
                    "methods": ["delivery", "drivethru", "table", "balcony"],
                    "price": 24,
                    "id": "Qb0O8VO0"
                }, {
                    "description": "Napolitana deliciosa",
                    "visible": true,
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/wlDwMW1e2l_150x150.png",
                    "attributes": [{
                        "qty": [0, 9],
                        "visible": true,
                        "name": "Molho adicional",
                        "config": {},
                        "itens": [{
                            "visible": true,
                            "description": "Queijo parmesão ralado",
                            "name": "Queijo extra",
                            "price": "6",
                            "id": "Z5qL8U67"
                        }],
                        "id": "ylHLlue8"
                    }],
                    "methods": ["table", "delivery", "balcony", "drivethru"],
                    "name": "Lasanha Napolitana V3",
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/wlDwMW1e2l_726x422.png",
                    "price_promo": 30,
                    "order": 0,
                    "price": 54,
                    "id": "rS2mCX1n"
                }],
                "id": "eW72voshW4"
            }, {
                "visible": true,
                "name": "PALMITO",
                "order": 3,
                "itens": [{
                    "price_promo": 45,
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/8ThXcZ3Uws_150x150.jpeg",
                    "order": 2,
                    "attributes": [{
                        "qty": [1, 10],
                        "visible": true,
                        "name": "Adicional ",
                        "itens": [{
                            "price": "25",
                            "name": "Vaso de palmeira ",
                            "visible": true,
                            "id": "8MX5zG3J"
                        }, {
                            "price": "20",
                            "visible": true,
                            "name": "Vaso de açaí ",
                            "id": "X7SlboAH"
                        }],
                        "id": "h0n866GB"
                    }],
                    "description": "Colhido na hora ",
                    "visible": true,
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/8ThXcZ3Uws_480x640.jpeg",
                    "name": "Palmito in Natura ",
                    "price": 50,
                    "methods": ["drivethru", "table", "delivery", "balcony"],
                    "id": "4U0nXxGj"
                }],
                "id": "AeoKI8lY7v",
                "methods": []
            }, {
                "methods": [],
                "itens": [{
                    "methods": ["delivery", "drivethru", "balcony", "table"],
                    "description": "Combo japonês",
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/rfjpBY6Yc6_1015x762.jpeg",
                    "attributes": [{
                        "config": {},
                        "name": "Sashimi",
                        "itens": [{
                            "name": "Atum",
                            "visible": true,
                            "id": "3d8N0sP0"
                        }, {
                            "name": "Salmão",
                            "visible": true,
                            "id": "32yYeCWk"
                        }],
                        "qty": [0, 5],
                        "visible": true,
                        "id": "VNxioYuV"
                    }, {
                        "name": "Uramaki",
                        "itens": [{
                            "visible": true,
                            "name": "Philadelphia",
                            "id": "2ga9eve9"
                        }, {
                            "name": "Califórnia",
                            "visible": true,
                            "id": "aEY39sWz"
                        }],
                        "visible": true,
                        "qty": [0, 15],
                        "id": "eqDBxHVz"
                    }],
                    "visible": true,
                    "name": "Combo 15pçs",
                    "price": 100,
                    "price_promo": 90,
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/rfjpBY6Yc6_150x150.jpeg",
                    "config": {
                        "qty": [15, 15]
                    },
                    "id": "37SXMUQ1"
                }],
                "name": "Sushi",
                "order": 1,
                "visible": true,
                "id": "S1Ym798pm4"
            }, {
                "methods": [],
                "order": 0,
                "name": "Pizzas Grandes",
                "visible": true,
                "itens": [{
                    "name": "Pizza Inteira (Um sabor)",
                    "visible": true,
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/x0r828T16l_150x150.png",
                    "price": 0,
                    "description": "",
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/x0r828T16l_500x504.png",
                    "attributes": [{
                        "name": "Escolha o sabor",
                        "visible": true,
                        "qty": [1, 99],
                        "itens": [{
                            "name": "Mussarela",
                            "visible": true,
                            "price": "28",
                            "id": "1q47YqJO"
                        }, {
                            "visible": true,
                            "name": "Calabresa",
                            "price": "30",
                            "id": "9F1zsg2r"
                        }],
                        "id": "5zcTX5G0"
                    }],
                    "methods": ["delivery", "drivethru", "table", "balcony"],
                    "id": "zK3tXDe6"
                }, {
                    "name": "Pizza 2 Sabores",
                    "price": 0,
                    "methods": ["delivery", "table", "balcony"],
                    "config": {
                        "qty": [0, 0]
                    },
                    "thumb": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/n8IhN1v06P_150x150.png",
                    "image": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/n8IhN1v06P_568x502.png",
                    "description": "Escolha sua opção",
                    "attributes": [{
                        "itens": [{
                            "visible": true,
                            "name": "Frango",
                            "price": "3",
                            "id": "p41ffVFG"
                        }, {
                            "visible": true,
                            "name": "Mussarela",
                            "price": "10",
                            "id": "8OehtReo"
                        }, {
                            "price": "5",
                            "name": "Calabresa",
                            "visible": true,
                            "id": "7dMMwfy5"
                        }],
                        "qty": [2, 2],
                        "visible": true,
                        "config": {
                            "multiply": true
                        },
                        "name": "Escolha as opções",
                        "id": "4Vzz0m1M"
                    }],
                    "visible": true,
                    "id": "b25Cewfi"
                }],
                "id": "n2Mbe7S0gv"
            }],
        "id": "E088DYPxiqrnFisjf8Ri3zC6E",
        "app": {
            "name": "Kawaii Sushi Novo",
            "config": {
                "methods": ["delivery", "drivethru", "table", "balcony"],
                "fee_method": "neighborhood",
                "desc_limit": 20,
                "status": "open",
                "domain": "k",
                "opening": [{
                    "end": "23:59",
                    "start": "08:00",
                    "weekday": 0
                }, {
                    "end": "23:59",
                    "start": "08:00",
                    "weekday": 1
                }, {
                    "end": "23:59",
                    "weekday": 2,
                    "start": "08:00"
                }, {
                    "start": "08:00",
                    "weekday": 3,
                    "end": "23:59"
                }, {
                    "end": "10:00",
                    "start": "08:00",
                    "weekday": 4
                }, {
                    "end": "18:00",
                    "start": "08:00",
                    "weekday": 5
                }, {
                    "start": "08:00",
                    "end": "23:59",
                    "weekday": 6
                }],
                "receipts": {
                    "type": "simple",
                    "size": "default",
                    "margin": "0,0,0,0",
                    "description": true,
                    "format": "text"
                },
                "after_order": "whatsapp",
                "fee": {
                    "until": []
                },
                "orders": {
                    "processing": "onaccept",
                    "print": "autoonaccept"
                },
                "install": {
                    "android": true,
                    "ios": false
                },
                "payments": {
                    "creditcard_data": ["creditAmex", "debitVisa"],
                    "pix": true,
                    "pix_data": {
                        "pix_key": "02743202132",
                        "pix_name": "Antonio João Castello Branco",
                        "pix_type": "email"
                    },
                    "money": true,
                    "creditcard": true,
                    "online": [{
                        "gateway": "mercadopago"
                    }]
                },
                "tables": true,
                "gmt": "GMT-4",
                "schedule": false,
                "printers": [{
                    "name": "MP-4200 TH",
                    "department": "cozinha"
                }, {
                    "name": "MP-4200 TH",
                    "department": "bar"
                }],
                "minimum": {
                    "drivethru": "",
                    "table": "",
                    "balcony": "10,00",
                    "delivery": "1"
                },
                "theme_color": {
                    "nightmode": ["#ff9900", "#e68a00"],
                    "default": ["#e66210", "#cd570e"]
                },
                "outside": false,
                "analytics": {
                    "pixelFacebook": "342635594041091",
                    "googleAnalytics": "G-D1YDK6YTVH"
                },
                "catalog_view": true,
                "methodsReadOnly": ["table"],
                "accordion": false,
                "taxes": [{
                    "value": 6,
                    "methods": ["table"],
                    "type": "$",
                    "name": "Embalagem"
                }],
                "fee_nh_id": "13-2836"
            },
            "info": {
                "complement": "",
                "social": {
                    "instagram": "",
                    "site": "",
                    "facebook": ""
                },
                "number": "242",
                "id": "Bpl546i66v",
                "whatsapp": "(67) 98541654",
                "show": false,
                "region": "Mato Grosso do Sul",
                "postal": "79022-560",
                "phone": "(67) 984746428",
                "geolocation": {
                    "lat": -20.4450824,
                    "lng": -54.59946619999999
                },
                "neighborhood": "Vila Célia",
                "latlng": {
                    "lng": -54.59946619999999,
                    "lat": -20.4450824
                },
                "show_whatsapp": false,
                "formatted": "R. Maranhão, 242 - Vila Célia, Campo Grande - MS, 79022-560, Brasil",
                "show_phone": false,
                "default": true,
                "district": "Vila Célia",
                "city": "Campo Grande",
                "addressKey": "Utpt3XRXz143Ic9RPA38",
                "address": "Rua Maranhão"
            },
            "media": {
                "icon512": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/wT1HnpbT9u_512x512_circle.png",
                "screenshot": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/9Ip8SNjzbVloZS70B8eG.jpg",
                "icon192": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/wT1HnpbT9u_192x192_circle.png",
                "logo": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/wT1HnpbT9u_640x640.jpeg",
                "cover": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/9S4HfwJ6Oi_820x312.png"
            },
            "description": "Sushi delicioso e divertido. O mais fofo sushi de Campo Grande MS.. Não da pra comer triste!"
        },
        "config": {
            "pdv": {
                "method": "default",
                "steps": true
            }
        },
        "slug": "kawaiisushi",
        "isOpen": true
    })
}
