from django.db import models
from tinymce.models import HTMLField

class Library(models.Model):
    department = models.CharField(max_length=100, unique=True)
    
    def __str__(self):
        return self.department

class BookCategories(models.Model):
    category_title = models.CharField(max_length=100, unique=True)
    library = models.ForeignKey(Library, on_delete=models.CASCADE)

    def __str__(self):
        return self.category_title



class Book(models.Model):
    book_name = models.CharField(max_length=50)
    section = models.ForeignKey(Library, on_delete=models.CASCADE)
    shelf = models.ForeignKey(BookCategories, on_delete=models.CASCADE)
    pdf_document = models.FilePathField(choices=[("pdf",".pdf"), ("doc",".doc",)], blank=True, null=True)
    
    def __str__(self):
        return self.book_name


class Page(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True)
    content = HTMLField(blank=False, null=False)
    book = models.ForeignKey(Book, related_name="book",  on_delete=models.CASCADE)

    def __str__(self):
        if self.title:
            return self.title
        else: 
            return self.page_number
