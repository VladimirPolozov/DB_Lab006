use("FirstBase");
db.Emps.aggregate([
    {
        $match: {
            "dept.number": { $in: [31, 42, 50] },
            $or: [
                { salary: { $lt: 1000 } },
                { salary: { $gt: 2500 } }
            ]
        }
    },
    {
        $project: {
            _id: 0,
            last_name: 1,
            salary: 1
        }
    }
]);