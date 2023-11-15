from django.db import connection

def my_custom_sql(id_motel):
    with connection.cursor() as cursor:
        cursor.callproc('find_by_motel', [id_motel])
        result = cursor.fetchall()
    return result