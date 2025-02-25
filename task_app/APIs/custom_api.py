import frappe


@frappe.whitelist()
def greet():
    return {"message": "Hello from Custom API!"} 