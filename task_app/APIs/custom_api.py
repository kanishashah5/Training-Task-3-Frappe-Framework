import frappe


# -------------------Can be accessed publicly---------------- 

# @frappe.whitelist(allow_guest=True)
# def greet():
#     return {"message": "Hello from Custom API!"} 

# -----------------------Only authorised users can access this-------------
@frappe.whitelist()
def greet():
    return {"message": "Hello from Custom API!"} 