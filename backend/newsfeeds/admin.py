from django.contrib import admin

from .models import *

class InlineComments(admin.TabularInline):
    model = Comment
    extra = 1


class PostAdmin(admin.ModelAdmin):
    inlines = [InlineComments]
    list_display = ("id", "post_by",)
    list_display_links = ("id", "post_by",)
    list_filter = ("id", "post_by")
    search_fields = ("id", "post_by")
    fieldsets = (
        ("Post", {
            "fields": (
                "content",
                "image",
                "video",
                "document",
                "post_by",
            )
        }),
    )





admin.site.register(Post, PostAdmin)
