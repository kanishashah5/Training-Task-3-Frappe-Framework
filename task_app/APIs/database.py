import frappe

# @frappe.whitelist()
# def get_record():
#     return frappe.db.get_list('Person')


# @frappe.whitelist()
# def get_record(author):
#     return frappe.db.get_list('Article' , filters={'article_author':author}, fields=['article_name' , 'article_author', 'description'])




# @frappe.whitelist()
# def rename_doctype():
#     frappe.db.rename_table('Article Doctype' , 'Article')
#     return "Table renamed successfull"



@frappe.whitelist()
def get_description_of_doctype(dtype):
    return frappe.db.describe(
        doctype=dtype
    )
