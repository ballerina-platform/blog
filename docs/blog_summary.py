import markdown
import os

md = markdown.Markdown(extensions = ['markdown.extensions.meta'])

print('<link rel="stylesheet" href="/css/blog-home-page.css"></link>')
for file in os.listdir("./posts"):
    if file.endswith(".md"):
        file_name = os.path.join("./posts", file)
        with open(file_name, "r") as mdfile:
            text = mdfile.read()
            html = md.convert(text)
            print('---')            
            print( '* [' + md.Meta['title'][0] + '](' + file_name + ')')
            print('* ' + md.Meta['author'][0])
            print('* ' + md.Meta['date'][0])
            print('* ' + md.Meta['abstract'][1])
            print('* ' + md.Meta['status'][0])
            print('---')            

