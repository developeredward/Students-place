from django.contrib import admin

from .models import *

admin.site.register(BookCategories)
admin.site.register(Library)
admin.site.register(Book)
admin.site.register(Pages)