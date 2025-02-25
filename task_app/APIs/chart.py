import frappe


@frappe.whitelist()
def get_chart_data():
    # Fetch age data from "Server Side Scripting" Doctype
    data = frappe.get_all('Server Side Scripting',
        fields=['age']
    )

    # Count number of people in each category
    count_above_45 = sum(1 for entry in data if entry.age > 45)
    count_below_or_equal_45 = sum(1 for entry in data if entry.age <= 45)

    return {
        'labels': ['Age ≤ 45', 'Age > 45'],  # X-axis labels
        'datasets': [
            {
                'name': 'People Count',
                'values': [count_below_or_equal_45, count_above_45]  # Y-axis values
            }
        ]
    }