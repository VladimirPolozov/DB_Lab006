use("FirstBase");

db.Emps.aggregate([
    {
        $match: {
            start_date: {
                $gte: new Date("1990-05-14T00:00:00Z"),
                $lte: new Date("1991-05-26T23:59:59Z")
            }
        }
    },
    {
        $project: {
            _id: 0,
            last_name: 1,
            first_name: 1,
            start_date: 1
        }
    },
    {
        $sort: { start_date: -1 }
    }
]);