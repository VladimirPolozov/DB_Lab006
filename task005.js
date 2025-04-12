use("FirstBase");

db.Emp.aggregate([
    {
        $project: {
            _id: 1,
            number_of_items: { $size: "$products" }
        }
    }
]);