pwd
echo "Cleaning dist folder"
rm -rf dist
mkdir -p dist
echo "Copying src to dist/firefox folder"
cp -r src/ dist/firefox/
yes | cp -f firefox/background.js dist/firefox/
yes | cp -f firefox/manifest.json dist/firefox/
echo "Generating zip file"
cd dist/firefox/
zip -rq ../scrolltotop-lite-ff.zip * -x "*.DS_Store"
cd ../..
echo "ZIP generated"
