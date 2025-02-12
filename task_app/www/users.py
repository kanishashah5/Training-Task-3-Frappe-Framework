import frappe 



def get_context(context):
    context.users = frappe.get_list("Users_DynamicPage" , fields=["first_name" , "surname"])

    users = frappe.get_list("Server Side Scripting" , filters={"enable": 1} , fields=["first_name" , "last_name" , "email" , "name"])

    for user in users:
        user_doc = frappe.get_doc("Server Side Scripting" , user['name'])
        user['family_members'] = user_doc.get("family_members")

    context.user_details = users