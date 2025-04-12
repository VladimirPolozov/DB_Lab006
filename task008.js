use("FirstBase");

db.Depts.aggregate([
    {
        $unwind: "$region"
    },
    {
        $group: {
            _id: "$region",
            deptCount: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 1,
            deptCount: 1
        }
    }
])