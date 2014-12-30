Google Drive to Pdf
===========

This small project is for making pdf from latex files edited on Google Drive. 

You need to have [phantomjs](http://phantomjs.org/) installed.

*link* is something you get when you **publish to web** in google drive

Compile from drive has a syntax:

compile_from_drive.sh link texfilename foldername latex_compiler

for example

'''./compile_from_drive.sh https://docs.google.com/document/d/15evyeZQxmsFkovLIIql53IahTJBWWF-dNjOJaZE6YJo/pub example ./testfolder xelatex
'''

If you want this to happen every 5 minutes (this is how often this file could be updated by Google Drive) do this:

'''
watch -n300 ./compile_from_drive.sh https://docs.google.com/document/d/15evyeZQxmsFkovLIIql53IahTJBWWF-dNjOJaZE6YJo/pub example ./testfolder xelatex
'''
