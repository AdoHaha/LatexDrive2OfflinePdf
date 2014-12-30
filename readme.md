Google Drive to Pdf
===========

This small project is for making pdf from latex files edited on Google Drive. 

You need to have [phantomjs](http://phantomjs.org/) installed.

Compile from drive has a syntax:

compile_from_drive.sh link texfilename foldername latex_compiler

for example

./compile_from_drive.sh https://docs.google.com/document/d/15evyeZQxmsFkovLIIql53IahTJBWWF-dNjOJaZE6YJo/pub example ./testfolder xelatex
