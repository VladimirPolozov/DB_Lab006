use("FirstBase");

db.Emps.aggregate([
    {
        $project: {
            _id: 0,
            last_name: 1,
            monthsCount: {
                $dateDiff: {
                    startDate: "$start_date",
                    endDate: new Date(),
                    unit: "month"
                }
            },
            hireDayOfWeek: {
                $dayOfWeek: "$start_date" // Определяем день недели (1 = воскресенье, ..., 7 = суббота)
            }
        }
    },
    {
        $sort: { monthsCount: 1 }
    }
]);