# For inserting data of dialog into fields of doctype using API call  



# import frappe

# @frappe.whitelist()
# def create_dialog_doc(first_name, last_name, age):
#     """
#     Creates a new record in 'Dialog Doctype' with the given details.
#     """
#     try:
#         doc = frappe.get_doc({
#             "doctype": "Dialog Doctype",
#             "first_name": first_name,
#             "last_name": last_name,
#             "age": age
#         })
#         doc.insert()
#         frappe.db.commit()  # Ensure data is saved

#         return {"status": "success", "message": "Record created successfully", "docname": doc.name}
#     except Exception as e:
#         return {"status": "error", "message": str(e)}


#                                    wup


# import frappe

# @frappe.whitelist()
# def process_dialog_action(docname=None):  # ✅ Set a default value to avoid missing argument error
#     if not docname:
#         return {"error": "Missing 'docname' parameter!"}

#     try:
#         doc = frappe.get_doc("Dialog Doctype", docname)
#         doc.status = "Processed"  # Example update
#         doc.save()
#         frappe.db.commit()
#         return {"message": f"Document {docname} updated successfully!"}

#     except Exception as e:
#         return {"error": str(e)}


#                                    wup


