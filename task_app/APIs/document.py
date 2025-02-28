import frappe

@frappe.whitelist()
def get_record(doctype, name):
    return frappe.get_doc(doctype, name)


@frappe.whitelist()
def get_record_filtered(f_name):
    return frappe.get_all("Person", filters={'f_name':f_name} , fields=['f_name','surname'])



@frappe.whitelist()
def insert_new_record(a_name):
    doc = frappe.new_doc('Article')
    doc.article_name = a_name
    doc.insert()
    frappe.db.commit()
    return "Doc added successfully"



@frappe.whitelist()
def delete_record():
    frappe.delete_doc('Article', 'mjeuk9mqja')
    frappe.db.commit()
    return "Doc deleted successfully"


@frappe.whitelist()
def rename_record():
    frappe.rename_doc('Article', 'Article-5555' , "Article-77")
    frappe.db.commit()
    return "Doc renamed successfully"
