from django.contrib import admin

from .models import *

class InlineBookCategories(admin.TabularInline):
    model = BookCategories
    extra = 1
class InlinePages(admin.StackedInline):
    model = Page
    extra = 1


class BookAdmin(admin.ModelAdmin):
    inlines = [InlinePages]
    list_display = ("id", "book_name", "section", "shelf",)
    list_display_links = ("id", "book_name", "section", "shelf",)
    list_filter = ("shelf", )
    fieldsets = (
        ("Book", {
            "fields": (
                "book_name",
                "section",
                "shelf",
                "pdf_document",
            )
        }),
    )

class LibraryAdmin(admin.ModelAdmin):
    inlines = [InlineBookCategories]
    list_display = ("id", "department",)
    list_display_links = ("id", "department",)
    list_filter = ("id", "department",)
    fieldsets = (
        ("Department", {
            "fields": (
                "department",
            )
        }),
    )


admin.site.register(Library, LibraryAdmin)
admin.site.register(Book, BookAdmin)
