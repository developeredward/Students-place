from django.contrib import admin

from .models import *

class InlineComments(admin.TabularInline):
    model = Comment
    extra = 1


class PostAdmin(admin.ModelAdmin):
    inlines = [InlineComments]
    list_display = ("id", "title", "post_by",)
    list_display_links = ("id", "title", "post_by",)
    list_filter = ("title", "id")
    search_fields = ("title", "id")
    fieldsets = (
        ("Post", {
            "fields": (
                "title",
                "overview",
                "detail",
                "post_by",
            )
        }),
    )





admin.site.register(Post, PostAdmin)
