
phantomjs plain_text.js $1 | tail -n +2 | head -n -1 >"$3"/"$2".tex


cd $3





if [ -n $4 ]; then
        compiler_name="$4"
else
        compiler_name="pdflatex"
fi
"$compiler_name" "$2"
bibtex $2
makeindex $2
"$compiler_name" "$2"
"$compiler_name" "$2"

