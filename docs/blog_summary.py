import markdown
import os
from datetime import datetime
from collections import OrderedDict

KEY_TITLE = 'title'
KEY_FILENAME = 'filename'
KEY_AUTHOR = 'author'
KEY_DATE = 'date'
KEY_ABSTRACT = 'abstract'
KEY_STATUS = 'status'
KEY_IMG = 'socialmediaimage'
DATE_FORMAT_IN_MD = '%d %B %Y' # For more info - https://docs.python.org/2/library/datetime.html#strftime-and-strptime-behavior

md = markdown.Markdown(extensions = ['markdown.extensions.meta'])
metadata = {}
print('<link rel="stylesheet" href="/css/blog-home-page.css"></link>')
print('<script src="/js/blog-home-page.js"></script>')

# Extracting information
for file in sorted(os.listdir("./posts"), reverse=False):
    if file.endswith(".md"):
        file_name = os.path.join("./posts", file)
        with open(file_name, "r") as mdfile:
            text = mdfile.read()
            html = md.convert(text)
            date = md.Meta[KEY_DATE][0]
            if date:
                if date not in metadata:
                    metadata[date] = {}
                title = md.Meta[KEY_TITLE][0]
                metadata[date][title] = {
                    KEY_IMG: md.Meta[KEY_IMG][0],
                    KEY_FILENAME: file_name,
                    KEY_AUTHOR: md.Meta[KEY_AUTHOR][0],
                    KEY_DATE: md.Meta[KEY_DATE][0],
                    KEY_ABSTRACT: md.Meta[KEY_ABSTRACT][0],
                    KEY_STATUS: md.Meta[KEY_STATUS][0]

                }


# Ordering by date
ordered_data = OrderedDict(
    sorted(metadata.items(), key = lambda x:datetime.strptime(x[0], DATE_FORMAT_IN_MD), reverse=True))


for date in ordered_data:
    titlesInDate = ordered_data[date]
    for title in sorted(titlesInDate):  # order by title
        current = titlesInDate[title]
        print('---')
        # print('<a href="(' + current[KEY_FILENAME] + ')"><img src="('+ current[KEY_IMG] +')"/></a>')
        # print('* __![xx]('+ current[KEY_IMG] +')__[' + title + '](' + current[KEY_FILENAME] + ')')
        # print('* [' + title + '](' + current[KEY_FILENAME] + ')')
        print('* <div class="cBlogThumbnailContainer"><img src="'+ current[KEY_IMG] +'"/></div> [' + title + '](' + current[KEY_FILENAME] + ') ')
        print('* ' + current[KEY_AUTHOR])
        print('* ' + current[KEY_DATE])
        print('* ' + current[KEY_ABSTRACT])
        print('* ' + current[KEY_STATUS])
        print('---')
