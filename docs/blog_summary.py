import markdown
import os

md = markdown.Markdown(extensions = ['markdown.extensions.meta'])

print('<link rel="stylesheet" href="/css/blog-home-page.css"></link>')
print('<script src="/js/blog-home-page.js"></script>')
for file in sorted(os.listdir("./posts"), reverse=False):
# for file in sorted(os.listdir("./posts"), reverse=False):
    if file.endswith(".md"):
        file_name = os.path.join("./posts", file)
        with open(file_name, "r") as mdfile:
            text = mdfile.read()
            html = md.convert(text)
            print('---')
            # print('* ! [xx]('+ md.Meta['socialmediaimage'][0] +')')
            # print('* __![xx]('+ md.Meta['socialmediaimage'][0] +')__[' + md.Meta['title'][0] + '](' + file_name + ')')
            print('* [' + md.Meta['title'][0] + '](' + file_name + ')')
            print('* ' + md.Meta['author'][0])
            print('* ' + md.Meta['date'][0])
            print('* ' + md.Meta['abstract'][0])
            print('* ' + md.Meta['status'][0])
            print('---')
