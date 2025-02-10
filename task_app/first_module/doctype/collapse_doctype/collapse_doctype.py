# Copyright (c) 2025, Sanskar Technolab and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class CollapseDoctype(Document):
	pass


# @frappe.whitelist()
# def remove_collapsible_sections(doctype):
#     """Removes all collapsible sections from the specified doctype by adding property setters"""
    
#     # Fetch all fields where collapsible is set to 1
#     meta = frappe.get_meta(doctype)
#     collapsible_fields = [df.fieldname for df in meta.fields if df.collapsible]

#     if not collapsible_fields:
#         return "No collapsible sections found."

#     # Create Property Setters to remove collapsibility
#     for fieldname in collapsible_fields:
#         frappe.get_doc({
#             "doctype": "Property Setter",
#             "doc_type": doctype,
#             "property": "collapsible",
#             "property_type": "Check",
#             "field_name": fieldname,
#             "value": 0
#         }).insert(ignore_permissions=True)

#     frappe.db.commit()
#     return "Collapsible sections removed successfully."
