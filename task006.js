use("FirstBase");

db.Emps.aggregate([
    {
        $match: {
            manager: { $ne: null }
        }
    },
    {
        $group: {
            _id: "$manager",
            minSalary: { $min: "$salary" }
        }
    },
    {
        $match: {
            minSalary: { $gte: 1000 }
        }
    },
    {
        $sort: { minSalary: 1 }
    },
    {
        $project: {
            _id: 1,
            minSalary: 1
        }
    }
]);