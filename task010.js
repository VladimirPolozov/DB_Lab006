use("FirstBase");

db.Emps.aggregate([
    {
        $project: {
            _id: 0,
            firstName: "$first_name",
            startDate: {
                $dateToString: {
                    date: "$start_date",
                    format: "%d.%m.%Y"
                },
            },
            salaryChangedDate: {
                $dateToString: {
                    date: {
                        $dateAdd: {
                            startDate: "$start_date",
                            unit: "month",
                            amount: 6
                        }
                    },
                    format: "%d.%m.%Y"
                }
            }
        }
    }
]);