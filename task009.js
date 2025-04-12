use("FirstBase");

db.Ords.aggregate([
    {
        $unwind: "$products"
    },
    {
        $group: {
            _id: "$customer._id",
            ordersCount: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 1,
            ordersCount: 1
        }
    }
]);