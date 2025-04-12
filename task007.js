use("FirstBase");

db.Ords.aggregate([
    {
        $unwind: "$products"
    },
    {
        $group: {
            _id: "$products.product._id",
            productId: { $first: "$products.product._id" },
            ordersCount: { $sum: 1 }
        }
    },
    {
        $match: {
            ordersCount: { $gte: 3 }
        }
    },
    {
        $sort: { productId: 1 }
    },
    {
        $project: {
            _id: 1,
            ordersCount: 1
        }
    }
]);