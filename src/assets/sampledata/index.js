//Remember that there can be products that has no need of managing the stock
//for that kind of products there should be a stockMange variable. Implement that in the backend development.
export const productList = [
    {
        _id : "8efb8e7f5b7a4b9e9b1a9c4b9e5b7a4b",
        name: "Macbook pro",
        altNames: ["Apple laptop", "Mac laptop"],
        labeledPrice: 1000,
        lastPrice: 900,
        description: "A laptop made by Apple",
        image : [
            "https://demo.ishithemes.com/opencart/OPC034/image/cache/catalog/productsimage/13-1000x1000.png",
            "https://demo.ishithemes.com/opencart/OPC034/image/cache/catalog/productsimage/2-370x370.png",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ], 
        offerEnding : "2024-10-10T00:00:00.000Z",
        variedBy : [
            {
                name: "Color",
                values : [{
                    name : "Red",
                    icon : "#ff0000"
                },
                {
                    name : "Blue",
                    icon : "#0000ff"
                },
                {
                    name : "Green",
                    icon : "#00ff00"
                }],
                iconType : "color",
            },
            {
                name: "Size",
                values : [{
                    name : "13 inch",
                    icon : "https://th.bing.com/th/id/OIP.KoKk_vYZW-dFP-YSdRSOZwHaEo?rs=1&pid=ImgDetMain"
                },
                {
                    name : "15 inch",
                    icon : "https://th.bing.com/th/id/OIP.KoKk_vYZW-dFP-YSdRSOZwHaEo?rs=1&pid=ImgDetMain"
                },
                {
                    name : "17 inch",
                    icon : "https://th.bing.com/th/id/OIP.KoKk_vYZW-dFP-YSdRSOZwHaEo?rs=1&pid=ImgDetMain"
                }],
                iconType : "image",
            },
            {
                name: "Storage",
                values : [{
                    name : "256 GB",
                    icon : "256 GB"
                },
                {
                    name : "512 GB",
                    icon : "512 GB"
                },
                {
                    name : "1 TB",
                    icon : "1 TB"
                }],
                iconType : "text",
            }
        ],
        variants : [
            {
                filters : ["Red","13 inch","256 GB"],
                images : [
                    "https://th.bing.com/th/id/R.a161652d3bd18bc4854d4653eb607103?rik=0EdopmY4ZNC4hg&pid=ImgRaw&r=0",
                    "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
                    "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
                    "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
                    "https://th.bing.com/th/id/OIP.FZIxLoy1x6g_FK5LqopSOgHaFj?rs=1&pid=ImgDetMain"
                ],
                labeledPrice : 10000,
                lastPrice : 9500,
                stock : 10
            }
        ]
    },
    {
        _id : "8efb8e7f5b7a4b9e9b1a9c4b9e5b7a4c",
        name: "Macbook pro",
        altNames: ["Apple laptop", "Mac laptop"],
        labeledPrice: 1000,
        lastPrice: 900,
        description: "A laptop made by Apple",
        image : [
            "https://th.bing.com/th/id/R.a161652d3bd18bc4854d4653eb607103?rik=0EdopmY4ZNC4hg&pid=ImgRaw&r=0",
            "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ], 
        offerEnding : ""      
    },
    {
        _id : "8efb8e7f5b7a4b9e9b1a9c4b9e5b7a4f",
        name: "Macbook pro",
        altNames: ["Apple laptop", "Mac laptop"],
        labeledPrice: 1000,
        lastPrice: 900,
        description: "A laptop made by Apple",
        image : [
            "https://demo.ishithemes.com/opencart/OPC034/image/cache/catalog/productsimage/18-370x370.png",
            "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ],
        offerEnding : "2024-10-10T00:00:00.000Z",      
    },
    {
        _id : "8efb8e7f5b7a4b9e9b1a9c4b9e5b7a4g",
        name: "Macbook pro",
        altNames: ["Apple laptop", "Mac laptop"],
        labeledPrice: 900,
        lastPrice: 900,
        description: "A laptop made by Apple",
        image : [
            "https://th.bing.com/th/id/R.a161652d3bd18bc4854d4653eb607103?rik=0EdopmY4ZNC4hg&pid=ImgRaw&r=0",
            "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ],
        offerEnding : ""
    },
]
export const ratings = [
    {
        username : "user1",
        rating : 5,
        review : "This is a great product",
        date : "2024-02-21T00:00:00.000Z",
        images : [
            "https://th.bing.com/th/id/R.a161652d3bd18bc4854d4653eb607103?rik=0EdopmY4ZNC4hg&pid=ImgRaw&r=0",
            "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ]
    },
    {
        username : "user2",
        rating : 4,
        review : "This is a great product",
        date : "2021-10-10T00:00:00.000Z",
        images : [
            "https://th.bing.com/th/id/R.a161652d3bd18bc4854d4653eb607103?rik=0EdopmY4ZNC4hg&pid=ImgRaw&r=0",
            "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ]
    },
    {
        username : "user3",
        rating : 3,
        review : "This is a great product",
        date : "2021-10-10T00:00:00.000Z",
        images : [
            "https://th.bing.com/th/id/R.a161652d3bd18bc4854d4653eb607103?rik=0EdopmY4ZNC4hg&pid=ImgRaw&r=0",
            "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ]
    },
    {
        username : "user4",
        rating : 2,
        review : "This is a great product",
        date : "2021-10-10T00:00:00.000Z",
        images : [
            "https://th.bing.com/th/id/R.a161652d3bd18bc4854d4653eb607103?rik=0EdopmY4ZNC4hg&pid=ImgRaw&r=0",
            "https://cdn.shopify.com/s/files/1/0080/5312/9313/products/me866lla-pb-rc-unit_900x.jpg?v=1602775387",
            "https://th.bing.com/th/id/OIP.iNEnJut7-WP5BQ-dgcYTMAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
            "https://th.bing.com/th/id/OIP.A5WPGjv8i0Mhu_nGFylRvAHaFj?w=500&h=375&rs=1&pid=ImgDetMain",
        ]
    }

]

// export const boughtProducts = [
//     {
//         productID : "8efb8e7f5b7a4b9e9b1a9c4b9e5b7a4b",
//         quantity : 2,
//         price : 1000,
//         productName : "Macbook pro",
//         varient : ["Red","13 inch","256 GB"],

//     }
// ]