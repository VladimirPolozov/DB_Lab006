use("FirstBase");

db.Emps.aggregate([
    {
        $group: {
            _id: "$title",
            minSalary: { $min: "$salary" },
            maxSalary: { $max: "$salary" }
        }
    },
    {
        $sort: { title: 1 }
    }
]);